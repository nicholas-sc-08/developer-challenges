import { InitialSensorState, SensorState } from "@/app/types/sensor";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialSensorState = {
    items: [],
    isLoading: false
}

const sensorSlice = createSlice({
    name: "sensor",
    initialState,
    reducers: {
        setSensor: (state, { payload }: PayloadAction<{items: SensorState[], isLoading: boolean}>) => {
            state.items = payload.items;
            state.isLoading = payload.isLoading;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        }
    }
});

export const { setSensor, setLoading } = sensorSlice.actions;
export default sensorSlice.reducer;