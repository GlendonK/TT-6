import { useEffect, useState } from "react";
import { getBalances } from "../api/api";

export function BalancesTable() {
  useEffect(() => {}, []);
  const [d, setD] = useState([
    {
      "id": 0,
      "wallet_id": 0,
      "currency": "SGD",
      "amount": 0,
    }
  ]);

  const api = async () => {
        setD(await getBalances())
  }

  useEffect(()=>{
        api()
        
    return 
  },[])
  return (
    <div className="bg-white p-2">
      <h1 className="text-6xl "> Wallet Balance</h1>
      <table className="table-fixed w-full">
        <thead>
          <tr className="border-black border-2">
            <th>ID</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {d.map((val, key) => {
            return (
              <tr className="border-black border-2" key={key}>
                <td className="">{val.id}</td>
                <td className="">{val.currency}</td>
                <td className="">{val.amount}</td>
              </tr>
            );
          })}

          {/* {d.forEach((each)=>{
            return (
                <tr className="border-black border-2" >
                  <td className="">{each.id}</td>
                  <td className="">{each.currency}</td>
                  <td className="">{each.amount}</td>
                </tr>
              );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
