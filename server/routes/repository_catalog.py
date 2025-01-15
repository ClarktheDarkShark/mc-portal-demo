from flask import Blueprint, jsonify

repository_catalog_bp = Blueprint("repository_catalog_bp", __name__)

# Data Catalogue Endpoint
@repository_catalog_bp.route("/data", methods=["GET"])
def get_data_catalog():
    data_catalog = [
        {
            "name": "Marine Corps Reports",
            "link": "https://example.com/data-reports",
            "description": "Comprehensive data reports for Marine Corps operations."
        },
        {
            "name": "Climate Impact Data",
            "link": "https://example.com/climate-data",
            "description": "Data on climate impacts affecting military operations."
        }
    ]
    return jsonify(data_catalog)

# AI Catalogue Endpoint
@repository_catalog_bp.route("/ai", methods=["GET"])
def get_ai_catalog():
    ai_catalog = [
        {
            "name": "Model Repository",
            "link": "https://example.com/model-repo",
            "description": "Access machine learning models for predictive analytics."
        },
        {
            "name": "AI Toolkits",
            "link": "https://example.com/ai-toolkits",
            "description": "Toolkits for building and deploying AI solutions."
        }
    ]
    return jsonify(ai_catalog)
