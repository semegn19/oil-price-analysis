from flask import Flask
from flask_cors import CORS

from routes.prices import prices_bp
from routes.changepoints import changepoints_bp
from routes.events import events_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(prices_bp, url_prefix="/api/prices")
app.register_blueprint(changepoints_bp, url_prefix="/api/changepoints")
app.register_blueprint(
    events_bp,
    url_prefix="/api/events"
)


@app.route("/")
def home():
    return {
        "message": "Brent Oil Price Analysis API",
        "version": "1.0",
        "endpoints": [
            "/api/prices",
            "/api/prices/range",
            "/api/prices/statistics",
            "/api/changepoints",
            "/api/changepoints/summary"
        ]
    }


if __name__ == "__main__":
    app.run(debug=True)