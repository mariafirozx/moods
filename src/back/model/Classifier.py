from transformers import pipeline
# Initialize the text classification pipeline with a pre-trained model [hugging face]
# This model is specifically for emotion classification in English text
classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", return_all_scores=True)

def classfify_mood(text: str):
    res = classifier(text)

    print("Classification Result:", res)
    return res; 


classfify_mood("I am sad"); 