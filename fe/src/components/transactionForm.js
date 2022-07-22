import {useState} from 'react'

const transactionForm = ({userID,walletID}) => {

    const [creditCurrency, setCreditCurrency] =useState('')
    const [debitAmount , setDebitAmount] = useState(0)
    const [creditAmount , setCreditAmount] = useState(0)
    const [description, setDescription] = useState('')
    const [debitCurrency, setDebitCurrency] =useState('')
    const [balance, setBalance] =useState(0)
    
const onSubmit=((e)=> {
e.preventDefault()
addTransaction()

}) 




  return (
    <form className="" onSubmit={onSubmit}>
        <div className="">
            <label htmlFor='debit_currency'>Enter Debit Currency</label>
            <input name='debit_currency' value={debitCurrency} onChange={(e)=>setDebitCurrency(e.target.value)}></input>
                
        </div>
        <div className="">
            <label>Debit Amount</label>
            <input type='text' placeholder="Enter the amount" value={debitAmount} onChange={(e)=>setDebitAmount(e.target.value)}></input>
        </div>
        <div className="">
            <label>Description</label>
            <input type='text' placeholder="Enter the description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        </div>
        <div className="">
            <label htmlFor='credit_currency'>Enter Credit Currency</label>
            <label name='credit_currency' value={creditCurrency} onChange={(e)=>setCreditCurrency(e.target.value)}></label>
        
        <div className="">
            <label>Credit Amount</label>
            <input type='text' placeholder="Enter the amount" value={creditAmount} onChange={(e)=>setCreditAmount(e.target.value)}></input>
        </div>

        </div>
        <input type='submit' value='Save Transaction' className="btn btn-block">
        </input>
    </form>
  )
}

export default transactionForm