const URL = "";
export function getApi() {
  return;
}

export function login(username, password) {
  fetch("https://foo-task-app.herokuapp.com/users/login", {
    method: 'POST',
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(
        {
            username:"user104",
            password:"Apple@123"
           }
    )
  }).then(res => res.json()).then(console.log) // return true or false
  
}

export function getExcahngeRates() {
  fetch(URL + "/excahngeRate")
    .then((res) => res.json())
    .then(console.log);
}

export async function getBalances() {
    return [
        {
            "id": 1,
            "wallet_id": 1,
            "currency": "SGD",
            "amount": 4294.50
          },
          {
            "id": 2,
            "wallet_id": 1,
            "currency": "CAD",
            "amount": 5687.65
          },
          {
            "id": 3,
            "wallet_id": 1,
            "currency": "CNH",
            "amount": 6063.14
          },
          {
            "id": 4,
            "wallet_id": 1,
            "currency": "EUR",
            "amount": 8089.82
          },
          {
            "id": 5,
            "wallet_id": 1,
            "currency": "HKD",
            "amount": 7862.36
          },
          {
            "id": 6,
            "wallet_id": 1,
            "currency": "JPY",
            "amount": 5759.15
          },
          {
            "id": 7,
            "wallet_id": 1,
            "currency": "NZD",
            "amount": 6943.26
          },
          {
            "id": 8,
            "wallet_id": 1,
            "currency": "NOK",
            "amount": 4038.10
          },
          {
            "id": 9,
            "wallet_id": 1,
            "currency": "GBP",
            "amount": 8287.33
          },
          {
            "id": 10,
            "wallet_id": 1,
            "currency": "SEK",
            "amount": 5126.40
          },
          {
            "id": 11,
            "wallet_id": 1,
            "currency": "THB",
            "amount": 147.62
          },
          {
            "id": 12,
            "wallet_id": 1,
            "currency": "USD",
            "amount": 7331.77
          },
          {
            "id": 13,
            "wallet_id": 2,
            "currency": "SGD",
            "amount": 485.19
          },
          {
            "id": 14,
            "wallet_id": 2,
            "currency": "CAD",
            "amount": 2634.58
          },
          {
            "id": 15,
            "wallet_id": 2,
            "currency": "CNH",
            "amount": 3893.29
          },
          {
            "id": 16,
            "wallet_id": 2,
            "currency": "EUR",
            "amount": 3887.15
          },
          {
            "id": 17,
            "wallet_id": 2,
            "currency": "HKD",
            "amount": 4065.34
          },
          {
            "id": 18,
            "wallet_id": 2,
            "currency": "JPY",
            "amount": 1702.47
          },
          {
            "id": 19,
            "wallet_id": 2,
            "currency": "NZD",
            "amount": 3299.38
          },
          {
            "id": 20,
            "wallet_id": 2,
            "currency": "NOK",
            "amount": 7681.32
          },
          {
            "id": 21,
            "wallet_id": 2,
            "currency": "GBP",
            "amount": 3720.37
          },
          {
            "id": 22,
            "wallet_id": 2,
            "currency": "SEK",
            "amount": 4511.50
          },
          {
            "id": 23,
            "wallet_id": 2,
            "currency": "THB",
            "amount": 6216.60
          },
          {
            "id": 24,
            "wallet_id": 2,
            "currency": "USD",
            "amount": 9103.66
          }
    ];
//   let data = [];
//   await fetch("https://a247-101-78-68-212.ap.ngrok.io/seed/retrieve/currencyWallet", {
//     method: "POST",
//     headers: { Accept: "application/json", "Content-Type": "application/json" },
//     body: JSON.stringify({
//       userId: 1,
//     }),
//   })
//     .then((res) => res.json())
//     .then((d) => {
//       console.log(d.data);
//       data = d.data;
//     });

//   return await data;
}

export function getCurrencyExchangeRate() {
  return [
    {
      id: 1,
      base_currency: "SGD",
      exchange_currency: "CAD",
      rate: 0.9255,
    },
    {
      id: 2,
      base_currency: "SGD",
      exchange_currency: "CNH",
      rate: 4.7868,
    },
    {
      id: 3,
      base_currency: "SGD",
      exchange_currency: "EUR",
      rate: 0.7086,
    },
    {
      id: 4,
      base_currency: "SGD",
      exchange_currency: "HKD",
      rate: 5.583,
    },
    {
      id: 5,
      base_currency: "SGD",
      exchange_currency: "JPY",
      rate: 97.5303,
    },
    {
      id: 6,
      base_currency: "SGD",
      exchange_currency: "NZD",
      rate: 1.1612,
    },
    {
      id: 7,
      base_currency: "SGD",
      exchange_currency: "NOK",
      rate: 7.2912,
    },
    {
      id: 8,
      base_currency: "SGD",
      exchange_currency: "GBP",
      rate: 0.5974,
    },
    {
      id: 9,
      base_currency: "SGD",
      exchange_currency: "SEK",
      rate: 7.5168,
    },
    {
      id: 10,
      base_currency: "SGD",
      exchange_currency: "THB",
      rate: 25.7275,
    },
    {
      id: 11,
      base_currency: "SGD",
      exchange_currency: "USD",
      rate: 0.7113,
    },
  ];
}


export async function sendTransaction(debitCurrency, creditCurrency, debitAmount, creditAmount, description, walletId) {
    let res 
    await fetch("https://a247-101-78-68-212.ap.ngrok.io/seed/transaction", {
        method: 'POST',
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                "debitCurrency":debitCurrency,
                "creditCurrency":creditCurrency,
                "debitAmount":debitAmount,
                "creditAmount":creditAmount,
                "description":description,
                "walletId":walletId
                }
        )
    }).then(response => response.json()).then((r)=>{
        console.log(r)
        res = r.status})

    return res
}

