// Question bank with 60 questions across 5 categories
const questionBank = {
    "Computer Parts": [
        {
            question: "What does CPU stand for?",
            answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"],
            correct: 0,
            points: 100
        },
        {
            question: "Which component is considered the 'brain' of the computer?",
            answers: ["RAM", "CPU", "Hard Drive", "Motherboard"],
            correct: 1,
            points: 100
        },
        {
            question: "What is the main circuit board of a computer called?",
            answers: ["CPU Board", "Motherboard", "System Board", "Main Frame"],
            correct: 1,
            points: 200
        },
        {
            question: "What does RAM stand for?",
            answers: ["Read Access Memory", "Random Access Memory", "Rapid Access Module", "Read And Modify"],
            correct: 1,
            points: 100
        },
        {
            question: "Which component is primarily responsible for rendering graphics and images?",
            answers: ["CPU", "RAM", "GPU", "Motherboard"],
            correct: 2,
            points: 200
        },
        {
            question: "What type of memory is RAM?",
            answers: ["Permanent storage", "Volatile memory", "Read-only memory", "Cache memory"],
            correct: 1,
            points: 300
        },
        {
            question: "Which input device is used to move a cursor on the screen?",
            answers: ["Keyboard", "Monitor", "Mouse", "Printer"],
            correct: 2,
            points: 100
        },
        {
            question: "What does GPU stand for?",
            answers: ["General Processing Unit", "Graphical Processing Unit", "Graphics Program Utility", "General Program Unit"],
            correct: 1,
            points: 200
        },
        {
            question: "Which component displays visual output from the computer?",
            answers: ["Keyboard", "Mouse", "Monitor", "Speaker"],
            correct: 2,
            points: 100
        },
        {
            question: "What is the primary function of RAM?",
            answers: ["Store data permanently", "Process instructions", "Temporarily store data for quick access", "Display graphics"],
            correct: 2,
            points: 300
        },
        {
            question: "Which component connects all other components together?",
            answers: ["CPU", "Motherboard", "RAM", "Power Supply"],
            correct: 1,
            points: 300
        },
        {
            question: "What happens to data in RAM when the computer is turned off?",
            answers: ["It is saved automatically", "It is lost", "It moves to the hard drive", "It stays in RAM"],
            correct: 1,
            points: 400
        }
    ],
    "Data Privacy": [
        {
            question: "What should you do before posting personal information on social media?",
            answers: ["Post immediately", "Think about who can see it", "Share with everyone", "Ignore privacy settings"],
            correct: 1,
            points: 200
        },
        {
            question: "Which of these is a good practice for data privacy?",
            answers: ["Using the same password everywhere", "Sharing passwords with friends", "Using strong, unique passwords", "Writing passwords on sticky notes"],
            correct: 2,
            points: 100
        },
        {
            question: "What should you avoid sharing on public social media?",
            answers: ["Your home address", "Funny memes", "Public events you're attending", "Your favorite color"],
            correct: 0,
            points: 200
        },
        {
            question: "What is a privacy setting?",
            answers: ["A way to delete your account", "A control that limits who can see your information", "A type of password", "A security virus"],
            correct: 1,
            points: 300
        },
        {
            question: "Why should you be careful about accepting friend requests from strangers?",
            answers: ["They might access your personal information", "It's always safe", "It doesn't matter", "They might send you gifts"],
            correct: 0,
            points: 200
        },
        {
            question: "What should you do if a website asks for unnecessary personal information?",
            answers: ["Provide all information requested", "Question why it's needed and avoid if suspicious", "Share it with friends first", "Ignore the website"],
            correct: 1,
            points: 300
        },
        {
            question: "Which is the safest way to share photos online?",
            answers: ["Make everything public", "Use privacy settings to control who sees them", "Share with everyone", "Don't use any settings"],
            correct: 1,
            points: 200
        },
        {
            question: "What is two-factor authentication?",
            answers: ["Using two passwords", "An extra layer of security beyond just a password", "A type of virus", "A social media feature"],
            correct: 1,
            points: 400
        },
        {
            question: "Should you share your location in real-time on social media?",
            answers: ["Yes, always", "No, it can be a security risk", "Only on weekends", "Only with strangers"],
            correct: 1,
            points: 300
        },
        {
            question: "What should you do before downloading an app?",
            answers: ["Check what permissions it requests", "Download immediately", "Share your password", "Ignore reviews"],
            correct: 0,
            points: 300
        },
        {
            question: "Is it safe to use public Wi-Fi for banking?",
            answers: ["Yes, always safe", "No, it can be risky without protection", "Only on Mondays", "Only in coffee shops"],
            correct: 1,
            points: 400
        },
        {
            question: "What does 'cookies' mean in web browsing?",
            answers: ["Snacks for your computer", "Small files that track your browsing activity", "Computer viruses", "Email attachments"],
            correct: 1,
            points: 500
        }
    ],
    "Phishing & Security": [
        {
            question: "What is phishing?",
            answers: ["A water sport", "A scam to trick you into giving personal information", "A type of computer game", "A social media platform"],
            correct: 1,
            points: 200
        },
        {
            question: "Which is a common sign of a phishing email?",
            answers: ["Professional formatting", "Urgent requests for personal information", "Proper grammar", "Known sender"],
            correct: 1,
            points: 200
        },
        {
            question: "What should you do if you receive a suspicious email asking for your password?",
            answers: ["Reply with your password", "Delete it and report it", "Forward it to friends", "Click all links"],
            correct: 1,
            points: 100
        },
        {
            question: "Which of these is likely a phishing attempt?",
            answers: ["Email from your bank with poor grammar asking you to 'verify' your account", "Newsletter you subscribed to", "Email from a friend", "School announcement"],
            correct: 0,
            points: 300
        },
        {
            question: "What should you check before clicking a link in an email?",
            answers: ["Nothing, just click", "Hover over it to see the actual URL", "The sender's name only", "The email subject"],
            correct: 1,
            points: 300
        },
        {
            question: "A legitimate company will never ask you for what via email?",
            answers: ["Your feedback", "Your password or full credit card number", "To visit their website", "To read their newsletter"],
            correct: 1,
            points: 200
        },
        {
            question: "What does 'https' in a website URL indicate?",
            answers: ["The site is fast", "The connection is secure", "The site is popular", "The site is free"],
            correct: 1,
            points: 400
        },
        {
            question: "What is a common tactic used in phishing?",
            answers: ["Creating a sense of urgency", "Providing detailed information", "Using official channels", "Waiting patiently"],
            correct: 0,
            points: 300
        },
        {
            question: "If you think you've been phished, what should you do first?",
            answers: ["Ignore it", "Change your passwords immediately", "Share the email", "Delete your account"],
            correct: 1,
            points: 400
        },
        {
            question: "What is spear phishing?",
            answers: ["Fishing with a spear", "Targeted phishing aimed at specific individuals", "A type of computer virus", "A security software"],
            correct: 1,
            points: 500
        },
        {
            question: "Which is a red flag in a phishing message?",
            answers: ["Personalized greeting", "Generic greeting like 'Dear Customer'", "Proper company logo", "Clear contact information"],
            correct: 1,
            points: 300
        },
        {
            question: "What should you do before entering sensitive information on a website?",
            answers: ["Check if the URL is correct and secure (https)", "Enter it immediately", "Share it on social media", "Call your friends"],
            correct: 0,
            points: 400
        }
    ],
    "Data Integrity": [
        {
            question: "What is misinformation?",
            answers: ["Correct information", "False information shared without intent to harm", "Intentionally false information", "Altered true information"],
            correct: 1,
            points: 200
        },
        {
            question: "What is disinformation?",
            answers: ["Accidentally false information", "Intentionally false information meant to deceive", "True information", "Incomplete information"],
            correct: 1,
            points: 200
        },
        {
            question: "What is malinformation?",
            answers: ["False information", "True information shared to cause harm", "Accurate news", "Educational content"],
            correct: 1,
            points: 300
        },
        {
            question: "Which is an example of misinformation?",
            answers: ["Sharing a false rumor you believe is true", "Deliberately creating fake news", "Sharing private information to harm someone", "Reporting accurate news"],
            correct: 0,
            points: 300
        },
        {
            question: "What should you do before sharing information online?",
            answers: ["Share immediately", "Verify the source and accuracy", "Add your opinion", "Make it more exciting"],
            correct: 1,
            points: 200
        },
        {
            question: "Which is an example of disinformation?",
            answers: ["Accidentally sharing wrong date for an event", "Creating fake news to influence an election", "Sharing a true story", "Posting a personal opinion"],
            correct: 1,
            points: 300
        },
        {
            question: "What is the best way to verify information you see online?",
            answers: ["Believe it if it has many likes", "Check multiple reliable sources", "Share it first, verify later", "Trust all social media posts"],
            correct: 1,
            points: 400
        },
        {
            question: "Which is an example of malinformation?",
            answers: ["Sharing false statistics", "Leaking someone's private messages to embarrass them", "Posting fake photos", "Creating a false identity"],
            correct: 1,
            points: 400
        },
        {
            question: "What makes a source reliable?",
            answers: ["It has a fancy website", "It's credible, transparent, and fact-checked", "It has many followers", "It confirms your beliefs"],
            correct: 1,
            points: 300
        },
        {
            question: "Why is data integrity important?",
            answers: ["It makes data look nice", "It ensures information is accurate and trustworthy", "It makes data faster", "It's not important"],
            correct: 1,
            points: 400
        },
        {
            question: "What is 'fact-checking'?",
            answers: ["Ignoring information", "Verifying information against reliable sources", "Sharing everything you see", "Creating new facts"],
            correct: 1,
            points: 300
        },
        {
            question: "Which type of false information is spread with malicious intent?",
            answers: ["Misinformation", "Disinformation", "Malinformation", "Both B and C"],
            correct: 3,
            points: 500
        }
    ],
    "General Computing": [
        {
            question: "What is an operating system?",
            answers: ["A type of hardware", "Software that manages computer hardware and software", "A computer game", "An internet browser"],
            correct: 1,
            points: 200
        },
        {
            question: "Which of these is an operating system?",
            answers: ["Microsoft Word", "Google Chrome", "Windows", "Adobe Photoshop"],
            correct: 2,
            points: 100
        },
        {
            question: "What does 'booting' a computer mean?",
            answers: ["Kicking it", "Starting it up", "Shutting it down", "Installing software"],
            correct: 1,
            points: 200
        },
        {
            question: "What is software?",
            answers: ["Physical components of a computer", "Programs and applications that run on a computer", "The computer case", "The monitor"],
            correct: 1,
            points: 100
        },
        {
            question: "What is hardware?",
            answers: ["Computer programs", "Physical components of a computer", "Internet connection", "Cloud storage"],
            correct: 1,
            points: 100
        },
        {
            question: "What is the purpose of a web browser?",
            answers: ["To create documents", "To access and view websites", "To edit photos", "To play games"],
            correct: 1,
            points: 200
        },
        {
            question: "What does 'URL' stand for?",
            answers: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Link", "Universal Reference Link"],
            correct: 1,
            points: 300
        },
        {
            question: "What is cloud storage?",
            answers: ["Storage in the sky", "Storing data on remote servers accessed via internet", "A type of hard drive", "A weather app"],
            correct: 1,
            points: 300
        },
        {
            question: "What is a file extension?",
            answers: ["Making a file longer", "The suffix at the end of a filename that indicates file type", "A type of folder", "A computer virus"],
            correct: 1,
            points: 400
        },
        {
            question: "What does 'bandwidth' refer to?",
            answers: ["The width of a computer", "The amount of data that can be transmitted over a connection", "A type of software", "Computer memory"],
            correct: 1,
            points: 400
        },
        {
            question: "What is malware?",
            answers: ["Good software", "Malicious software designed to harm your computer", "A type of hardware", "An operating system"],
            correct: 1,
            points: 300
        },
        {
            question: "What does 'backup' mean in computing?",
            answers: ["Moving backwards", "Creating a copy of data for protection", "Deleting files", "Upgrading software"],
            correct: 1,
            points: 300
        }
    ]
};