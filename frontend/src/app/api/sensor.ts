import { showToast } from "../redux/slices/snackSlice";
import { snackType } from "../types/enum";
import { SensorState, UpdateSensorForm } from "../types/sensor";
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

    async updateSensor(sensor: UpdateSensorForm, dispatch: any) {
        try {
            const sensorData = { model: sensor.sensor?.model, sensorUid: sensor.sensor?.sensorUid, monitoringPointId: sensor.monitoringPointId }
            const response = await api.put(`/sensor/${sensor.sensor?.id}`, sensorData);
            dispatch(showToast({message: `Sensor conected to monitoring point successfully!`, severity: snackType.success}));
            return response.data;
        } catch (error: any) {
            console.log(`Erro do bacno`, error.meta || error);
            
            dispatch(showToast({message: error.message, severity: snackType.error}))
        }
    }
}