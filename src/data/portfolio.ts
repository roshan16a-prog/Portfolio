import {
    Github,
    Linkedin,
    Mail,
    Palette,
    Terminal,
    Database,
    Code2,
    Cpu,
    Globe,
    Settings,
} from "lucide-react";

export const personalInfo = {
    name: "Roshan Awari",
    title: "Engineering Student | AI & ML Developer | Problem Solver",
    about:
        "I am an AI and Machine Learning enthusiast and an engineering student at Yeshwantrao Chavan College of Engineering (YCCE), Nagpur. I have a strong foundation in Data Structures and Algorithms, along with hands-on experience in machine learning and data analysis. I am passionate about building intelligent and scalable systems using Python and modern ML techniques. I enjoy writing clean, efficient code and applying analytical thinking to solve real-world problems in AI, data science, and software engineering.",
    email: "roshan16a@gmail.com",
    github: "https://github.com/roshan16a-prog/",
    linkedin: "https://www.linkedin.com/in/roshan-awari-79552a329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    leetcode: "https://leetcode.com/u/IP4KlDC3ag/",
    resume: "/resume.pdf",
    profileImage: "/Profile.jpeg",
};

export const skills = {
    categories: [
        {
            name: "Machine Learning  ",
            icon: Cpu,
            skills: [
                { name: "ML Algorithms", level: 65 },
                { name: "Scikit-Learn", level: 85 },
                { name: "Matplotlib & Seaborn", level: 80 },
                { name: "Pandas & NumPy", level: 90 },
            ],
        },
        {
            name: "Database ",
            icon: Cpu,
            skills: [
                { name: "MySQL", level: 95 },

            ],
        },

        {
            name: "Web Technologies",
            icon: Globe,
            skills: [
                { name: "React / Next.js", level: 90 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "JavaScript", level: 75 },
                { name: "HTML & CSS", level: 95 },
            ],
        },
        {
            name: "Tools & Platforms",
            icon: Settings,
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "Anaconda", level: 85 },
                { name: "Vercel", level: 70 },
                { name: "Neon", level: 80 },
                { name: "VS-Code", level: 90 },
            ],
        },
        {
            name: "Programming Languages",
            icon: Terminal,
            skills: [
                { name: "Python", level: 85 },
                { name: "C++", level: 70 },
                { name: "Java", level: 90 },
                { name: "C", level: 95 },
            ],
        },

    ],
};

export const projects = [
    {
        id: "SmartCartClustering",
        title: "SmartCart Clustering System",
        summary: "A robust machine learning pipeline designed to segment customers based on historical purchasing patterns and demographics using PCA and Agglomerative Clustering.",
        description: "Understanding customer behavior is crucial for targeted marketing. This project implements an exploratory approach to customer segmentation by clustering users with similar purchasing habits. It handles missing data through median imputation, performs extensive feature engineering (Age, Total_Spending, Tenure), and utilizes Principal Component Analysis (PCA) to reduce high-dimensional data into three significant vectors. The final model uses Agglomerative Clustering with ward linkage to identify four distinct customer segments.",
        problemStatement: "Businesses often struggle to interpret high-dimensional customer data, making it difficult to identify distinct purchasing groups for targeted marketing and personalized engagement.",
        solution: "Developed an unsupervised learning pipeline that chains data preprocessing, dimensionality reduction (PCA), and Agglomerative Clustering. The system evaluates the optimal number of clusters using Silhouette Scores and the Elbow Method, providing a scalable way to label and segment future customer databases.",
        features: ["Automated data cleaning and median imputation for missing values", "Extensive feature engineering for tracking spending and tenure metrics", "Dimensionality reduction using Principal Component Analysis (PCA)", "Unsupervised segmentation using Agglomerative Clustering and K-Means", "Silhouette Score and Elbow Method (WCSS) validation for optimal K selection", "Serialized model artifacts (.pkl) for seamless future classification"],
        tools: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
        duration: "March 2026",
        images: ["/Smartcard-Clustering-System/cover.png"],
        screenshots: ["/Smartcard-Clustering-System/1.png", "/Smartcard-Clustering-System/2.png", "/Smartcard-Clustering-System/3.png", "/Smartcard-Clustering-System/4.png", "/Smartcard-Clustering-System/5.png", "/Smartcard-Clustering-System/6.png", "/Smartcard-Clustering-System/7.png", "/Smartcard-Clustering-System/8.png", "/Smartcard-Clustering-System/9.png", "/Smartcard-Clustering-System/10.png"],
        techStack: ["Python", "Machine Learning", "Unsupervised Learning", "Clustering", "PCA", "Scikit-learn"],
        githubUrl: "https://github.com/roshan16a-prog/Smartcard-Clustering-System",
        liveUrl: ""
    },
    {
        id: "HealthRiskMLClassifier",
        title: "Novagen Health Prediction",
        summary: "A machine learning project that predicts health outcomes using multiple classification algorithms, with Gradient Boosting achieving 95.5% accuracy.",
        description: "Novagen Health Prediction is a complete machine learning workflow developed to evaluate patient health indicators and predict specific target outcomes. The project tests ten different classification algorithms, including linear models, tree-based models, boosting, and ensemble methods. Among all experiments, the Gradient Boosting Classifier achieved the strongest performance with 95.5% accuracy, followed closely by a Stacking Classifier (95.3%). The trained Gradient Boosting model and corresponding data scaler are saved as portable artifacts (.pkl) for easy deployment.",
        problemStatement: "Building reliable predictive models for healthcare risk assessment is challenging due to the need for high accuracy, the complexity of clinical indicators, and the requirement to compare multiple modeling approaches.",
        solution: "Developed a comprehensive machine learning classification pipeline. The solution involves loading a structured clinical dataset, performing feature extraction and standardizing data using StandardScaler. Ten models were trained and cross-evaluated using an 80/20 train-test split. The best performer, a Gradient Boosting Classifier, was fine-tuned to achieve 95.5% accuracy.",
        features: ["Comparative analysis of 10 machine learning classification models.", "End-to-end data processing and scaling pipeline using StandardScaler.", "Implementation of diverse model types: Linear, Tree-Based, Boosting, and Ensemble.", "High-performance Gradient Boosting model achieving 95.5% accuracy.", "Trained model and scaler serialization to portable .pkl files.", "Detailed performance reporting including accuracy, precision, recall, and F1-score."],
        tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
        duration: "March 2026",
        images: ["/HealthRisk ML Classifier/cover.png"],
        screenshots: ["/HealthRisk ML Classifier/1.png", "/HealthRisk ML Classifier/2.png", "/HealthRisk ML Classifier/3.png", "/HealthRisk ML Classifier/4.png", "/HealthRisk ML Classifier/5.png", "/HealthRisk ML Classifier/6.png", "/HealthRisk ML Classifier/7.png", "/HealthRisk ML Classifier/8.png", "/HealthRisk ML Classifier/9.png", "/HealthRisk ML Classifier/10.png", "/HealthRisk ML Classifier/11.png"],
        techStack: ["Python", "Machine Learning", "Classification", "Scikit-learn", "Data Analysis", "Gradient Boosting"],
        githubUrl: "https://github.com/roshan16a-prog/HealthRisk-ML-Classifier",
        liveUrl: ""
    },
    {
        id: "NextStepAI",
        title: "AI Interview Coach",
        summary: "A full-stack AI-powered interview preparation platform that simulates real interview scenarios and provides real-time, data-driven feedback to help candidates improve their performance.",
        description: "AI Interview Coach is a comprehensive full-stack application designed to help job seekers practice interviews in a realistic environment. The platform conducts AI-driven mock interviews using voice-based interaction, performs real-time speech-to-text transcription, evaluates responses against industry standards, and generates structured feedback reports. It analyzes communication clarity, technical correctness, confidence, and sentiment to help users identify strengths and improvement areas across multiple interview domains.",
        problemStatement: "Many job seekers struggle with interview preparation due to the lack of realistic mock interviews and actionable feedback. Traditional preparation methods such as self-practice or peer interviews fail to provide unbiased evaluation, detailed performance metrics, and consistent improvement tracking.",
        solution: "Developed an AI-driven interview coaching platform that simulates real interview environments through voice-based interaction. The system automatically generates industry-specific questions, transcribes user responses in real time, evaluates answers using AI models, and provides structured feedback with scores, insights, and improvement suggestions, enabling continuous and measurable interview skill development.",
        features: ["Real-time voice-to-text transcription using AI speech recognition", "AI-powered response evaluation based on technical accuracy, clarity, and confidence", "Dynamic industry-specific and role-based interview question generation", "Detailed performance reports with scores, strengths, weaknesses, and improvement recommendations", "Support for multiple interview domains such as technical, behavioral, and HR rounds", "User interview history tracking for long-term progress analysis"],
        tools: ["React", "Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "Vapi.ai", "OpenAI"],
        duration: "Dec 2025 - March 2026",
        images: ["/NextStepAI/p.jpg"],
        screenshots: ["/NextStepAI/ss1.png", "/NextStepAI/ss2.png", "/NextStepAI/ss3.png", "/NextStepAI/ss4.png", "/NextStepAI/ss5.png", "/NextStepAI/ss6.png", "/NextStepAI/ss7.png", "/NextStepAI/ss8.png", "/NextStepAI/ss9.png", "/NextStepAI/ss10.png", "/NextStepAI/ss11.png"],
        techStack: ["React", "Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "AI/NLP", "Speech-to-Text"],
        githubUrl: "https://github.com/roshan16a-prog/NextStepAI",
        liveUrl: ""
    },

    {
        id: "LoanSense",
        title: "LoanSense – Loan Approval Predictor",
        summary: "End-to-end machine learning system that predicts loan approval eligibility using applicant financial and demographic data.",
        description: "LoanSense is an end-to-end machine learning web application that predicts whether a loan will be approved based on applicant financial and demographic details such as income, credit score, DTI ratio, savings, collateral value, loan amount, dependents, and existing loans. The project integrates trained classification models with a Streamlit-based web interface for real-time predictions.",
        problemStatement: "Traditional loan approval processes rely heavily on manual evaluation, which is time-consuming, inconsistent, and prone to human bias, leading to delays and inefficient decision-making.",
        solution: "Developed a machine learning-based loan approval predictor that automatically evaluates applicant data using trained classification models, enabling faster, more consistent, and data-driven loan approval decisions.",
        features: ["Interactive Streamlit-based web application", "Real-time loan approval prediction", "Feature scaling for improved model performance", "User-friendly and visually clean interface", "Supports multiple applicant financial parameters"],
        tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
        duration: "Dec 2025 - Jan 2026",
        images: ["/LoanSense/p.png"],
        screenshots: ["/LoanSense/ss1.png", "/LoanSense/ss2.png", "/LoanSense/ss3.png"],
        techStack: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
        modelsAndResults: ["Logistic Regression – Accuracy: 86.5%, F1-score: 0.77", "Naive Bayes (GaussianNB) – Accuracy: 86.5%, F1-score: 0.76", "KNN – Accuracy: 76%, F1-score: 0.57"],
        githubUrl: "https://github.com/roshan16a-prog/LoanSense_loan_approval_predictor",
        liveUrl: ""
    },
    {
        id: "StudentAnalysis",
        title: "Student Habits & Performance Analysis",
        summary: "Exploratory data analysis project to understand how student daily habits affect academic performance.",
        description: "This project is an exploratory data analysis (EDA) focused study on student habits and their impact on exam performance. It analyzes real-world student data to understand how factors such as study hours, attendance, sleep duration, and screen time influence academic outcomes. The main goal was to deeply understand the data, identify meaningful patterns, and communicate insights through clear visualizations, rather than directly applying machine learning algorithms.",
        problemStatement: "Students often struggle to understand how their daily habits influence academic performance. Without data-driven insights, it is difficult to identify which habits positively or negatively affect exam results.",
        solution: "Performed detailed exploratory data analysis using Python to study relationships between student habits and exam scores. Used statistical summaries and visualizations to uncover patterns and provide clear insights that help understand performance trends.",
        features: ["Data loading and exploration using Pandas", "Data cleaning and preparation for analysis", "Exploratory Data Analysis (EDA) to identify trends and relationships", "Visualizations including histograms, scatter plots, heatmaps, and pie charts", "Insight interpretation for each visualization"],
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        duration: "Nov-2025",
        images: ["/StudentAnalysis/p.png"],
        screenshots: ["/StudentAnalysis/attendance_vs_exam_score.png", "/StudentAnalysis/daily_time_allocation.png", "/StudentAnalysis/exam_score_distribution_by_risk_group.png", "/StudentAnalysis/extracurricular_vs_mental_health_violin.png", "/StudentAnalysis/internet_quality_vs_exam_score.png", "/StudentAnalysis/mental_health_study_vs_exam_score.png", "/StudentAnalysis/mental_health_vs_exam_score.png", "/StudentAnalysis/screen_time_distribution.png", "/StudentAnalysis/study_hours_vs_exam_score.png"],
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        githubUrl: "https://github.com/roshan16a-prog/Student_Habits_Performance_Analysis",
        liveUrl: ""
    },
    {
        id: "AarogyaBot",
        title: "ArogyaBot – Multilingual AI Ayurveda Wellness Chatbot",
        summary: "An AI-powered, multilingual wellness chatbot offering Ayurveda-based holistic health guidance with auto language detection and voice input support.",
        description: "ArogyaBot is a full-stack AI wellness chatbot designed to provide Ayurveda and holistic health guidance through an interactive, real-time chat interface. The system supports multiple languages, automatically detects the user’s language, and allows users to interact using both text and voice input. Built using React, TypeScript, and Vite on the frontend and Supabase Edge Functions on the backend, the application demonstrates modern web development practices, cloud-based AI integration, and scalable conversational system design.",
        problemStatement: "Reliable Ayurvedic wellness information is often inaccessible to non-English speakers, and many users struggle with text-based interfaces due to language or literacy barriers.",
        solution: "ArogyaBot provides a multilingual AI chatbot that automatically detects the user’s language and responds accordingly. Users can interact via text or voice, with speech converted to text before being processed by AI through Supabase Edge Functions, ensuring real-time and scalable communication.",
        features: ["AI-powered Ayurveda wellness chatbot", "Multilingual language support", "Automatic language detection", "Voice input using speech-to-text", "Real-time chat interaction", "Responsive modern UI", "Cloud backend integration", "Scalable modular architecture"],
        tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "Speech-to-Text API", "AI Language Models", "Node.js", "npm", "Git"],
        duration: "August 2025 - October 2025",
        images: ["/ArogyaBot/p.png"],
        screenshots: ["/ArogyaBot/ss1.png", "/ArogyaBot/ss2.png", "/ArogyaBot/ss3.png"],
        techStack: ["React (TypeScript)", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase Edge Functions", "Speech-to-Text Integration", "Multilingual AI Processing"],
        githubUrl: "https://github.com/roshan16a-prog/ArogyaBot",
        liveUrl: "https://wellness-vaani-ai.lovable.app"
    },
    {
        id: "E-Samadhan",
        title: "e-SAMADHAN – E-Governance Grievance Redressal Portal",
        summary: "A full-stack e-governance web application that allows citizens to submit, track, and manage public grievances digitally with transparent status tracking.",
        description: "e-SAMADHAN is a full-stack e-governance grievance redressal portal designed to streamline communication between citizens and government departments. The platform enables users to register and log in securely, submit grievances with category, department, description, and file attachments, and track grievance status through a centralized dashboard. It improves transparency, accountability, and efficiency in public issue resolution by digitizing the entire grievance lifecycle.",
        problemStatement: "Traditional grievance redressal systems are often manual, slow, and lack transparency, causing delays, poor communication, and frustration among citizens. There is no centralized digital platform for citizens to easily submit complaints, track progress, and receive timely updates.",
        solution: "Developed a centralized e-governance grievance portal that allows citizens to digitally submit complaints, attach supporting evidence, monitor grievance status in real time, and receive notifications. The system provides dashboards, role-based access, and structured workflows to ensure faster resolution and improved accountability for government departments.",
        features: ["User authentication with secure login and registration", "Citizen dashboard displaying grievance statistics and resolution rate", "Grievance submission with category, department selection, description, and file attachment", "Real-time grievance status tracking (Submitted, In Review, Escalated, Resolved)", "My Grievances section with detailed grievance history", "Notification system for grievance updates", "Role-based interface for citizens and officials", "Clean, responsive, and user-friendly UI"],
        tools: ["HTML", "CSS", "JavaScript", "Backend Framework", "Database", "Authentication System"],
        duration: "July 2025",
        images: ["/E-Samadhan/p.jpg"],
        screenshots: ["/E-Samadhan/ss1.png", "/E-Samadhan/ss2.png", "/E-Samadhan/ss3.png", "/E-Samadhan/ss4.png", "/E-Samadhan/ss5.png"],
        techStack: ["Frontend Development", "Backend Development", "Authentication", "Database Management", "Role-Based Access Control"],
        githubUrl: "",
        liveUrl: ""
    },
];

export const achievements = [
    //achievements
    {
        id: "ach-15",
        title: "Winner - Sherlock Ohms (Technical Treasure Hunt)",
        issuer: "YCCE (YASH 26.0)",
        year: "2026",
        date: "February 26, 2026",
        image: "/Certificates/15.jpeg",
        description: "Emerged as the undisputed Winner in 'Sherlock Ohms', a highly competitive Technical Treasure Hunt. This prestigious event was organized during YASH 26.0, Central India's biggest National Techno-Cultural Fest, by the IEEE PELS Student Chapter at Yeshwantrao Chavan College of Engineering (YCCE), Nagpur. The challenge tested advanced problem-solving capabilities, rapid technical deciphering, and strategic teamwork under significant time constraints.",
        category: "Achievement"
    },
    {
        id: "ach-10",
        title: "Semester Topper - B.Tech CSE (AIML)",
        issuer: "YCCE",
        year: "2025",
        date: "November 2025",
        image: "/Certificates/10.jpg",
        description: "Achieved academic excellence by securing the 7th position among the top 10 students in the B.Tech II Semester examinations for Computer Science and Engineering (Artificial Intelligence and Machine Learning). Awarded the prestigious Semester Topper Certificate by Yeshwantrao Chavan College of Engineering, reflecting an outstanding SGPA of 9.08 and demonstrating a consistent, high-level mastery of rigorous academic coursework.",
        category: "Achievement"
    },

    {
        id: "ach-5",
        title: "2nd Position - Cipher-Chase",
        issuer: "YCCE Techfest (Upsurge 2K25)",
        year: "2025",
        date: "August 2025",
        image: "/Certificates/5.jpg",
        description: "Secured the highly competitive 2nd Position in 'Cipher-Chase', a rigorous coding and logic-based competition featured during Upsurge 2K25, the flagship Techfest at Yeshwantrao Chavan College of Engineering. Competing as 'Team 4-bit', this remarkable achievement highlighted exceptional perseverance, rapid algorithmic problem solving, and superior technical abilities under significant competitive pressure.",
        category: "Achievement"
    },

    //Completion
    {
        id: "ach-18",
        title: "Software Engineering Job Simulation",
        issuer: " Quantium  & Co. via Forage",
        year: "2026",
        date: "March 31, 2026",
        image: "/Certificates/20.jpeg",
        description: "Successfully completed the Software Engineering Job Simulation offered through Forage. The program involved practical tasks such as setting up a local development environment, processing data, building and improving a Dash application, testing application functionality, and automating the test suite, providing hands-on exposure to real-world software engineering workflows.",
        category: "Completion"
    },
    {
        id: "ach-19",
        title: "GenAI Powered Data Analytics Job Simulation",
        issuer: "Tata Group via Forage",
        year: "2026",
        date: "March 31, 2026",
        image: "/Certificates/19.jpeg",
        description: "Successfully completed the GenAI Powered Data Analytics Job Simulation offered through Forage. The program involved practical tasks such as exploratory data analysis, risk profiling, delinquency prediction using AI, business reporting, data storytelling, and implementing AI-driven collections strategies, providing hands-on exposure to modern data analytics and AI-powered decision-making workflows.",
        category: "Completion"
    },
    {
        id: "ach-17",
        title: "Quantitative Research Job Simulation",
        issuer: "JPMorgan Chase & Co. via Forage",
        year: "2026",
        date: "March 5, 2026",
        image: "/Certificates/17.jpeg",
        description: "Successfully completed the Quantitative Research Job Simulation offered by JPMorgan Chase & Co. through Forage. The program involved practical tasks such as analyzing price data, pricing commodity storage contracts, performing credit risk analysis, and bucketizing FICO scores, providing hands-on exposure to real-world quantitative finance workflows.",
        category: "Completion"
    },
    {
        id: "ach-12",
        title: "IT Career Roadmap Certification",
        issuer: "SkillEcted",
        year: "2025",
        date: "December 4, 2025",
        image: "/Certificates/12.jpg",
        description: "Successfully completed a comprehensive IT Career Roadmap Session formulated by SkillEcted. This specialized certification acknowledges the attainment of critical insights into the modern technology industry landscape, emerging software engineering paradigms, and strategic continuous learning paths. It emphasizes a structured approach to building a robust, future-proof career in the ever-evolving IT domain.",
        category: "Completion"
    },
    {
        id: "ach-11",
        title: "Data Structure Essentials",
        issuer: "YCCE",
        year: "2025",
        date: "November 2025",
        image: "/Certificates/11.jpg",
        description: "Successfully completed an intensive Value Added Course focused on 'Data Structure Essentials' offered by the Department of Computer Science and Engineering (AIML) at Yeshwantrao Chavan College of Engineering. The rigorous curriculum covered fundamental and advanced data structures, algorithmic complexities, and memory optimization techniques, providing a robust foundational understanding necessary for developing highly efficient and scalable software applications.",
        category: "Completion"
    },
    {
        id: "ach-8",
        title: "SQL for Data Analysis",
        issuer: "Simplilearn / SkillUP",
        year: "2025",
        date: "August 2025",
        image: "/Certificates/8.jpg",
        description: "Earned a professional certification in 'SQL for Data Analysis' through Simplilearn's SkillUP platform. This comprehensive course deeply explored relational database management, complex query formulation, data manipulation, and advanced analytical operations. Demonstrated a strong initiative to deepen analytical capabilities and harness the power of SQL to extract meaningful, data-driven insights from complex datasets.",
        category: "Completion"
    },
    {
        id: "ach-7",
        title: "Basics of Data Structures and Algorithms",
        issuer: "Simplilearn / SkillUP",
        year: "2025",
        date: "August 2025",
        image: "/Certificates/7.jpg",
        description: "Successfully acquired a professional certification in the 'Basics of Data Structures and Algorithms' via the Simplilearn SkillUP initiative. This course provided an extensive overview of core programmatic constructs, problem-solving methodologies, and algorithm design principles. It solidified the essential logical framework required to write optimized, well-structured, and high-performance code across modern software development.",
        category: "Completion"
    },
    {
        id: "ach-4",
        title: "Introduction to Image Generation",
        issuer: "Google Cloud & Simplilearn",
        year: "2025",
        date: "July 2025",
        image: "/Certificates/4.jpg",
        description: "Successfully completed the 'Introduction to Image Generation' online course, uniquely powered by Google Cloud and hosted on Simplilearn. This forward-looking certification explored the foundational concepts of generative AI, diffusion models, and the intricate mechanics behind AI-driven image synthesis. It reflects a strong, proactive commitment to mastering cutting-edge artificial intelligence technologies and exploring their creative applications.",
        category: "Completion"
    },
    {
        id: "ach-3",
        title: "Essential Lightroom Course for Beginner to Advanced",
        issuer: "Udemy",
        year: "2025",
        date: "July 2025",
        image: "/Certificates/3.jpg",
        description: "Mastered professional photographic post-processing by completing a comprehensive Udemy certification course on Adobe Lightroom. Spanning 1.5 total hours, the curriculum bridged the gap from beginner techniques to advanced aesthetic workflows. Gained hands-on expertise in color grading, exposure correction, structural enhancements, and overall visual composition crucial for high-quality digital media production.",
        category: "Completion"
    },
    {
        id: "ach-2",
        title: "Retrieval-Augmented Generation (RAG)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        date: "January 2025",
        image: "/Certificates/2.png",
        description: "Awarded a professional digital badge from IBM SkillsBuild upon successfully completing the 'Introduction to Retrieval-Augmented Generation' course. This cutting-edge curriculum provided a deep dive into modern AI architectures, focusing on how RAG frameworks enhance Large Language Models (LLMs) by integrating external knowledge bases, thereby reducing hallucinations and significantly improving the accuracy of AI-driven responses.",
        category: "Completion"
    },

    //participation
    {
        id: "ach-18",
        title: "Participant - Internship Common Aptitude Test (LCAT)",
        issuer: "Labmentix",
        year: "2026",
        date: "March 21, 2026",
        image: "/Certificates/18.jpeg",
        description: "Awarded a Certificate of Participation for successfully appearing in the Internship Common Aptitude Test (LCAT) conducted by Labmentix. The assessment evaluated aptitude, analytical thinking, and readiness for internship opportunities, recognizing dedication and effort toward professional skill development.",
        category: "Participation"
    },
    {
        id: "ach-16",
        title: "Participant - Hackathonix 2.0",
        issuer: "KDK College of Engineering, Nagpur",
        year: "2026",
        date: "March 9, 2026",
        image: "/Certificates/16.jpeg",
        description: "Received a Certificate of Participation for actively participating in 'Hackathonix 2.0', a 12-hour hackathon organized by the Coding Club of the Department of Computer Science and Engineering at KDK College of Engineering, Nagpur, in association with the Institute of Engineers (India). The event emphasized innovation, teamwork, and rapid problem-solving in a competitive technical environment.",
        category: "Participation"
    },
    {
        id: "ach-14",
        title: "Hackathon Participant - Enkryptia 2k26",
        issuer: "Government Polytechnic Nagpur",
        year: "2026",
        date: "February 18, 2026",
        image: "/Certificates/14.jpeg",
        description: "Successfully participated in the intensive Hackathon at Enkryptia 2k26, a major technical symposium organized by the Department of Artificial Intelligence & Machine Learning (AIML) and Information Technology at Government Polytechnic Nagpur. Demonstrated immense dedication, innovative programming practices, and collaborative software development skills while tackling complex real-world problem statements over the course of the rigorous event.",
        category: "Participation"
    },
    {
        id: "ach-13",
        title: "Hackathon Participant - Abhyudaya 2025",
        issuer: "IIIT Nagpur & Engineering India",
        year: "2026",
        date: "February 1, 2026",
        image: "/Certificates/13.jpeg",
        description: "Actively competed in the flagship Hackathon during Abhyudaya 2025, an acclaimed Inter College Socio-Technical Event organized by Engineering India in collaboration with Vishwamanthan Research Foundation. Hosted at the prestigious Indian Institute of Information Technology, Nagpur (IIITN), the competition involved conceptualizing and developing impactful technology-driven solutions to address critical socioeconomic challenges within a competitive, fast-paced environment.",
        category: "Participation"
    },
    {
        id: "ach-9",
        title: "Smart India Hackathon 2025 (Internal)",
        issuer: "YCCE & SIH",
        year: "2025",
        date: "September 2025",
        image: "/Certificates/9.jpg",
        description: "Showcased exceptional creativity, technical innovation, and agile problem-solving skills during the Smart India Hackathon (SIH) 2025 Internal Hackathon. Actively contributed to developing an inventive digital solution aimed at resolving pressing real-world challenges, emphasizing teamwork, rapid prototyping, and a strong commitment to building a smarter and more technologically sustainable future for India.",
        category: "Participation"
    },
    {
        id: "ach-6",
        title: "Java Programming Excellence",
        issuer: "CodeAlpha",
        year: "2025",
        date: "August 2025",
        image: "/Certificates/6.jpg",
        description: "Demonstrated significant technical proficiency by achieving a high score of 58 out of 70 in the rigorous Java Programming Quiz conducted globally by CodeAlpha. This accomplishment underscores a deep, practical understanding of Object-Oriented Programming (OOP) concepts, core Java APIs, syntax intricacies, and the dedication to continuously honing advanced programming skills within a highly competitive technical environment.",
        category: "Participation"
    },

];












export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        college: "Yeshwantrao Chavan College of Engineering, Nagpur",
        yearRange: "2024 - 2028",
        score: "CGPA: 8.9 ",
        isCurrent: true,
    },
    {
        degree: "Higher Secondary Certificate (12th)",
        college: "Janata Jr. College, Chandrapur",
        yearRange: "2023 - 2024",
        score: "Percentage: 87.17%",
        isCurrent: false,
    },
    {
        degree: "Secondary School Certificate (10th)",
        college: "Janata High School, Wani",
        yearRange: "2021 - 2022",
        score: "Percentage: 85.40%",
        isCurrent: false,
    },
];
