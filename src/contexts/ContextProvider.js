import React, { createContext, useContext, useState } from "react";

// Explanation: React context API - Keep track of the state of the navbar.

// Invoking the 'createContext()' and storing inside some function.
const StateContext = createContext();

// Setting up all elements that have dropdown menu.

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

//
export const ContextProvider = ({ children }) => {
  // This open and close the sidebar.
  const [activeMenu, setActiveMenu] = useState(true);
  // This diplay the dropdown menu for the links stored in navbar.
  const [isClicked, setIsClicked] = useState(initialState);

  // In this we wont to open our sidebar when the screen i too small.
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  // handle click:
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

// After all this, wrap your main components with - <StateContext.Provider></StateContext.Provider> in index.js.
