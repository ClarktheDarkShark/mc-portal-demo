from flask import Blueprint, jsonify

policy_docs_bp = Blueprint("policy_docs_bp", __name__)

@policy_docs_bp.route("/", methods=["GET"])
def get_policy_docs():
    # Return a mock list of policy documents
    data = [
        {"title": "Policy Document 1", "description": "Top-level AI policy."},
        {"title": "Policy Document 2", "description": "Data sharing framework."}
    ]
    return jsonify(data)
