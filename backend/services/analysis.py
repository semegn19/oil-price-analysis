import pandas as pd

from services.load_data import (
    load_price_data,
    load_event_data,
    load_change_point_results
)


def summary_statistics():

    df = load_price_data()

    return {

        "count": int(df["Price"].count()),

        "mean_price": round(df["Price"].mean(), 2),

        "median_price": round(df["Price"].median(), 2),

        "minimum_price": round(df["Price"].min(), 2),

        "maximum_price": round(df["Price"].max(), 2),

        "standard_deviation": round(df["Price"].std(), 2)
    }


def event_counts():

    df = load_event_data()

    return (
        df["Category"]
        .value_counts()
        .to_dict()
    )


def average_price():

    df = load_price_data()

    return round(df["Price"].mean(), 2)


def latest_price():

    df = load_price_data()

    latest = df.iloc[-1]

    return {

        "date": latest["Date"],

        "price": latest["Price"]
    }


def dashboard_metrics():

    prices = load_price_data()

    events = load_event_data()

    model = load_change_point_results()

    return {

        "number_of_prices":
            len(prices),

        "number_of_events":
            len(events),

        "average_price":
            round(prices["Price"].mean(), 2),

        "highest_price":
            round(prices["Price"].max(), 2),

        "lowest_price":
            round(prices["Price"].min(), 2),

        "change_point":
            model["change_point"],

        "mu_before":
            model["mu_before"],

        "mu_after":
            model["mu_after"],

        "sigma":
            model["sigma"]
    }