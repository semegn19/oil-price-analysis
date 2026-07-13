from flask import Blueprint, request, jsonify
import pandas as pd
from pathlib import Path

# 1. Get the directory of the current script (backend/services/)
CURRENT_DIR = Path(__file__).resolve().parent

# 2. Navigate up one level to 'backend/', then down into 'data/'
DATA_DIR = CURRENT_DIR.parent.parent / "data"

EVENTS_FILE = DATA_DIR / "events.csv"


events_bp = Blueprint("events", __name__)


def load_events():
    df = pd.read_csv(EVENTS_FILE)
    df["Date"] = pd.to_datetime(df["Date"])
    return df


@events_bp.route("/", methods=["GET"])
def get_events():
    """
    Returns every event.
    """

    df = load_events()

    df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")

    return jsonify(df.to_dict(orient="records"))


@events_bp.route("/category/<category>", methods=["GET"])
def get_events_by_category(category):
    """
    Example:

    /api/events/category/OPEC
    """

    df = load_events()

    filtered = df[
        df["Category"].str.lower() == category.lower()
    ]

    filtered["Date"] = filtered["Date"].dt.strftime("%Y-%m-%d")

    return jsonify(filtered.to_dict(orient="records"))


@events_bp.route("/range", methods=["GET"])
def get_events_in_range():

    start = request.args.get("start")
    end = request.args.get("end")

    df = load_events()

    if start:
        start = pd.to_datetime(start)
        df = df[df["Date"] >= start]

    if end:
        end = pd.to_datetime(end)
        df = df[df["Date"] <= end]

    df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")

    return jsonify(df.to_dict(orient="records"))