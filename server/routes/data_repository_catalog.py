from flask import Blueprint, jsonify

# Create a blueprint for the Enterprise Data Catalogue
enterprise_data_registry_bp = Blueprint("enterprise_data_registry_bp", __name__)

@enterprise_data_registry_bp.route("/", methods=["GET"])
def get_enterprise_data_registry():
    # Mock response for the Enterprise Data Catalogue
    registry_info = {
        "name": "Enterprise Data Catalogue",
        "description": "A centralized platform to explore and manage data assets.",
        "link": "https://example.com/data-catalogue",
    }

    # Mock data for datasets
    datasets = [
        {"id": 1, "name": "Economic Data Trends", "category": "Economics"},
        {"id": 2, "name": "Population Demographics", "category": "Demographics"},
        {"id": 3, "name": "Environmental Measurements", "category": "Environment"},
        {"id": 4, "name": "Financial Market Data", "category": "Finance"},
    ]

    # Mock data for categories
    categories = ["Economics", "Demographics", "Environment", "Finance"]

    return jsonify({"registryInfo": registry_info, "datasets": datasets, "categories": categories})
