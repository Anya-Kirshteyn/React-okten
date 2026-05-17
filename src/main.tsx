import {createRoot} from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {route} from "./routes/route.tsx";
import {RouterProvider} from "react-router-dom";

const queryClient=new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
</QueryClientProvider>)
