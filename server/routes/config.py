from flask import Blueprint, jsonify, make_response, request
from flask_cors import cross_origin

config_bp = Blueprint("config_bp", __name__)

@config_bp.route("/routes", methods=["GET"])
@cross_origin()  # Allow external access
def get_routes():
    try:
        base_url = request.host_url.rstrip("/")  # Dynamically fetch the base URL
        
        routes_config = {
            "version": "1.0.0",
            "updated": "2024-01-19",
            "baseUrl": base_url,
            "routes": {
                "HOME": "/",
                "POLICY_DOCS": "/policy-docs",
                "DATA_REPOSITORY": "/data-repository",
                "AI_REPOSITORY": "/ai-repository",
                "AI_REGISTRY": "/ai-registry",
                "CHAT": "/chat",
                "IMDF": "/imdf",
                "API_STORE": "/apistore",
                "DEVELOPER_WORKSPACE": "/developer-workspace",
                "GOVERNANCE": "/governance",
                "ANALYTICS": "/analytics",
                "STANDARDS": "/standards"
            },
            "api_prefix": "/api"
        }
        response = make_response(jsonify(routes_config))
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Content-Type"] = "application/json"
        return response, 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
