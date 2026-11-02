import api from "./api";
import { getFallbackFacilities } from "../data/fallbackData";

export const getFacilitiesByStation = async (stationId) => {
  try {
    const res = await api.get(`/facilities/station/${stationId}`);
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      return res;
    }
    return { data: getFallbackFacilities(stationId) };
  } catch (err) {
    return { data: getFallbackFacilities(stationId) };
  }
};

export const getFacility = (id) => api.get(`/facilities/${id}`);
export const createFacility = (data) => api.post("/facilities", data);
export const updateFacility = (id, data) => api.put(`/facilities/${id}`, data);
export const deleteFacility = (id) => api.delete(`/facilities/${id}`);

