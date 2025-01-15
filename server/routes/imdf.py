from flask import Blueprint, jsonify

imdf_bp = Blueprint("imdf_bp", __name__)

@imdf_bp.route("/", methods=["GET"])
def get_imdf_info():
    # Return mock IMDF info
    data = {
        "description": "Integrated Mission Data Fabric information.",
        "participation_steps": [
            "1. Sign up to be part of the IMDF pilot program.",
            "2. Connect to the IMDF via secure channels.",
            "Onboarding instructions."
        ]
    }
    return jsonify(data)
