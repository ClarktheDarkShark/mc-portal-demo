from flask import Blueprint, jsonify, make_response, request
from flask_cors import cross_origin

# Define the Blueprint for configuration routes
config_bp = Blueprint("config_bp", __name__)

@config_bp.route("/routes", methods=["GET"])
@cross_origin()  # Allow external access
def get_routes():
    try:
        base_url = request.host_url.rstrip("/")  # Dynamically fetch the base URL

        # Define the routes configuration
        routes_config = {
            "version": "1.0.0",
            "updated": "2024-01-19",
            "baseUrl": base_url,
            "api_prefix": "/api",
            "routes": {
                "HOME": {
                    "path": "/",
                    "description": "Main dashboard and overview of all services",
                    "api_endpoints": [],
                    "features": ["Service Navigation", "Chat Assistant", "Quick Access Menu"]
                },
                "POLICY_DOCS": {
                    "path": "/policy-docs",
                    "description": "Data and AI policy documentation",
                    "api_endpoints": ["/api/policy"],
                    "features": ["Policy Guidelines", "Documentation", "Templates"]
                },
                "DATA_REPOSITORY": {
                    "path": "/data-repository",
                    "description": "Central data catalog and repository",
                    "api_endpoints": ["/api/repository"],
                    "metadata": {
                        "type": "data-service",
                        "requires_auth": True
                    }
                },
                "AI_REPOSITORY": {
                    "path": "/ai-repository",
                    "description": "AI model repository and catalog",
                    "api_endpoints": ["/api/repository"],
                    "metadata": {
                        "type": "ai-service",
                        "requires_auth": True
                    }
                },
                "AI_REGISTRY": {
                    "path": "/ai-registry",
                    "description": "Enterprise AI capabilities and use case registry",
                    "api_endpoints": ["/api/ai-registry"],
                    "features": ["Model Registry", "Version Control", "Deployment Tracking"]
                },
                "IMDF": {
                    "path": "/imdf",
                    "description": "Integrated Mission Data Fabric",
                    "api_endpoints": [
                        "/api/imdf",
                        "/api/imdf/register"
                    ],
                    "features": ["Data Integration", "Real-time Analytics", "Security"],
                    "metadata": {
                        "type": "integration-service",
                        "requires_auth": True,
                        "has_registration": True
                    }
                },
                "API_STORE": {
                    "path": "/apistore",
                    "description": "API marketplace and documentation",
                    "api_endpoints": ["/api/apistore"],
                    "features": ["API Documentation", "Testing Console", "Usage Metrics"]
                },
                "DEVELOPER_WORKSPACE": {
                    "path": "/developer-workspace",
                    "description": "Development environment and tools",
                    "api_endpoints": ["/api/developer-workspace"],
                    "features": ["Notebooks", "Code Templates", "Collaboration Tools"]
                },
                "GOVERNANCE": {
                    "path": "/governance",
                    "description": "Data and AI governance dashboard",
                    "api_endpoints": ["/api/governance"],
                    "features": ["Policy Enforcement", "Access Control", "Audit Logs"]
                },
                "ANALYTICS": {
                    "path": "/analytics",
                    "description": "Analytics and reporting tools",
                    "api_endpoints": ["/api/analytics"],
                    "features": ["Dashboards", "Reports", "Data Visualization"]
                },
                "STANDARDS": {
                    "path": "/standards",
                    "description": "Enterprise standards and best practices",
                    "api_endpoints": ["/api/standards"],
                    "features": ["Guidelines", "Templates", "Documentation"]
                }
            }
        }

        # Return the response as JSON
        response = make_response(jsonify(routes_config))
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Content-Type'] = 'application/json'
        return response, 200

    except Exception as e:
        # Handle errors gracefully
        return jsonify({"error": str(e)}), 500
