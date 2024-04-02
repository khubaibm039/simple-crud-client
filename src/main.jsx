import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Components/Users.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:7000/users"),
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);