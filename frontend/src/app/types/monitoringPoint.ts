export enum MachineType {
    Pump,
    Fan
}

export enum SensorModel {
    HF_PLUS,
    TcAg,
    TcAs
}

export type MonitoringPointType = {
    id: string,
    name: string,
    machineId: string,
    createdAt: Date,
    machine: { name: string, type: MachineType },
    sensor?: { model: SensorModel, sensorUid: string }
}