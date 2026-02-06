import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import monitoringReducer from "./slices/monitoringSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducer,
        monitoringPoint: monitoringReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();