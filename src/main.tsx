import {createRoot} from 'react-dom/client'
import './index.css'

import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.tsx";

interface IUser {
    id:number;
    name: string;
}

type userSliceType = {
    users:IUser[]
}

const initialState:userSliceType={users:[]};
export const userSlice = createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{
        loadUsers:(state,action:PayloadAction<IUser[]>)=>{
            state.users=action.payload  }}}
)
export const userSliceActions={
    ...userSlice.actions
}
const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer
    }
})
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
