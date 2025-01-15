from flask import Blueprint, jsonify

api_store_bp = Blueprint("api_store_bp", __name__)

@api_store_bp.route("/", methods=["GET"])
def get_apis():
    # Return a mock list of microservices/APIs
    apis = [
        {
            "name": "User Management API",
            "endpoint": "/api/user",
            "description": "Handles user profiles, authentication, etc."
        },
        {
            "name": "Analytics API",
            "endpoint": "/api/analytics",
            "description": "Provides advanced analytics services."
        }
    ]
    return jsonify(apis)
