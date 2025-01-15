from flask import Blueprint, jsonify

repository_catalog_bp = Blueprint("repository_catalog_bp", __name__)

# Data Catalogue Endpoint
@repository_catalog_bp.route("/data", methods=["GET"])
def get_data_catalog():
    # Return a mock Data Catalogue
    data_catalog = [
        {
            "name": "Data Set 1",
            "link": "https://example.com/data1",
            "description": "Sample data set #1"
        },
        {
            "name": "Data Set 2",
            "link": "https://example.com/data2",
            "description": "Sample data set #2"
        },
        {
            "name": "Data Reports",
            "link": "https://example.com/data-reports",
            "description": "Comprehensive reports for Marine Corps operations."
        }
    ]
    return jsonify(data_catalog)

# AI Catalogue Endpoint
@repository_catalog_bp.route("/ai", methods=["GET"])
def get_ai_catalog():
    # Return a mock AI Catalogue with examples suitable for a model dropdown
    ai_catalog = [
        {
            "name": "Model Repository",
            "link": "https://example.com/model-repo",
            "description": "Access a repository of machine learning models for predictive analytics."
        },
        {
            "name": "AI Toolkits",
            "link": "https://example.com/ai-toolkits",
            "description": "Toolkits designed for building and deploying AI solutions."
        },
        {
            "name": "Deep Learning Models",
            "link": "https://example.com/dl-models",
            "description": "A collection of deep learning models optimized for various tasks."
        }
    ]
    return jsonify(ai_catalog)
