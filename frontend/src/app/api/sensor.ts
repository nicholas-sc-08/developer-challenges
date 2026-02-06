import { api } from "./api";

export class SensorService {
    async getAllSensors() {
        try {
            const response = await api.get("/sensor");
            return response.data;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}