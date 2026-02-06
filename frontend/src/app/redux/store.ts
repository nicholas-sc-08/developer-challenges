import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "@/app/redux/slices/userSlice";
import monitoringReducer from "@/app/redux/slices/monitoringSlice";
import machineReducer from "@/app/redux/slices/machineSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        monitoringPoint: monitoringReducer,
        machine: machineReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();