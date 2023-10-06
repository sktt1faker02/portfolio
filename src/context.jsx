import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [showThankyou, setShowThankyou] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [isThankyouVisible, setIsThankyouVisible] = useState(false);

  const handleNavActive = () => {
    setIsNavActive(!isNavActive);
  };

  const handleShowThankyou = () => {
    setShowThankyou(!showThankyou);
    setIsThankyouVisible(!isThankyouVisible); // Show the "Thank you" message
  };

  const handleShowLoading = () => {
    setShowLoading(!showLoading);
  };

  const handleHideLoading = () => {
    setShowLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        isNavActive,
        handleNavActive,
        showThankyou,
        handleShowThankyou,
        showLoading,
        handleShowLoading,
        handleHideLoading,
        isThankyouVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
