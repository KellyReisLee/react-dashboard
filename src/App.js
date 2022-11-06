import React, { useEffect } from "react";

// From reactDOM:
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
//  The tooltip component is used to display a popup that contains some information or message when you hover, click, focus, or touch an element.

import "./App.css";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    activeMenu,
    setThemeSettings,
    themeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  // left Sidebar functionallity:

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-grey-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "10000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Creating a left sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className=" w-0 dark:bg-secondary-dark-bg ">
              {" "}
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-secondary-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
                : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
            }
          >
            {/* Navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {/* Shows themeSetting if themeSettings if this is true */}
              {themeSettings && <ThemeSettings />}
              {/* Thie create all links for another pages. */}
              <Routes>
                {/* This is the Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />

                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
