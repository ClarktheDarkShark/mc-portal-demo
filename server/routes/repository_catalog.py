from flask import Blueprint, jsonify

repository_catalog_bp = Blueprint("repository_catalog_bp", __name__)

@repository_catalog_bp.route("/ai", methods=["GET"])
def get_ai_catalog():
    ai_catalog = {
        "modelRepository": {
            "categories": [
                {
                    "name": "GenAI",
                    "models": [
                        {
                            "name": "GenAI Model A",
                            "link": "https://example.com/genai-a",
                            "description": "A cutting-edge GenAI model for creative content generation."
                        },
                        {
                            "name": "GenAI Model B",
                            "link": "https://example.com/genai-b",
                            "description": "A robust GenAI model for enterprise applications."
                        }
                    ]
                },
                {
                    "name": "Computer Vision",
                    "models": [
                        {
                            "name": "CV Model 1",
                            "link": "https://example.com/cv1",
                            "description": "A high-accuracy model for image recognition tasks."
                        },
                        {
                            "name": "CV Model 2",
                            "link": "https://example.com/cv2",
                            "description": "A state-of-the-art model for object detection."
                        }
                    ]
                },
                {
                    "name": "NLP",
                    "models": [
                        {
                            "name": "NLP Model 1",
                            "link": "https://example.com/nlp1",
                            "description": "An NLP model designed for sentiment analysis."
                        }
                    ]
                },
                {
                    "name": "Speech",
                    "models": [
                        {
                            "name": "Speech Model 1",
                            "link": "https://example.com/speech1",
                            "description": "A speech recognition model with high accuracy."
                        }
                    ]
                },
                {
                    "name": "Robotics",
                    "models": [
                        {
                            "name": "Robotics Model 1",
                            "link": "https://example.com/robotics1",
                            "description": "A robotics model for autonomous navigation."
                        }
                    ]
                },
                {
                    "name": "Time Series",
                    "models": [
                        {
                            "name": "Time Series Model 1",
                            "link": "https://example.com/timeseries1",
                            "description": "A model optimized for forecasting time series data."
                        }
                    ]
                }
            ]
        },
        "aiToolkits": {
            "name": "AI Toolkits",
            "link": "https://example.com/ai-toolkits",
            "description": "Toolkits designed for building and deploying AI solutions."
        }
    }
    return jsonify(ai_catalog)

@repository_catalog_bp.route("/data", methods=["GET"])
def get_data_catalog():
    # Return a mock Data Catalogue with dataRepository and dataReports sections
    data_catalog = {
        "dataRepository": {
            "categories": [
                {
                    "name": "Category 1",
                    "datasets": [
                        {
                            "name": "Data Set 1",
                            "description": "Sample data set #1",
                            "link": "https://example.com/data1",
                            "image": "/images/data-set-1.jpg"
                        },
                        {
                            "name": "Data Set 2",
                            "description": "Sample data set #2",
                            "link": "https://example.com/data2",
                            "image": "/images/data-set-2.jpg"
                        }
                    ]
                },
                {
                    "name": "Category 2",
                    "datasets": [
                        {
                            "name": "Data Set 3",
                            "description": "Sample data set #3",
                            "link": "https://example.com/data3",
                            "image": "/images/data-set-3.jpg"
                        }
                    ]
                }
            ]
        },
        "dataReports": {
            "name": "Data Reports",
            "description": "Comprehensive reports for Marine Corps operations.",
            "link": "https://example.com/data-reports"
        }
    }

    return jsonify(data_catalog)

