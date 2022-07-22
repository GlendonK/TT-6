### Some React App
```bash 
$ npm run start
```


FE goals
- login page 
  - api
    - POST login(username, password) => returns true/false
- dashboard page
  - show currency rates  
    - GET getExcahngeRates() => returns all the excahnge rates
  - show wallet balance 
    - GET wallet(username/user_id) => list of wallets
  - transaction form 
    - POST transaction(wallet_id, debit_currency, debit_amount, credit_currency, credit_amount, description)

POST login(username, password) => returns { "id": 1, "username": "user101", "password": "123456", "name": "Jacky" }
GET getExcahngeRates() => returns all the excahnge rates
GET getBalance(username) => list of wallets : { "id": 1, "user_id": 1, "name": "Multi-Currency Account" }
POST transaction(wallet_id, debit_currency, debit_amount, credit_currency, credit_amount, description)