import React from "react";
import menuItems from "./configuration.json";
import "./Menu.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
// import Home from "../Home";
// import About from "../About";
import { Contentact } from "../Contentact";
import UseReducer from "../UseReducer";
import UseCallback from "../UseCallback";
import UseMemo from "../UseMemo";
// import CustomHook from "../CustomHook";
// import Hoc from "../Hoc";
import UseTransition from "../UseTransition";
import Redux from "../Redux";
import ReduxSaga from "../ReduxSaga";
import Orders from "../Orders";
import Profile from "../Profile";
const Home = lazy(() => import("../Home"));
const About = lazy(() => import("../About"));
const CustomHook = lazy(() => import("../CustomHook"));
const Hoc = lazy(() => import("../Hoc"));

const Menu = () => {
  return (
    <Suspense fallback="loading">
      <div>
        <div className="menu-items">
          {menuItems?.map((item, index) => {
            return (
              <Link key={`list_${index}`} to={item.link}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contentact />}></Route>
          <Route path="usereducer" element={<UseReducer />}></Route>
          <Route path="usecallback" element={<UseCallback />}></Route>
          <Route path="usememo" element={<UseMemo />}></Route>
          <Route path="customhook" element={<CustomHook />}></Route>
          <Route path="usetransition" element={<UseTransition />}></Route>
          <Route path="hoc" element={<Hoc />}></Route>
          <Route path="redux" element={<Redux />}></Route>
          <Route path="reduxsaga" element={<ReduxSaga />}>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>

          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default Menu;
