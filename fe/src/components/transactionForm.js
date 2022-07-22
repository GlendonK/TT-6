import { data } from 'autoprefixer'
import {useState,useEffect} from 'react'

const TransactionForm = ({userID,walletID}) => {

    const [creditCurrency, setCreditCurrency] =useState('');
    const [debitAmount , setDebitAmount] = useState(0);
    const [creditAmount , setCreditAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [debitCurrency, setDebitCurrency] =useState('');
    const [currenciesAvailable,setCurrenciesAvailable] = useState({});



// useEffect(()=>{
    
//     if (creditCurrency!==""){
//         console.log("test")
//         // const exchangeRates = getExchangeRate()
//         // console.log(exchangeRates)
//         // const credit_amount_calculated = calculateCreditAmount(exchangeRates)
//         // setCreditAmount(credit_amount_calculated)


//     }
    

// },[debitAmount,creditCurrency,debitCurrency])


useEffect(()=> {
    const getCurrenciesAvailable = async () =>{
        await fetch("https://a247-101-78-68-212.ap.ngrok.io/seed/retrieve/currencyWallet", {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
            userId: 1,
            }),
            })
            .then((res) => res.json())
            .then((d) => {
            data = d.data;
            
            

            })
            const filteredByWalletID = data.filter((element)=>element.wallet_id===1)
            const currencies = filteredByWalletID.map(element=>(element.currency))
            setCurrenciesAvailable(currencies)
            console.log(currencies)
    



}


getCurrenciesAvailable()
},[])








const addTransaction = async (walletID,debitAmount,creditAmount,creditCurrency,debitCurrency)=>{

}


// const getExchangeRate = async(creditCurrency,debitCurrency)=>{
// const response = await fetch('https://foo-task-app.herokuapp.com/currency_ex_rates').catch(error => {
//     console.log(error);
// });
     
// const data = await response.json()
// return data

// }



// const calculateCreditAmount = (exchangeRates) => {
//     console.log(exchangeRates)
//     // exchangeRates.forEach(element => {
//     //     if (element["base_currency"]===debitCurrency && element["creditCurrency"]===creditCurrency){
//     //         return element["rate"]
//     //     }

        
//     // });
// }



const getWallet = async(userID) => {

}


    
const onSubmit=((e)=> {
    console.log('button works')
e.preventDefault();
addTransaction(walletID,debitAmount,creditAmount,debitCurrency,debitCurrency);
setCreditCurrency('');
setDebitAmount(0);
setCreditAmount(0);
setDescription('');
setDebitCurrency('');
}) 




  return (
    <form className="" onSubmit={onSubmit}>
        <div className="">
            <label htmlFor='debit_currency'>Enter Debit Currency: </label>
            <select onChange={(e)=>setDebitCurrency(e.target.value)}>
                {currenciesAvailable.map(list => <option key={list} value={list}>{list}</option>)}
            </select>

            {/* <input name='debit_currency' value="SGD" onChange={(e)=>setDebitCurrency(e.target.value)}></input> */}
                
        </div>
        <div className="">
            <label>Debit Amount: </label>
            <input type='text' placeholder="Enter the amount" value={debitAmount} onChange={(e)=>setDebitAmount(e.target.value)}></input>
        </div>
        <div className="">
            <label>Description: </label>
            <input type='text' placeholder="Enter the description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        </div>
        <div className="">
            <label htmlFor='credit_currency'>Enter Credit Currency: </label>
            <input name='credit_currency' value={creditCurrency} onChange={(e)=>setCreditCurrency(e.target.value)}></input>
        
        <div className="">
            <label>Credit Amount</label>
            <label type='text' placeholder="Enter the amount" value={creditAmount} onChange={(e)=>setCreditAmount(e.target.value)}></label>
        </div>

        </div>
        <input type='submit' value='Save Transaction' style={{
  display: "inlineBlock",
  background: "#000",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "5px",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "15px",
  fontFamily: "inherit",
}}>
        </input>
    </form>
  )
}

export default TransactionForm