const URL = "";
export function getApi() {
  return;
}

export function login(username, password) {
  // fetch(URL+"/login").then(res => res.json()).then(console.log) // return true or false
  console.log("LOGIN");
  if (1 == 1) {
    return true;
  }
}

export function getExcahngeRates() {
  fetch(URL + "/excahngeRate")
    .then((res) => res.json())
    .then(console.log);
}

export function getBalances() {
  return [
    {
      "id": 1,
      "wallet_id": 1,
      "currency": "SGD",
      "amount": 4294.5,
    },
    {
      "id": 2,
      "wallet_id": 1,
      "currency": "CAD",
      "amount": 5687.65,
    },
  ];
}


export function getCurrencyExchangeRate() {
    return [
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
        },
        {
          "id": 4,
          "base_currency": "SGD",
          "exchange_currency": "HKD",
          "rate": 5.5830
        },
        {
          "id": 5,
          "base_currency": "SGD",
          "exchange_currency": "JPY",
          "rate": 97.5303
        },
        {
          "id": 6,
          "base_currency": "SGD",
          "exchange_currency": "NZD",
          "rate": 1.1612
        },
        {
          "id": 7,
          "base_currency": "SGD",
          "exchange_currency": "NOK",
          "rate": 7.2912
        },
        {
          "id": 8,
          "base_currency": "SGD",
          "exchange_currency": "GBP",
          "rate": 0.5974
        },
        {
          "id": 9,
          "base_currency": "SGD",
          "exchange_currency": "SEK",
          "rate": 7.5168
        },
        {
          "id": 10,
          "base_currency": "SGD",
          "exchange_currency": "THB",
          "rate": 25.7275
        },
        {
          "id": 11,
          "base_currency": "SGD",
          "exchange_currency": "USD",
          "rate": 0.7113
        }
      ]
}