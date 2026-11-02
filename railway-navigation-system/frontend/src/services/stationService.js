import api from "./api";
import { FALLBACK_STATIONS, getFallbackStationById } from "../data/fallbackData";

export const getStations = async () => {
  try {
    const res = await api.get("/stations");
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      return res;
    }
    return { data: FALLBACK_STATIONS };
  } catch (err) {
    console.warn("Backend /stations not reachable, using fallback station dataset:", err.message);
    return { data: FALLBACK_STATIONS };
  }
};

export const getStation = async (id) => {
  try {
    const res = await api.get(`/stations/${id}`);
    if (res.data) return res;
    return { data: getFallbackStationById(id) };
  } catch (err) {
    return { data: getFallbackStationById(id) };
  }
};

export const createStation = (data) => api.post("/stations", data);
export const updateStation = (id, data) => api.put(`/stations/${id}`, data);
export const deleteStation = (id) => api.delete(`/stations/${id}`);

