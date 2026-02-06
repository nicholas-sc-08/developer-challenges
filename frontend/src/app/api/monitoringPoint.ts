import { api } from "./api";

export class MonitoringPoint {
    async getAllMonitoringPoints(page: number) {
        const response = await api.get(`/monitoring-point?page=${page}`);
        return response.data;
    }
}