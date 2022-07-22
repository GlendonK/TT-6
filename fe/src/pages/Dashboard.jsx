
import { Balances } from "../components/Balances.jsx";

import { CureencyExchangeRate } from "../components/CurrencyExchangeRate.jsx";
import TransactionForm from "../components/TransactionForm.js";

export function Dashboard() {
    return (
        <div className="flex flex-col h-screen bg-cyan-300 justify-evenly w-screen">
      
        <div className="flex flex-col">
          <Balances/> 
          <CureencyExchangeRate/>
          <>Transacition Form</>
          <TransactionForm></TransactionForm>
        </div>
      </div>
    )
}