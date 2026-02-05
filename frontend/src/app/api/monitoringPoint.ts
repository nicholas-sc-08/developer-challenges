import { api } from "./api";

export class MonitoringPoint {
    async getAllMonitoringPoints(page: number) {
        const response = await api.get(`/motoring-point/${page}`);
        return response.data;
    }
}