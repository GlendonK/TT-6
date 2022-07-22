import React from 'react'

function Exchange() {
  
  const [data, setData] = React.useState([
    {
    "id": 1,
    "base_currency": "SGD",
    "exchange_currency": "CAD",
    "rate": 0.9255
    },
    {
    "id": 2,
    "base_currency": "SGD",
    "exchange_currency": "CNH",
    "rate": 4.7868
    },
    {
    "id": 3,
    "base_currency": "SGD",
    "exchange_currency": "EUR",
    "rate": 0.7086
    }])
  
    function handleChange(event) {
        setinput(event.target.value)
        setrate(even)
    }

    const [input, setinput] = React.useState()
    const [convertval, setconvertval] = React.useState()
    const [chosenrate, setrate] = React.useState()


    return (
    <div>
        <h1>SGD to foreign exchange calculator</h1>
        <label>
            SGD Value:
            <input type ="text" name="name" onChange={handleChange} val={input}/>
        </label>
        <p>Select your currency: </p>
        <div>
            <select>
                <option value="">Choose Currency</option>
                {data.map(item=>
                    <option value="" onChange={handleChange}>
                        {item.exchange_currency} rate ={item.rate}
                    </option>
                    )}
            </select>
        </div>

        <p>Converted amount: {convertval} </p>
    </div>
  )
}

export default Exchange
