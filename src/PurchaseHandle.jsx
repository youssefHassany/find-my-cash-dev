import React from 'react'
import InsertCash from "./InsertCash";
import PurchasesMenu from "./PurchasesMenu";
import { useState } from "react";

const PurchaseHandle = () => {

    const [cash, setCash] = useState(
        localStorage.getItem("cash") ? Number(localStorage.getItem("cash")) : ""
    );

    const handleChange = (e) => {
        setCash(e.target.value);
    };

    const saveToStorage = (currentCash) => {
        setCash(currentCash);
        localStorage.setItem("cash", currentCash);
        console.log(currentCash);
    };

    const setCashValue = (e) => {
        e.preventDefault();
        const currentCash = +cash;
        saveToStorage(currentCash);
    };

    const addToCash = () => {
        let currentCash = Number(localStorage.getItem("cash"));
        currentCash += +cash;
        saveToStorage(currentCash);
    };

    const resetCash = () => {
        const currentCash = 0;
        saveToStorage(currentCash);
    };

    
    
  return (
    <section>
        <InsertCash
            cash={cash}
            handleChange={handleChange}
            setCashValue={setCashValue}
            addToCash={addToCash}
            resetCash={resetCash}
        />
        <PurchasesMenu />
    </section>
  )
}

export default PurchaseHandle