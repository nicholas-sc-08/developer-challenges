import { SensorModel } from "../redux/slices/monitoringSlice";

export function translateSensorModelName(modelName: string) {
    return modelName == SensorModel.HF_PLUS ? "HF+" : modelName;
}