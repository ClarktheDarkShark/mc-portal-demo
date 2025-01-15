from flask import Blueprint, jsonify

api_store_bp = Blueprint("api_store_bp", __name__)

@api_store_bp.route("/", methods=["GET"])
def get_apis():
    # Group APIs by categories with detailed information
    apis_by_category = [
        {
            "category": "Weather APIs",
            "apis": [
                {
                    "name": "Marine Weather API",
                    "endpoint": "/api/weather",
                    "description": "Get real-time weather data tailored for Marine Corps operations.",
                    "pricing": "Free for up to 1,000 requests/month.",
                    "documentation": "https://example.com/weather-docs",
                }
            ],
        },
        {
            "category": "Personnel APIs",
            "apis": [
                {
                    "name": "Personnel Tracking API",
                    "endpoint": "/api/personnel",
                    "description": "Track and manage personnel information with robust filtering options.",
                    "pricing": "$25/month for up to 10,000 requests.",
                    "documentation": "https://example.com/personnel-docs",
                }
            ],
        },
        {
            "category": "Logistics APIs",
            "apis": [
                {
                    "name": "Mission Planning API",
                    "endpoint": "/api/mission-planning",
                    "description": "Access tools for automated mission planning and logistics management.",
                    "pricing": "Contact us for enterprise pricing.",
                    "documentation": "https://example.com/mission-planning-docs",
                },
                {
                    "name": "Vehicle Logistics API",
                    "endpoint": "/api/vehicles",
                    "description": "Monitor and manage vehicle fleets, including maintenance schedules.",
                    "pricing": "Free for basic use; advanced features available in premium tiers.",
                    "documentation": "https://example.com/vehicle-docs",
                },
            ],
        },
    ]
    return jsonify(apis_by_category)
