# server/app.py

from flask import Flask, send_from_directory
from flask_cors import CORS
import os
import requests
import jsonify

# Import Blueprints from your routes
from .routes.policy_docs import policy_docs_bp
from .routes.repository_catalog import repository_catalog_bp  # This now contains /data and /ai routes
from .routes.api_store import api_store_bp
from .routes.imdf import imdf_bp
from .routes.enterprise_ai_registry import enterprise_ai_registry_bp


app = Flask(__name__, static_folder="../client/build", static_url_path="/")
CORS(app)

# Register Blueprints
app.register_blueprint(policy_docs_bp, url_prefix="/api/policy")
app.register_blueprint(repository_catalog_bp, url_prefix="/api/repository")
app.register_blueprint(api_store_bp, url_prefix="/api/apistore")
app.register_blueprint(imdf_bp, url_prefix="/api/imdf")
app.register_blueprint(enterprise_ai_registry_bp, url_prefix="/api/ai-registry")


# Serve React front-end
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    # Build the absolute path for the requested file from the build folder
    file_path = os.path.join(app.static_folder, path)
    if path != "" and os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # If the file doesn't exist, serve index.html so React Router can handle the route
        return send_from_directory(app.static_folder, "index.html")

def wake_up_heroku_app():
    """
    Function to send a GET request to the Heroku app to wake it up.
    """
    url = "https://mc-chat-app-3dc46f63fc94.herokuapp.com"
    try:
        response = requests.get(url, timeout=10)
        app.logger.info(f"Heroku app wake-up response: {response.status_code}")
    except requests.RequestException as e:
        app.logger.error(f"Error waking up Heroku app: {e}")

@app.route('/')
def home():
    """
    Main route that triggers the Heroku app wake-up on visit.
    """
    wake_up_heroku_app()  # Wake up the Heroku app
    return jsonify({"message": "Welcome to the site! Heroku app has been woken up."})

    
if __name__ == "__main__":
    app.run(debug=True)
