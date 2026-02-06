import { api } from "./api";

export class MonitoringPoint {
    async getAllMonitoringPoints(page: number, search: string) {
        const response = await api.get(`/monitoring-point`, {
            params: {   
                page, search: search || ""
            }
        });
        return response.data;
    }
}