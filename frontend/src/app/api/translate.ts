import { SensorModel } from "../types/enum";

export function translateSensorModelName(modelName: string) {
    return modelName == SensorModel.HF_PLUS ? "HF+" : modelName;
}