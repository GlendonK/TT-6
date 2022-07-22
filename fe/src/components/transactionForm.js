import { data } from 'autoprefixer'
import {useState,useEffect} from 'react'

const TransactionForm = ({userID,walletID}) => {

    const [creditCurrency, setCreditCurrency] =useState('')
    const [debitAmount , setDebitAmount] = useState(0)
    const [creditAmount , setCreditAmount] = useState(0)
    const [description, setDescription] = useState('')
    const [debitCurrency, setDebitCurrency] =useState('')
    const [debitBalance, setDebitBalance] =useState(0)
    const [creditBalance, setCreditBalance] = useState(0)
    const [currenciesAvailable,setCurrenciesAvailable] = useState({})



// useEffect(()=>{
    
//     if (debitAmount!==0 && creditCurrency!=="" && debitCurrency!==0){
//         const exchangeRates = getExchangeRate()
//         console.log(exchangeRates)
//         const credit_amount_calculated = calculateCreditAmount(exchangeRates)
//         setCreditAmount(credit_amount_calculated)


//     }
    

// },[debitAmount,creditCurrency,debitCurrency])


useEffect(()=>{
    const getCurrenciesAvailable = async () =>{
        const currencies = await getCurrencies()
    }
    



},[])






const addTransaction = async (walletID,debitAmount,creditAmount,creditCurrency,debitCurrency)=>{

}


const updateBalance = async (userID,walletID,debitCurrency,creditCurrency,debitBalance,creditBalance)=>{


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

const getCurrencies = async(walletID,userID) =>{
    
    const response = await fetch('http://a247-101-78-68-212.ap.ngrok.io/seed/retrieve/currencyWallet').catch(error =>{
    const data = response.json()
    console.log(data)
    })
    }



const getWallet = async(userID) => {

}


    
const onSubmit=((e)=> {
e.preventDefault();
addTransaction(walletID,debitAmount,creditAmount,debitCurrency,debitCurrency);
updateBalance(userID,walletID,debitCurrency,creditCurrency,debitBalance,creditBalance);
setCreditCurrency('');
setDebitAmount(0);
setCreditAmount(0);
setDescription('');
setDebitCurrency('');
setDebitBalance(0);
setCreditBalance(0);

}) 




  return (
    <form className="" onSubmit={onSubmit}>
        <div className="">
            <label htmlFor='debit_currency'>Enter Debit Currency: </label>
            <select>
                {Object.keys(currenciesAvailable).map(element => <option key={element} value={currenciesAvailable[element]}>{element}</option>)}
            </select>

            <input name='debit_currency' value="SGD" onChange={(e)=>setDebitCurrency(e.target.value)}></input>
                
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
        <input type='submit' value='Save Transaction' className="btn btn-block">
        </input>
    </form>
  )
}

export default TransactionForm