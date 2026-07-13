from flask import Blueprint, jsonify

from services.load_data import load_change_point_results

changepoints_bp = Blueprint(
    "changepoints",
    __name__
)


@changepoints_bp.route("/", methods=["GET"])
def get_change_points():
    """
    Returns Bayesian change point results.
    """

    results = load_change_point_results()

    return jsonify(results)


@changepoints_bp.route("/summary", methods=["GET"])
def summary():

    results = load_change_point_results()

    summary = {

        "estimated_change_point":
            results.get("change_point"),

        "mu_before":
            results.get("mu_before"),

        "mu_after":
            results.get("mu_after"),

        "sigma":
            results.get("sigma"),

        "posterior_probability":
            results.get("posterior_probability")
    }

    return jsonify(summary)