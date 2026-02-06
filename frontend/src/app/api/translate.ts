import { SensorModel } from "../types/enum";

export function translateSensorModelName(modelName: string) {
    if(modelName == SensorModel.HF_PLUS) {
        return "HF+";
    } else if(modelName == SensorModel.TCAG) {
        return "TcAg";
    } else {
        return "TcAs";
    }
}

export function trasnlateMachineType(machineType: string) {
    return machineType == "PUMP" ? "Pump" : "Fan";
}