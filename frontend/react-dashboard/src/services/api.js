import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api"
});

export const getPrices = () =>
  API.get("/prices/");

export const getStatistics = () =>
  API.get("/prices/statistics");

export const getChangePoints = () =>
  API.get("/changepoints/summary");

export const getEvents = () =>
  API.get("/events/");

export const getPricesByRange = (start, end) =>
  API.get(`/prices/range?start=${start}&end=${end}`);

export const getEventsByRange = (start, end) =>
  API.get(`/events/range?start=${start}&end=${end}`);

export const getEventsByCategory = (category) =>
  API.get(`/events/category/${category}`);