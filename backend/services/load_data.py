import json
import pandas as pd
from pathlib import Path

# 1. Get the directory of the current script (backend/services/)
CURRENT_DIR = Path(__file__).resolve().parent

# 2. Navigate up one level to 'backend/', then down into 'data/'
DATA_DIR = CURRENT_DIR.parent.parent / "data"

# 3. Define the precise paths to your target files
PRICE_FILE = DATA_DIR / "BrentOilPrices.csv"
EVENT_FILE = DATA_DIR / "events.csv"
MODEL_RESULTS = DATA_DIR / "model_results.json"


def load_price_data():

    df = pd.read_csv(PRICE_FILE)

    df["Date"] = pd.to_datetime(df["Date"])

    df = df.sort_values("Date")

    df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")

    return df


def load_event_data():

    df = pd.read_csv(EVENT_FILE)

    df["Date"] = pd.to_datetime(df["Date"])

    df = df.sort_values("Date")

    df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")

    return df


def load_change_point_results():

    with open(MODEL_RESULTS, "r") as file:

        return json.load(file)