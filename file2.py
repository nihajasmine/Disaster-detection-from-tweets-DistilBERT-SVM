import pandas as pd
import re

# Function to classify disaster based on tweet content
def classify_disaster(tweet):
    # Define common keywords/phrases for different types of disasters
    earthquake_keywords = ['earthquake', 'quake', 'seismic', 'tremor', 'aftershock']
    flood_keywords = ['flood', 'submerged', 'deluge', 'water', 'rain', 'drowning']
    fire_keywords = ['fire', 'wildfire', 'blaze', 'burning', 'flames']
    storm_keywords = ['storm', 'hurricane', 'cyclone', 'tornado', 'typhoon', 'flood']
    landslide_keywords = ['landslide', 'mudslide', 'avalanche']

    # Convert tweet to lowercase for easier matching
    tweet_lower = tweet.lower()

    # Check if tweet contains keywords related to specific disasters
    if any(keyword in tweet_lower for keyword in earthquake_keywords):
        return 'Earthquake'
    elif any(keyword in tweet_lower for keyword in flood_keywords):
        return 'Flood'
    elif any(keyword in tweet_lower for keyword in fire_keywords):
        return 'Fire'
    elif any(keyword in tweet_lower for keyword in storm_keywords):
        return 'Storm'
    elif any(keyword in tweet_lower for keyword in landslide_keywords):
        return 'Landslide'
    else:
        return 'Unknown'  # If no matching keywords are found

# Load the CSV file
df = pd.read_csv('tweets_data.csv')

# Apply the classification function to each tweet and create a new 'disaster' column
df['disaster'] = df['tweet'].apply(classify_disaster)

# Split the 'location' column into 'city' and 'state' based on the comma delimiter
df[['city', 'state']] = df['location'].str.split(',', expand=True)

# Remove leading/trailing spaces from city and state columns
df['city'] = df['city'].str.strip()
df['state'] = df['state'].str.strip()

# Save the updated dataframe to a new CSV file
df.to_csv('tweets_data_1.csv', index=False)

print("Disaster column and location columns added successfully!")
