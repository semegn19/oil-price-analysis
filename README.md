# Brent Oil Price Analysis: Impact of Geopolitical and Economic Events

## Overview

This project investigates the relationship between major geopolitical and economic events and fluctuations in Brent crude oil prices using Bayesian Change Point Analysis. The objective is to identify structural breaks in the Brent oil price time series and examine whether these changes coincide with significant global events such as geopolitical conflicts, OPEC production decisions, economic crises, sanctions, and the COVID-19 pandemic.

The project is completed as part of a data science case study for **Birhan Energies**, a consultancy specializing in providing data-driven insights to stakeholders in the energy sector. The analysis aims to support investors, policymakers, and energy companies by providing statistical evidence of changes in oil market behavior over time.

---

## Business Problem

Brent crude oil prices are highly sensitive to political, economic, and market events. Sudden changes in oil prices create uncertainty for investors, governments, and energy companies.

This project seeks to answer the following questions:

* Which major events have significantly impacted Brent oil prices?
* Can structural changes in Brent oil prices be detected statistically?
* How large are the changes before and after major events?
* How can these insights support better decision-making in the energy sector?

---

## Objectives

The project has three primary objectives:

1. Identify major geopolitical, economic, and OPEC-related events that influenced Brent oil prices between 1987 and 2022.

2. Detect and quantify structural breaks in Brent oil prices using Bayesian Change Point Analysis.

3. Generate data-driven insights to support investment decisions, policy development, and operational planning.

---

## Dataset

### Brent Oil Prices

The dataset contains historical daily Brent crude oil prices.

**Period**

* 20 May 1987 – 30 September 2022

**Features**

| Column | Description                            |
| ------ | -------------------------------------- |
| Date   | Date of observation                    |
| Price  | Brent crude oil price (USD per barrel) |

---

### Event Dataset

A manually compiled dataset containing major geopolitical and economic events affecting the oil market.

Each record includes:

* Event Date
* Event Name
* Category
* Expected Market Impact

Examples include:

* Iraq Invades Kuwait
* Gulf War
* Asian Financial Crisis
* Global Financial Crisis
* Arab Spring
* OPEC Production Cuts
* COVID-19 Pandemic
* Russia–Ukraine Conflict

---

## Project Structure

```text
Oil-Price-Analysis/
│
├── data/
│   ├── BrentOilPrices.csv
│
├── notebooks/
│   ├── Task1_EDA.ipynb
│
├── figures/
│   ├── price_series.png
│   ├── log_returns.png
│   ├── trace_plot.png
│   ├── posterior_tau.png
│   └── change_point.png
│
├── reports/
│   ├── Task 1.pdf
│   └── Assumptions and limitations.pdf
│
├── app/
│   ├── backend/
│   └── frontend/
│
├── requirements.txt
├── README.md
└── event dataset for Task 1a.csv
```

---

## Methodology

The analysis follows a structured workflow.

### 1. Data Collection

Historical Brent oil prices were collected alongside a manually curated dataset of major geopolitical and economic events.

### 2. Data Preparation

The dataset was cleaned by:

* Converting dates to datetime format
* Sorting chronologically
* Checking for missing values
* Removing duplicates
* Computing daily log returns

### 3. Exploratory Data Analysis

Initial analysis includes:

* Historical price trends
* Distribution of prices
* Rolling statistics
* Log return analysis
* Volatility clustering

### 4. Time Series Diagnostics

The following statistical properties are investigated:

* Trend
* Stationarity
* Volatility
* Structural changes

Stationarity is evaluated using:

* Augmented Dickey-Fuller (ADF) Test
* KPSS Test

### 5. Bayesian Change Point Analysis

A Bayesian model is implemented using **PyMC**.

The model estimates:

* Change point location (τ)
* Mean before change (μ₁)
* Mean after change (μ₂)
* Standard deviation (σ)

Markov Chain Monte Carlo (MCMC) sampling is used to estimate posterior distributions.

### 6. Interpretation

Detected change points are compared with documented historical events to investigate whether statistically significant changes align with geopolitical or economic developments.

---

## Technologies Used

* Python 3
* Pandas
* NumPy
* Matplotlib
* PyMC
* ArviZ
* Jupyter Notebook

Future work:

* Flask
* React
* Plotly

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/brent-oil-analysis.git
```

Move into the project directory

```bash
cd brent-oil-analysis
```

Install dependencies

```bash
pip install -r requirements.txt
```

Launch Jupyter Notebook

```bash
jupyter notebook
```

---

## Running the Analysis

Run the notebooks in the following order:

1. **eda_and_modeling.ipynb**

This notebook performs:

* Data loading
* Cleaning
* Exploratory Data Analysis
* Time series diagnostics
* Bayesian model construction
* MCMC sampling
* Posterior analysis
* Change point detection
* Historical event comparison

---

## Results

The project produces:

* Brent oil price trend visualization
* Daily log return plots
* Bayesian posterior distributions
* Trace plots
* Estimated change point locations
* Quantified parameter changes before and after structural breaks
* Historical event comparisons

---

## Assumptions

This analysis assumes that:

* Brent crude oil prices represent global crude oil market behavior.
* Historical event dates approximate the beginning of market reactions.
* Daily prices adequately capture market movements.
* Bayesian change point models identify statistical changes rather than causal mechanisms.

---

## Limitations

Several limitations should be considered.

The analysis identifies statistical associations rather than proving causal relationships. Oil prices are influenced by many factors beyond the geopolitical and economic events included in the event dataset, including exchange rates, inflation, technological developments, market expectations, and speculative trading.

Additionally, multiple significant events may occur close together, making it difficult to attribute a structural change to a single event. The Bayesian change point model detects when statistical properties change but does not explain why those changes occur.

---

## Future Work

Future extensions of this project may include:

* Multiple Bayesian change point models
* Hidden Markov Models
* Markov Switching Models
* Vector Autoregression (VAR)
* Integration of macroeconomic indicators such as GDP, inflation, exchange rates, and interest rates
* Interactive dashboard development using Flask and React
* Real-time oil price monitoring
* Predictive forecasting models

---

## Dashboard (Planned)

An interactive web application will be developed to present the analytical results.

The dashboard will allow users to:

* Explore Brent oil prices over time
* View detected change points
* Examine posterior distributions
* Filter events by category
* Compare historical events with detected structural breaks
* Access statistical summaries

Target users include:

* Investors
* Financial analysts
* Policymakers
* Energy companies

---

