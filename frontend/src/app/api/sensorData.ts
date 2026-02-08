import { api } from "./api";

export class SensorDataService {
    async getAllSensorDatas() {
        try {
            const response = await api.get("/sensor-data");
            return response.data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}