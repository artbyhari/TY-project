document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        const currentIcon = themeToggle.querySelector('i');
        if (savedTheme === 'dark-theme') {
            currentIcon.classList.remove('fa-sun');
            currentIcon.classList.add('fa-moon');
        }
    } else {
        // Default to dark theme if no preference is saved
        body.classList.add('dark-theme');
        const currentIcon = themeToggle.querySelector('i');
        currentIcon.classList.remove('fa-sun');
        currentIcon.classList.add('fa-moon');
        // Save the default theme to localStorage
        localStorage.setItem('theme', 'dark-theme');
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        const currentIcon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            currentIcon.classList.remove('fa-sun');
            currentIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark-theme'); // Save user preference
        } else {
            currentIcon.classList.remove('fa-moon');
            currentIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light-theme'); // Save user preference
        }
    });

    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function () {
        const searchTerm = prompt('Enter a project name or keyword to search:');
        if (searchTerm) {
            const mainContent = document.querySelector('.main-content');
            const regex = new RegExp(searchTerm, 'gi');
            const originalText = mainContent.innerHTML;

            const highlightedText = originalText.replace(regex, match => `<span class="highlight">${match}</span>`);
            mainContent.innerHTML = highlightedText;

            alert(`Search for "${searchTerm}" completed. Check the highlighted results.`);
        }
    });

    // Updated project structure with detailed suggestions for all domains
    const projects = {
        "web-development": {
            "operational": [
                {
                    title: "Tune Hyperparameters",
                    requirements: "Python, scikit-learn, NumPy",
                    steps: [
                        "Import necessary libraries.",
                        "Define your model and dataset.",
                        "Use GridSearchCV to find the best parameters.",
                        "Evaluate model performance using cross-validation."
                    ]
                },
                {
                    title: "Optimize Model Performance",
                    requirements: "Python, TensorFlow, Keras",
                    steps: [
                        "Load your dataset and preprocess it.",
                        "Define your neural network architecture.",
                        "Compile the model with appropriate loss and metrics.",
                        "Train the model and evaluate performance."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "Develop a Full-Stack Application",
                    requirements: "JavaScript, Node.js, Express, MongoDB, React",
                    steps: [
                        "Set up your backend server with Node.js and Express.",
                        "Connect to a MongoDB database.",
                        "Build RESTful APIs for data management.",
                        "Develop a React frontend to interact with the backend."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Create a Portfolio Website",
                    requirements: "HTML, CSS, JavaScript, Git",
                    steps: [
                        "Design the layout and content of your website.",
                        "Develop the site using HTML and CSS.",
                        "Add interactive features using JavaScript.",
                        "Deploy the site using GitHub Pages or a similar service."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Fix Bugs in a Legacy System",
                    requirements: "JavaScript, Debugging Tools",
                    steps: [
                        "Identify and document existing bugs.",
                        "Use debugging tools to trace and resolve issues.",
                        "Test the system thoroughly after applying fixes."
                    ]
                }
            ]
        },
        "mobile-app-development": {
            "operational": [
                {
                    title: "Develop a Chat Application",
                    requirements: "JavaScript, Node.js, Express, Socket.io",
                    steps: [
                        "Set up a Node.js server with Express.",
                        "Implement WebSocket for real-time communication.",
                        "Create front-end interface for users to chat.",
                        "Test and deploy the application."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "Build a Fitness Tracker App",
                    requirements: "JavaScript, React Native, Firebase",
                    steps: [
                        "Design the app layout and user flow.",
                        "Implement features to track workouts and nutrition.",
                        "Use Firebase for user authentication and data storage.",
                        "Deploy the app to Google Play Store and Apple App Store."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Create an E-commerce App",
                    requirements: "JavaScript, React Native, Redux, Firebase",
                    steps: [
                        "Design the app's UI and user experience.",
                        "Set up Redux for state management.",
                        "Implement Firebase for backend services.",
                        "Launch the app with product listings and payment processing."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Improve App Performance",
                    requirements: "JavaScript, Performance Tools",
                    steps: [
                        "Analyze app performance using profiling tools.",
                        "Optimize slow functions and reduce memory usage.",
                        "Test the app on different devices for responsiveness."
                    ]
                }
            ]
        },
        "data-science": {
            "operational": [
                {
                    title: "Data Cleaning and Preparation",
                    requirements: "Python, Pandas, NumPy",
                    steps: [
                        "Import the dataset using Pandas.",
                        "Handle missing values and duplicates.",
                        "Normalize or scale the data as needed.",
                        "Save the cleaned dataset for further analysis."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "Data Visualization Project",
                    requirements: "Python, Matplotlib, Seaborn",
                    steps: [
                        "Load the cleaned dataset.",
                        "Use Matplotlib or Seaborn to create visualizations.",
                        "Analyze and interpret the results.",
                        "Present findings in a report or presentation."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Machine Learning Model Development",
                    requirements: "Python, scikit-learn, TensorFlow",
                    steps: [
                        "Define the problem and collect data.",
                        "Preprocess the data and split into training/testing sets.",
                        "Select and train a machine learning model.",
                        "Evaluate the model's performance and fine-tune parameters."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Improving Model Accuracy",
                    requirements: "Python, scikit-learn",
                    steps: [
                        "Identify underperforming aspects of the model.",
                        "Experiment with different algorithms or parameters.",
                        "Validate the improvements using cross-validation."
                    ]
                }
            ]
        },
        "machine-learning": {
            "operational": [
                {
                    title: "Implement Linear Regression",
                    requirements: "Python, scikit-learn, Pandas",
                    steps: [
                        "Load the dataset and explore it.",
                        "Define the linear regression model.",
                        "Train the model on the dataset.",
                        "Evaluate the model's performance."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "Create a Recommendation System",
                    requirements: "Python, Pandas, scikit-learn",
                    steps: [
                        "Collect data on user preferences.",
                        "Use collaborative filtering techniques.",
                        "Evaluate the recommendations with metrics like RMSE."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Deep Learning for Image Classification",
                    requirements: "Python, TensorFlow, Keras",
                    steps: [
                        "Collect and preprocess the image dataset.",
                        "Define the deep learning model architecture.",
                        "Train the model and validate it using a test set."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Debugging a Machine Learning Pipeline",
                    requirements: "Python, Debugging Tools",
                    steps: [
                        "Identify points of failure in the pipeline.",
                        "Use debugging tools to trace errors.",
                        "Correct issues and retest the pipeline."
                    ]
                }
            ]
        },
        "artificial-intelligence": {
            "operational": [
                {
                    title: "Natural Language Processing Project",
                    requirements: "Python, NLTK, spaCy",
                    steps: [
                        "Collect a text dataset for analysis.",
                        "Preprocess text data (tokenization, lemmatization).",
                        "Implement NLP techniques to extract insights."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "AI for Predictive Analytics",
                    requirements: "Python, Pandas, scikit-learn",
                    steps: [
                        "Collect historical data relevant to predictions.",
                        "Build models to forecast future trends.",
                        "Evaluate model performance with appropriate metrics."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Create an AI Chatbot",
                    requirements: "Python, Flask, Dialogflow",
                    steps: [
                        "Define the scope and functionality of the chatbot.",
                        "Implement backend logic using Flask.",
                        "Integrate with Dialogflow for natural language understanding."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Improve AI Model Performance",
                    requirements: "Python, Performance Analysis Tools",
                    steps: [
                        "Analyze model performance metrics.",
                        "Adjust parameters or retrain the model as needed.",
                        "Validate improvements through testing."
                    ]
                }
            ]
        },
        "game-development": {
            "operational": [
                {
                    title: "Develop a 2D Platformer Game",
                    requirements: "Unity, C#",
                    steps: [
                        "Design the game concept and mechanics.",
                        "Implement game physics and controls in Unity.",
                        "Create levels and assets using Unity's tools."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "Build a Multiplayer Game",
                    requirements: "Unity, Photon, C#",
                    steps: [
                        "Set up the Unity project with Photon for networking.",
                        "Design multiplayer mechanics and interactions.",
                        "Test and refine gameplay with multiple players."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Create a Virtual Reality Experience",
                    requirements: "Unity, VR SDKs",
                    steps: [
                        "Research and plan VR interaction mechanics.",
                        "Develop the experience using Unity and VR tools.",
                        "Test on various VR headsets for compatibility."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Fix Bugs in a Game",
                    requirements: "Unity, Debugging Tools",
                    steps: [
                        "Playtest the game to identify bugs.",
                        "Use Unity's debugging tools to find issues.",
                        "Implement fixes and retest thoroughly."
                    ]
                }
            ]
        },
        "software-engineering": {
            "operational": [
                {
                    title: "Build a REST API",
                    requirements: "Node.js, Express, MongoDB",
                    steps: [
                        "Set up a Node.js environment with Express.",
                        "Define API endpoints for CRUD operations.",
                        "Connect to MongoDB for data storage."
                    ]
                }
            ],
            "strategic": [
                {
                    title: "Develop a Microservices Architecture",
                    requirements: "Docker, Kubernetes, Node.js",
                    steps: [
                        "Design the microservices and their interactions.",
                        "Implement each service in isolated containers.",
                        "Deploy using Kubernetes for orchestration."
                    ]
                }
            ],
            "developmental": [
                {
                    title: "Create a Command-Line Tool",
                    requirements: "Python, Click",
                    steps: [
                        "Define the functionality and commands of the tool.",
                        "Implement using Python and the Click library.",
                        "Package and distribute the tool for others to use."
                    ]
                }
            ],
            "corrective": [
                {
                    title: "Refactor Legacy Code",
                    requirements: "Java, Code Analysis Tools",
                    steps: [
                        "Identify areas of the code that need improvement.",
                        "Use code analysis tools to understand the codebase.",
                        "Make changes incrementally and test thoroughly."
                    ]
                }
            ]
        }
    };

    // Handle form submission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const domain = document.getElementById('budget').value;
        const type = document.getElementById('tasks').value;
        const difficulty = document.getElementById('softwares').value;

        console.log('Domain:', domain);
        console.log('Type:', type);
        console.log('Difficulty:', difficulty);

        if (projects[domain] && projects[domain][type]) {
            // Scroll down and display loader
            const formContainer = document.querySelector('.form-container');
            formContainer.scrollIntoView({ behavior: 'smooth' });

            const loader = document.createElement('div');
            loader.className = 'loader';
            loader.innerHTML = '<div class="spinner"></div>'; // Add spinner animation here
            document.body.appendChild(loader);

            setTimeout(function () {
                // Remove loader and display components
                document.body.removeChild(loader);
                displayProjects(projects[domain][type]);
            }, 1000); // 1-second loader
        } else {
            console.error('Invalid selection. Please make sure to select a valid domain and type.');
        }
    });

    function displayProjects(projects) {
        let output = '<h3>Recommended Projects:</h3><ul>';

        projects.forEach(project => {
            output += `
                <li>
                    <strong>Topic:</strong> ${project.title}<br>
                    <strong>Requirements:</strong> ${project.requirements}<br>
                    <strong>Steps to Build and Perform:</strong>
                    <ul>
                        ${project.steps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </li>`;
        });

        output += '</ul>';
        const formContainer = document.querySelector('.form-container');
        formContainer.insertAdjacentHTML('beforeend', output);
    }
});
