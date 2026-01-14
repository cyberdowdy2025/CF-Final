let gameState = {
    score: 0,
    questionsAnswered: 0,
    totalQuestions: 25,
    selectedQuestions: {},
    answeredQuestions: new Set()
};

function startGame() {
    // Reset game state
    gameState = {
        score: 0,
        questionsAnswered: 0,
        totalQuestions: 25,
        selectedQuestions: {},
        answeredQuestions: new Set()
    };
    
    // Select random questions for this game
    selectRandomQuestions();
    
    // Show game board
    showScreen('game-board');
    
    // Create the board
    createBoard();
    
    // Update score display
    updateScore();
}

function selectRandomQuestions() {
    const categories = Object.keys(questionBank);
    const pointValues = [100, 200, 300, 400, 500];
    
    categories.forEach(category => {
        gameState.selectedQuestions[category] = {};
        const categoryQuestions = questionBank[category];
        
        pointValues.forEach(points => {
            // Get all questions with this point value
            const questionsWithPoints = categoryQuestions.filter(q => q.points === points);
            
            if (questionsWithPoints.length > 0) {
                // Select a random question
                const randomIndex = Math.floor(Math.random() * questionsWithPoints.length);
                gameState.selectedQuestions[category][points] = questionsWithPoints[randomIndex];
            }
        });
    });
}

function createBoard() {
    const boardGrid = document.getElementById('board-grid');
    boardGrid.innerHTML = '';
    
    const categories = Object.keys(gameState.selectedQuestions);
    const pointValues = [100, 200, 300, 400, 500];
    
    // Create category headers
    categories.forEach(category => {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = category;
        boardGrid.appendChild(header);
    });
    
    // Create question tiles
    pointValues.forEach(points => {
        categories.forEach(category => {
            const tile = document.createElement('div');
            tile.className = 'question-tile';
            tile.textContent = `$${points}`;
            tile.dataset.category = category;
            tile.dataset.points = points;
            
            const questionId = `${category}-${points}`;
            if (gameState.answeredQuestions.has(questionId)) {
                tile.classList.add('answered');
            } else {
                tile.onclick = () => showQuestion(category, points);
            }
            
            boardGrid.appendChild(tile);
        });
    });
}

function showQuestion(category, points) {
    const questionId = `${category}-${points}`;
    
    if (gameState.answeredQuestions.has(questionId)) {
        return;
    }
    
    const question = gameState.selectedQuestions[category][points];
    
    if (!question) {
        return;
    }
    
    // Update question display
    document.getElementById('question-category').textContent = category;
    document.getElementById('question-points').textContent = `$${points}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Create answer buttons
    const answersGrid = document.getElementById('answers-grid');
    answersGrid.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => checkAnswer(index, question.correct, points, questionId);
        answersGrid.appendChild(button);
    });
    
    // Clear feedback
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    
    // Show question screen
    showScreen('question-screen');
}

function checkAnswer(selectedIndex, correctIndex, points, questionId) {
    const buttons = document.querySelectorAll('.answer-btn');
    const feedback = document.getElementById('feedback');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Mark correct and incorrect answers
    buttons[correctIndex].classList.add('correct');
    
    if (selectedIndex === correctIndex) {
        feedback.textContent = '✓ Correct! +$' + points;
        feedback.className = 'feedback correct';
        gameState.score += points;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        feedback.textContent = '✗ Incorrect! The correct answer was: ' + buttons[correctIndex].textContent;
        feedback.className = 'feedback incorrect';
    }
    
    // Mark question as answered
    gameState.answeredQuestions.add(questionId);
    gameState.questionsAnswered++;
    
    // Update score
    updateScore();
    
    // Add back button after a delay
    setTimeout(() => {
        if (gameState.questionsAnswered >= gameState.totalQuestions) {
            endGame();
        } else {
            const backBtn = document.createElement('button');
            backBtn.className = 'back-btn';
            backBtn.textContent = 'Back to Board';
            backBtn.onclick = () => {
                showScreen('game-board');
                createBoard();
            };
            feedback.appendChild(backBtn);
        }
    }, 1500);
}

function updateScore() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('question-count').textContent = gameState.questionsAnswered;
}

function endGame() {
    const maxPossibleScore = 25 * 300; // Average of 100-500
    const percentage = (gameState.score / maxPossibleScore) * 100;
    
    let rank, message;
    
    if (percentage >= 90) {
        rank = "🏆 MASTER";
        message = "Outstanding! You're a Computer Fundamentals expert!";
    } else if (percentage >= 80) {
        rank = "🥇 EXPERT";
        message = "Excellent work! You have a strong grasp of the material!";
    } else if (percentage >= 70) {
        rank = "🥈 ADVANCED";
        message = "Great job! You know your stuff!";
    } else if (percentage >= 60) {
        rank = "🥉 PROFICIENT";
        message = "Good work! Keep studying to improve!";
    } else if (percentage >= 50) {
        rank = "📚 INTERMEDIATE";
        message = "Not bad! Review the material and try again!";
    } else if (percentage >= 40) {
        rank = "📖 BEGINNER";
        message = "Keep learning! Practice makes perfect!";
    } else {
        rank = "🌱 NOVICE";
        message = "Don't give up! Review the material and try again!";
    }
    
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('final-count').textContent = gameState.questionsAnswered;
    document.getElementById('rank-display').textContent = rank;
    document.getElementById('rank-message').textContent = message;
    
    showScreen('end-screen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}