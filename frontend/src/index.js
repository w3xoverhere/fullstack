import React from "react";
import "./static/css/style.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from "./components/routes/App";
import ErrorPage from "./components/routes/ErrorPage";
import MainRoute from "./components/routes/MainRoute";
import CatalogRoute from "./components/routes/CatalogRoute";
import ProductDetailRoute from "./components/UI/ProductDetailRoute";
import ProfileRoute from "./components/routes/ProfileRoute";
import MyCartRoute from "./components/routes/MyCartRoute";
import Authentication from "./components/routes/Authentication";
import SettingsRoute from "./components/routes/SettingsRoute";
import ReactDOMClient from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./store/store";

const JSXRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<App/>} path="/" errorElement={<ErrorPage/>}>
        <Route element={<MainRoute/>} path="/"/>
        <Route element={<Authentication/>} path="/auth/"/>
        <Route element={<CatalogRoute/>} path="/catalog/"/>
        <Route element={<ProductDetailRoute />} path="/catalog/:product_id"/>
        <Route element={<ProfileRoute/>} path="/profile/"/>
        <Route element={<MyCartRoute/>} path="/my-cart/"/>
        <Route element={<SettingsRoute/>} path="/settings/"/>
    </Route>))

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

export const rerender = () => {
    root.render(
        <Provider store={store}>
            <RouterProvider router={JSXRouter}/>
        </Provider>
    );
}

rerender()