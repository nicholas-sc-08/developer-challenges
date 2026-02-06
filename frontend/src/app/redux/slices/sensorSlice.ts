import { InitialSensorState, SensorState } from "@/app/types/sensor";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialSensorState = {
    sensorItems: [],
    sensorIsLoading: false
}

const sensorSlice = createSlice({
    name: "sensor",
    initialState,
    reducers: {
        setSensor: (state, { payload }: PayloadAction<{items: SensorState[], sensorIsLoading: boolean}>) => {
            state.sensorItems = payload.items;
            state.sensorIsLoading = payload.sensorIsLoading;
        },
        setSensorLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.sensorIsLoading = payload;
        }
    }
});

export const { setSensor, setSensorLoading } = sensorSlice.actions;
export default sensorSlice.reducer;