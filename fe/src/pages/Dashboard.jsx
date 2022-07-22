import { Balances } from "../components/Balances.jsx";

import { CureencyExchangeRate } from "../components/CurrencyExchangeRate.jsx";
import { sendTransaction } from "../api/api.jsx";
import { useState } from "react";
import { useEffect } from "react";

export function Dashboard() {
    const [t, setT] = useState('')
    const transact = async () => {
        setT(await sendTransaction("SGD", "JPY", 400, 39012.12, "for honey moon", 1))

    }
    useEffect(()=>{
        transact()
        console.log("")

    },[])
  return (
    <div className="flex flex-col h-screen bg-cyan-300 justify-evenly w-screen">
      <div className="flex flex-col">
        <Balances />
        <CureencyExchangeRate />
        <>Transacition</>
        {/* <button> Transact </button> */}
        {
            t
        }
      </div>
    </div>
  );
}
