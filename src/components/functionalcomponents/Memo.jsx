import React, { useState, useMemo } from "react";
const Memo = () => {
    const [number, updateNumber] = useState(0);
    const [dark, updateTheme] = useState(false);
    const doubleNumber =useMemo(()=>{
       return doubleNumberSlow(number)
    },[number])
    console.log(doubleNumber)
    function doubleNumberSlow(num) {
        console.log("Is it calling");
        for (let i = 0; i < 10000; i++) {
            return num * 2;
        }
    }
    const theme = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        };
    }, [dark]);
    return (
        <div>
            <h1>This is a Dangerous Hook which is called useMemo. </h1>
            <input type="number" value={number} onChange={(event) => updateNumber(event.target.value)} />
            <button onClick={() => updateTheme((dark) => !dark)}> Change Theme</button>
            <h2 style={theme}>The Doubled Number is {doubleNumber}</h2>
        </div>
    );
};
export default Memo;
