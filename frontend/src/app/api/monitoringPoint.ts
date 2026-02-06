import { CreateMonitoringPoint } from "../types/monitoring";
import { api } from "./api";

export class MonitoringPoint {
    async getAllMonitoringPoints(page: number, search: string) {
        try {
            const response = await api.get(`/monitoring-point`, {
                params: {
                    page, search: search || ""
                }
            });
            return response.data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async createMonitoringPoint(data: CreateMonitoringPoint) {
        try {
            const response = await api.post("/monitoring-point", data);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}