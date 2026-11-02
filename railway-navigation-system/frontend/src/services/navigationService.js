import api from "./api";
import {
  getFallbackNodes,
  getFallbackPaths,
  calculateFallbackRoute,
} from "../data/fallbackData";

export const getNodes = async (stationId) => {
  try {
    const res = await api.get(`/navigation/nodes/station/${stationId}`);
    if (res.data && Array.isArray(res.data) && res.data.length > 0) return res;
    return { data: getFallbackNodes(stationId) };
  } catch (err) {
    return { data: getFallbackNodes(stationId) };
  }
};

export const createNode = (data) => api.post("/navigation/nodes", data);
export const updateNode = (id, data) => api.put(`/navigation/nodes/${id}`, data);
export const deleteNode = (id) => api.delete(`/navigation/nodes/${id}`);

export const getPaths = async (stationId) => {
  try {
    const res = await api.get(`/navigation/paths/station/${stationId}`);
    if (res.data && Array.isArray(res.data) && res.data.length > 0) return res;
    return { data: getFallbackPaths(stationId) };
  } catch (err) {
    return { data: getFallbackPaths(stationId) };
  }
};

export const createPath = (data) => api.post("/navigation/paths", data);
export const updatePath = (id, data) => api.put(`/navigation/paths/${id}`, data);
export const deletePath = (id) => api.delete(`/navigation/paths/${id}`);

export const calculateRoute = async (payload) => {
  try {
    const res = await api.post("/navigation/route", payload);
    if (res.data && res.data.path && res.data.path.length > 0) return res;
    return { data: calculateFallbackRoute(payload) };
  } catch (err) {
    return { data: calculateFallbackRoute(payload) };
  }
};

