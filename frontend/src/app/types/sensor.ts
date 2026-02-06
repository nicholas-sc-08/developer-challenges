export type SensorState = {
    id: string,
    sensorUid: string,
    model: string,
    monitoringPointId: string | null,
    createdAt: Date
}

export type InitialSensorState = {
    items: SensorState[],
    isLoading: boolean,
}