import { useState } from "react";
import { useEffect } from "react";
import { getBalances } from "../../src/api/api.jsx";
import { BalancesTable } from "../components/BalancesTable";
import { getCurrencyExchangeRate } from "../api/api";

export function CureencyExchangeRate() {
  let data = getCurrencyExchangeRate();

  const [rates, setRates] = useState([
    {
      id: 1,
      base_currency: "SGD",
      exchange_currency: "CAD",
      rate: 0.9255,
    },
  ]);

  useEffect(()=>{setRates(data)},[])

  const [amount, setAmount] = useState("0");
  const changeAmt = (e) => {
    console.log(e);
    setAmount(e);
  };
  const [curency, setCurrency] = useState("SGD");
  const changeCurrency = (e) => {
    // console.log(e);
    setCurrency(e);
  };

  useEffect(()=>{
    data.forEach((each)=>{
        if (each.exchange_currency == curency) {
            console.log(curency)
            console.log(each.rate)
            let money = each.rate * parseFloat(amount)  
            setForeign(money)
        } 
            })

  },[curency, amount])

  const [foreign, setForeign] = useState("0")
  const changeForeign = (e) => {
    setForeign(e)
  }

  return (
    <div className="flex flex-col bg-cyan-300 justify-evenly">
      <div className="flex flex-row">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Amount
          </label>
          <input
            type="text"
            id="first_name"
            className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            value={amount}
            onChange={(e) => {
              changeAmt(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Currency
          </label>
          <input
            type="text"
            id="first_name"
            className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            value={curency}
            onChange={(e) => {
              changeCurrency(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Rate
          </label>
          <input
            type="text"
            id="first_name"
            className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            value={foreign}
            onChange={(e) => {
                changeForeign(e.target.value);
            }}
          />
        </div>

      </div>
    </div>
  );
}
