from flask import Blueprint, jsonify

repository_catalog_bp = Blueprint("repository_catalog_bp", __name__)

@repository_catalog_bp.route("/", methods=["GET"])
def get_repository_catalog():
    # Return a mock repository or data catalog
    catalog = [
        {"name": "Data Set 1", "link": "https://example.com/data1", "description": "Sample data set #1"},
        {"name": "Data Set 2", "link": "https://example.com/data2", "description": "Sample data set #2"}
    ]
    return jsonify(catalog)
