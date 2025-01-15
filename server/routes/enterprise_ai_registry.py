from flask import Blueprint, jsonify

# Create a blueprint for the Enterprise AI Registry
enterprise_ai_registry_bp = Blueprint("enterprise_ai_registry_bp", __name__)

@enterprise_ai_registry_bp.route("/ai-registry", methods=["GET"])
def get_enterprise_ai_registry():
    # Mock response for the Enterprise AI Registry
    registry_info = {
        "name": "Enterprise AI Registry",
        "description": "A centralized platform to explore and manage AI assets.",
        "link": "https://example.com/ai-registry",
    }

    # Mock data for AI projects
    projects = [
        {"id": 1, "name": "AI Project Alpha", "category": "Machine Learning"},
        {"id": 2, "name": "AI Project Beta", "category": "Natural Language Processing"},
        {"id": 3, "name": "AI Project Gamma", "category": "Computer Vision"},
        {"id": 4, "name": "AI Project Delta", "category": "Machine Learning"},
    ]

    # Mock data for categories
    categories = ["Machine Learning", "Natural Language Processing", "Computer Vision"]

    return jsonify({"registryInfo": registry_info, "projects": projects, "categories": categories})
