# Disaster-Tweet-Classification-System

This project implements a **Disaster Tweet Classification System using Machine Learning and Deep Learning algorithms** _(SVM and fine-tuned DistilBERT)_. It aims to classify tweets as disaster-related or not, enabling real-time analysis and visualization of disaster information from social media.

The system processes tweets by cleaning text, applying tokenization, stemming, and lemmatization, then trains classification models to detect disaster-related content. Named Entity Recognition (NER) is applied to extract locations, and results are visualized through an interactive Tableau dashboard.

## Key Features
- Collection and preprocessing of 25K+ tweets via APIs
- Noise removal, tokenization, stemming, and lemmatization
- Disaster classification using SVM and DistilBERT
- Location extraction from tweets using NER
- Interactive Tableau dashboard with real-time map views
- Robust performance with >90% accuracy

## Technologies Used
### Programming Language
- Python 3.x
### Libraries & Frameworks
- scikit-learn (SVM)
- Transformers (Hugging Face, DistilBERT)
- NLTK / spaCy for preprocessing & NER
- Pandas, NumPy
### Visualization
- Tableau (interactive dashboards)
### Tools
- Jupyter Notebook for experimentation

📂 Project Structure
```
disaster-tweet-classification/
├── data/ # Dataset of collected tweets
├── disaster-app/ # Frontend files (React or other UI)
├── notebooks/ # Jupyter notebooks for training & evaluation
├── tweets/ # Sample tweets for visualization
├── book1.twbx # Tableau workbook for dashboards
├── README.md # Project documentation
└── .gitignore # Git ignore file
```

## How It Works
### 1. Data Collection
- Tweets collected using Twitter APIs (~25K+ entries).
- Data includes text, username, timestamp, and media metadata.

### 2. Preprocessing
- Noise removal (URLs, mentions, hashtags, emojis).
- Tokenization, stemming, and lemmatization.
- Text normalization for consistent input.

### 3. Model Training
- **SVM (RBF kernel)** trained with grid search for hyperparameter tuning.
- **DistilBERT** fine-tuned for binary classification of tweets.

### 4. Location Extraction
- NER applied on classified disaster tweets to extract geographic entities.
- Locations linked to visualization dashboards.

### 5. Visualization
- Tableau dashboard with map views to show disaster-affected regions in real time.

## Results Summary

### DistilBERT Model
| Metric      | Value |
|-------------|-------|
| Accuracy    | 91.1% |
| Precision   | 0.85  |
| Recall      | 0.83  |
| F1-Score    | 0.84  |

### SVM Model
| Metric      | Value |
|-------------|-------|
| Accuracy    | 90.9% |
| Precision   | 0.86  |
| Recall      | 0.80  |
| F1-Score    | 0.83  |

## Conclusion
Both models achieved strong performance (>90% accuracy).  
- **DistilBERT** shows slightly better balance between precision and recall.  
- **SVM** remains efficient and interpretable, suitable for smaller-scale deployments.  

The system demonstrates how combining preprocessing, ML/DL models, and visualization tools can provide actionable insights into disaster events in real time.
