import { useState } from "react";
import { useEffect } from "react";
import { getBalances } from "../../src/api/api.jsx";
import { BalancesTable } from "../components/BalancesTable";


export function Balances() {
  return (
    <div className="flex flex-col bg-cyan-300 justify-evenly w-screen">
      <div className="flex flex-col">
        <BalancesTable></BalancesTable>
      </div>
    </div>
  );
}
