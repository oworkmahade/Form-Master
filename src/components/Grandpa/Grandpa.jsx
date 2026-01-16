import React, { useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext } from "react";

// 👉 Context creation using React Context API

// 👉 createContext() is used to create a React Context object for sharing data across components without prop drilling.

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("gold");

// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(0);
  // normal prop drilling
  const asset = "Diamond Ring";

  return (
    <div className="grandpa text">
      <div>
        <h2>Grandpa</h2>
        <section>Money: {money}</section>
        {/* 👉 Context Provider usage */}
        {/* 👉 Providing data using React Context API */}
        {/* 👉 It provides data ("gold") to all components inside it  */}
        <MoneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="gold">
            <section className=" flex">
              <Dad asset={asset}></Dad>
              <Uncle asset={asset}></Uncle>
              <Aunty asset={asset}></Aunty>
            </section>
          </AssetContext.Provider>
        </MoneyContext.Provider>
      </div>
    </div>
  );
};

export default Grandpa;

/**
 * 01. create a context and export it.
 * 02. add Provider for the context with a value. /tower setting. value could be anything.
 * 03. useContext to access value in the context API.
 */
