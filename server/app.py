# server/app.py

from flask import Flask, send_from_directory
from flask_cors import CORS
import os
import requests


# Import Blueprints from your routes
from .routes.policy_docs import policy_docs_bp
from .routes.repository_catalog import repository_catalog_bp  # This now contains /data and /ai routes
from .routes.api_store import api_store_bp
from .routes.imdf import imdf_bp
from .routes.enterprise_ai_registry import enterprise_ai_registry_bp
from .routes.config import config_bp
# from .routes.developer_workspace import developer_workspace_bp
# from .routes.governance import governance_bp
# from .routes.analytics import analytics_bp
# from .routes.standards import standards_bp


app = Flask(__name__, static_folder="../client/build", static_url_path="/")
CORS(app)

# Register Blueprints
app.register_blueprint(policy_docs_bp, url_prefix="/api/policy")
app.register_blueprint(repository_catalog_bp, url_prefix="/api/repository")
app.register_blueprint(api_store_bp, url_prefix="/api/apistore")
app.register_blueprint(imdf_bp, url_prefix="/api/imdf")
app.register_blueprint(enterprise_ai_registry_bp, url_prefix="/api/ai-registry")
app.register_blueprint(config_bp, url_prefix="/api/config")


def wake_up_heroku_app():
    """
    Function to send a GET request to the Heroku app to wake it up.
    """
    url1 = "https://mc-ai-agent-4181d506847b.herokuapp.com"
    url2 = "https://alfred-demo-311fd5c8f0bf.herokuapp.com"
    try:
        response1 = requests.get(url1, timeout=10)
        response2 = requests.get(url2, timeout=10)
        app.logger.info(f"Heroku app wake-up response: {response1.status_code}")
        app.logger.info(f"Heroku app wake-up response: {response2.status_code}")
    except requests.RequestException as e:
        app.logger.error(f"Error waking up Heroku app: {e}")

# Serve React front-end
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    wake_up_heroku_app()

    # Skip serving React for API requests
    if path.startswith("api/"):
        return {"error": "Not Found"}, 404

    # Serve React static files or fallback to index.html
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # Always return index.html for React routes
        return send_from_directory(app.static_folder, "index.html")

    
if __name__ == "__main__":
    app.run(debug=True)
