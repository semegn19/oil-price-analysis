import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import StatisticsCards from "../components/StatisticsCards";
import PriceChart from "../components/PriceChart";
import ChangePointChart from "../components/ChangePointChart";
import EventTimeline from "../components/EventTimeline";
import EventTable from "../components/EventTable";

import {
  getPrices,
  getStatistics,
  getChangePoints,
  getEvents,
  getPricesByRange,
  getEventsByCategory
} from "../services/api";

const Dashboard = () => {

  const [prices, setPrices] = useState([]);

  const [stats, setStats] = useState(null);

  const [events, setEvents] = useState([]);

  const [changePoint, setChangePoint] = useState(null);

  const [muBefore, setMuBefore] = useState(null);

  const [muAfter, setMuAfter] = useState(null);

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [category, setCategory] = useState("All");

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    const pricesRes = await getPrices();

    const statsRes = await getStatistics();

    const cpRes = await getChangePoints();

    const eventsRes = await getEvents();

    setPrices(pricesRes.data);

    setStats(statsRes.data);

    setEvents(eventsRes.data);

    setChangePoint(cpRes.data.estimated_change_point);

    setMuBefore(cpRes.data.mu_before);

    setMuAfter(cpRes.data.mu_after);

  };

  useEffect(() => {

    const applyFilters = async () => {

      if (startDate && endDate) {

        const res = await getPricesByRange(
          startDate,
          endDate
        );

        setPrices(res.data);

      }

      if (category !== "All") {

        const res = await getEventsByCategory(
          category
        );

        setEvents(res.data);

      }

      if (category === "All") {

        const res = await getEvents();

        setEvents(res.data);

      }

    };

    applyFilters();

  }, [startDate, endDate, category]);

  return (

    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh"
      }}
    >

      <Navbar />

      <div
        style={{
          padding: "30px"
        }}
      >

        <Filters

          startDate={startDate}

          endDate={endDate}

          category={category}

          onStartChange={setStartDate}

          onEndChange={setEndDate}

          onCategoryChange={setCategory}

        />

        <StatisticsCards
          stats={stats}
        />

        <PriceChart

          prices={prices}

          changePoint={changePoint}

        />

        <ChangePointChart

          prices={prices}

          changePoint={changePoint}

          muBefore={muBefore}

          muAfter={muAfter}

        />

        <EventTimeline

          events={events}

        />

        <EventTable

          events={events}

        />

      </div>

    </div>

  );

};

export default Dashboard;