from flask import Blueprint, request, jsonify
import pandas as pd

from services.load_data import load_price_data

prices_bp = Blueprint("prices", __name__)


@prices_bp.route("/", methods=["GET"])
def get_prices():
    """
    Returns all historical Brent prices.
    """

    df = load_price_data()

    return jsonify(
        df.to_dict(orient="records")
    )


@prices_bp.route("/range", methods=["GET"])
def get_price_range():
    """
    Returns prices between two dates.

    Example:

    /api/prices/range?start=2019-01-01&end=2020-12-31
    """

    start = request.args.get("start")
    end = request.args.get("end")

    df = load_price_data()

    if start:
        start = pd.to_datetime(start)
        df = df[df["Date"] >= start]

    if end:
        end = pd.to_datetime(end)
        df = df[df["Date"] <= end]

    return jsonify(
        df.to_dict(orient="records")
    )


@prices_bp.route("/statistics", methods=["GET"])
def statistics():

    df = load_price_data()

    stats = {

        "count": int(df["Price"].count()),

        "mean_price": round(df["Price"].mean(), 2),

        "median_price": round(df["Price"].median(), 2),

        "min_price": round(df["Price"].min(), 2),

        "max_price": round(df["Price"].max(), 2),

        "std_dev": round(df["Price"].std(), 2)
    }

    return jsonify(stats)