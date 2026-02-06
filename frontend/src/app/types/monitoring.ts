import { MachineType, SensorModel } from "./enum";

export type MonitoringPointType = {
    id: string,
    name: string,
    machineId: string,
    createdAt: Date,
    machine: { name: string, type: MachineType },
    sensor?: { model: SensorModel, sensorUid: string }
}

export type InitialMonitoringState = {
    items: MonitoringPointType[],
    total: number,
    isLoading: boolean,
};