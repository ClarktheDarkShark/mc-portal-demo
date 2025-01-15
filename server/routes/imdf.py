from flask import Blueprint, jsonify

imdf_bp = Blueprint("imdf_bp", __name__)

@imdf_bp.route("/", methods=["GET"])
def get_imdf_info():
    # Return mock IMDF info
    data = {
        "description": "Integrated Mission Data Fabric information.",
        "participation_steps": [
            "Step 1: Sign up for the IMDF pilot program.",
            "Step 2: Connect via secure channels.",
            "Step 3: Follow onboarding instructions."
        ]
    }
    return jsonify(data)
