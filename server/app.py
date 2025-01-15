from flask import Flask, send_from_directory
from flask_cors import CORS
import os

# Import Blueprints from your routes
from .routes.policy_docs import policy_docs_bp
from .routes.repository_catalog import repository_catalog_bp  # This now contains /data and /ai routes
from .routes.api_store import api_store_bp
from .routes.imdf import imdf_bp

app = Flask(__name__, static_folder="../client/build", static_url_path="/")
CORS(app)

# Register Blueprints
app.register_blueprint(policy_docs_bp, url_prefix="/api/policy")
app.register_blueprint(repository_catalog_bp, url_prefix="/api/repository")
app.register_blueprint(api_store_bp, url_prefix="/api/apistore")
app.register_blueprint(imdf_bp, url_prefix="/api/imdf")

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

if __name__ == "__main__":
    app.run(debug=True)
