import pymongo
import pandas as pd

# MongoDB connection setup
def connect_to_mongo():
    # Replace the connection string if necessary
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client['tweet_analysis']  # Database name
    collection = db['tweets']  # Collection name
    return collection

# Fetch data from MongoDB
def fetch_data(collection):
    data = collection.find()  # Retrieve all documents in the 'tweets' collection
    return data

# Convert data to pandas DataFrame
def convert_to_dataframe(data):
    # Convert the MongoDB cursor data to a list of dictionaries
    data_list = list(data)
    
    # If the dataset is not empty, convert to DataFrame
    if data_list:
        df = pd.DataFrame(data_list)
        
        # Clean the DataFrame to only contain required columns
        df = df[['tweet', 'location', 'date', 'urgency']]
        
        return df
    else:
        print("No data found in the collection!")
        return None

# Save DataFrame to CSV
def save_to_csv(df, filename="tweets_data.csv"):
    if df is not None:
        df.to_csv(filename, index=False)
        print(f"Data has been saved to {filename}")
    else:
        print("No data to save!")

# Main function to orchestrate the process
def main():
    collection = connect_to_mongo()
    data = fetch_data(collection)
    df = convert_to_dataframe(data)
    save_to_csv(df)

if __name__ == "__main__":
    main()
