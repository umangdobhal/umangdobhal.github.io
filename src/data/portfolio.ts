export const portfolioData = {
  name: "Umang Dobhal",
  title: "Master's Student | Data Science | Human Activity Recognition",
  location: "Fukuoka, Japan",
  email: "dobhalumang@gmail.com",
  linkedin: "https://www.linkedin.com/in/umangdobhal/",
  github: "https://github.com/umangdobhal",
  tagline: "Building intelligent systems using data, machine learning, and real-world sensor insights.",
  about: "Master’s student in Human Intelligence Systems at Kyushu Institute of Technology, specializing in synthetic data generation, time-series machine learning, and human activity recognition. My work focuses on building robust AI systems for real-world sensor data, with applications in healthcare and wearable computing. I have published research at ACM UbiComp (HASCA 2024 & 2025) and UCAmI 2025, and have hands-on experience developing end-to-end ML pipelines from data preprocessing and modeling to evaluation—on complex, noisy datasets.",
  
  experience: [
    {
      role: "Research Intern",
      organization: "Kyushu Institute of Technology",
      location: "Fukuoka, Japan",
      duration: "02/2024 - 04/2024",
      points: [
        "Developed an LLM-based synthetic data generation pipeline to address class imbalance in nurse activity recognition, improving classification performance on rare medical activities.",
        "Designed a novel methodology for generating realistic skeleton sequences, leading to improved recognition accuracy in complex procedures such as Endotracheal Suctioning.",
        "Built end-to-end ML pipelines including preprocessing, training, and evaluation using Python and deep learning frameworks on real-world sensor datasets."
      ]
    },
    {
      role: "Software Trainee Intern",
      organization: "MindIT Systems",
      location: "New Delhi, India",
      duration: "07/2023 - 09/2023",
      points: [
        "Automated web testing using Selenium and Python, reducing manual testing effort and improving regression testing efficiency.",
        "Identified and reported critical defects, contributing to improved software reliability and QA workflow."
      ]
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Human Intelligence Systems",
      institution: "Kyushu Institute of Technology",
      location: "Fukuoka, Japan",
      duration: "Oct 2024 – Present",
      gpa: "3.739 / 4.00",
      focus: "Diffusion models, synthetic data generation, and sensor-based activity recognition."
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Dronacharya College of Engineering",
      location: "India",
      duration: "Aug 2020 – Jun 2024",
      percentage: "75%"
    }
  ],
  
  projects: [
    {
      title: "Smart Water Contamination Detection System",
      shortDesc: "End-to-end water monitoring system with automated anomaly detection.",
      fullDesc: "Designed and implemented an end-to-end IoT-based water monitoring system integrating pH and TDS sensors with real-time data acquisition, calibration, and noise normalization. Developed a reconstructive anomaly detection model using Reservoir Computing, enabling early detection of contamination events and automated response mechanisms including pump-based drainage and remote alerts.",
      tech: ["Jetson Nano", "Python", "Reservoir Computing", "IoT"],
      results: "Achieved 96.33% F1-score in anomaly detection.",
      link: "Not Available (Confidential Project)"
    },
    {
      title: "Cricket World Cup 2023 Analytics Dashboard",
      shortDesc: "Interactive Power BI dashboard for tournament insights and optimal team construction.",
      fullDesc: "Developed an interactive analytics dashboard using Power BI by integrating multi-source data across 48 matches of the Cricket World Cup 2023. Designed dynamic visualizations and filters to analyze player and team performance, enabling data-driven selection of an optimal World XI team.",
      tech: ["Power BI", "Data Integration", "Data Visualization"],
      results: "Constructed an optimal World XI team based on 48 matches data.",
      link: "https://github.com/umangdobhal/cricket-analytics"
    },
    {
      title: "Bird Species Classification",
      shortDesc: "ML pipeline for classifying bird species based on morphological features.",
      fullDesc: "Built a machine learning pipeline for bird species classification using morphological and demographic features. Compared multiple models and optimized a Random Forest classifier achieving 96.55% accuracy, outperforming Decision Tree and Gradient Boosting baselines.",
      tech: ["Scikit-learn", "Random Forest", "Python"],
      results: "96.55% classification accuracy.",
      link: "https://github.com/umangdobhal/bird-classification"
    }
  ],
  
  publications: [
    {
      title: "Lunar Temperature Reconstruction During Sensor Downtime Using ChaSTE Time-Series",
      conference: "SMOPS 2026",
      fullConference: "International Conference on Spacecraft Mission Operations (SMOPS)",
      abstract: "Introduced a data-driven framework using BiLSTM to reconstruct missing temperature records for the ChaSTE instrument aboard Chandrayaan-3, emphasizing cross-sensor gradients for subsurface layering.",
      contribution: "Achieved superior validation MAE of 0.167, enabling robust reconstruction in nonlinear heating phases for future lunar missions.",
      highlight: "Lunar Data Reconstruction",
      link: "DOI not issued yet"
    },
    {
      title: "Extending Tabular Denoising Diffusion Probabilistic Models for Time-Series Data Generation",
      conference: "ABC 2026",
      fullConference: "8th International Conference on Activity and Behavior Computing (ABC)",
      abstract: "Proposed a temporal extension of TabDDPM, introducing sequence awareness through lightweight temporal adapters and context-aware embedding modules.",
      contribution: "Enhanced temporal realism, diversity, and coherence in synthetic sequences compared to baseline techniques.",
      highlight: "Diffusion-based Time-Series Data Generation",
      link: "DOI not issued yet"
    },
    {
      title: "Sample Selection Strategy for Synthetic Data Generation on Gesture Phase Recognition",
      conference: "UCAmI 2025",
      fullConference: "17th International Conference on Ubiquitous Computing and Ambient Intelligence",
      abstract: "Developed a post-processing strategy using TabDDPM for synthetic time-series generation, achieving 66% accuracy and 61.31 Mahalanobis Distance on the UCI Gesture Phase Segmentation dataset.",
      contribution: "Outperformed SMOTE and Random Sampling baselines with improved sample diversity and distributional quality.",
      highlight: "Filtering Strategy for Synthetic Time-Series Data",
      link: "DOI not issued yet"
    },
    {
      title: "Two-Stage Reservoir Computing for Sensor-Specific Activity Recognition Using WEAR Inertial Dataset",
      conference: "UbiComp/ISWC 2025",
      fullConference: "ACM UbiComp 2025 (HASCA Workshop – WEAR Challenge)",
      abstract: "Engineered a two-stage Reservoir Computing pipeline with CNNs achieving a 0.52888 test macro F1-score, securing 5th place in the competition.",
      contribution: "Demonstrated robustness to noise and generalization to unseen participants through a merged-limb approach.",
      highlight: "Top-5 in WEAR Challenge",
      link: "https://dl.acm.org/doi/10.1145/3714394.3756190"
    },
    {
      title: "Synthetic Skeleton Data Generation using LLM for Nurse Activity Recognition",
      conference: "UbiComp/ISWC 2024",
      fullConference: "ACM UbiComp 2024 – HASCA (Human Activity Sensing Corpus and Applications)",
      abstract: "Proposed an LLM-based synthetic skeleton data generation method addressing class imbalance in medical activity recognition tasks.",
      contribution: "Improved classification accuracy over traditional augmentation techniques (SMOTE, rotation, scaling), particularly for Endotracheal Suctioning detection.",
      highlight: "LLM-based Healthcare AI Data Generation",
      link: "https://dl.acm.org/doi/10.1145/3675094.3678445"
    }
  ],
  
  skills: [
    {
      category: "Programming",
      items: ["Python", "C++"]
    },
    {
      category: "ML / DL",
      items: ["PyTorch", "Scikit-learn", "YOLOv7", "SciPy", "Diffusion Models", "Reservoir Computing"]
    },
    {
      category: "Data",
      items: ["NumPy", "Pandas", "Time-series Analysis", "Anomaly Detection"]
    },
    {
      category: "Tools & Software",
      items: ["Power BI", "Tableau", "Plotly", "Seaborn", "Matplotlib", "Dash", "Git", "VS Code", "Jupyter Lab", "MySQL", "Unity Engine"]
    }
  ]
};
