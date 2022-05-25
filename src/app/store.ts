import { configureStore } from "@reduxjs/toolkit";
import  reservationReduecer  from "../features/reservationSlice";
import  customerReduecer  from "../features/customerSlice";


export const store = configureStore({
    reducer: {
        reservations: reservationReduecer,
        customer: customerReduecer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch