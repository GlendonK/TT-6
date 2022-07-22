package com.dbs.seed.Controller;

import com.dbs.seed.Entity.Currency;
import com.dbs.seed.Entity.ExchangeRate;
import com.dbs.seed.Entity.Transaction;
import com.dbs.seed.Exception.DbsGenericResponse;
import com.dbs.seed.Request.ConvertedRate;
import com.dbs.seed.Request.RetriveCurrencyWalletRequest;
import com.dbs.seed.Request.TransactionRequest;
import com.dbs.seed.Response.ConvertedRateResponse;
import com.dbs.seed.Service.ExchangeRateService;
import com.dbs.seed.Service.RetrieveWalletService;
import com.dbs.seed.Service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "seed")
@Slf4j
public class SeedController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    RetrieveWalletService retrieveWalletService;
    @Autowired
    ExchangeRateService exchangeRateService;

    @PostMapping(value = "/retrieve/currencyWallet")
    public DbsGenericResponse<List<Currency>> retrieveCurrencyWallet(@RequestBody RetriveCurrencyWalletRequest retriveCurrencyWalletRequest) {

        List<Currency> response = retrieveWalletService.retrieveCurrencyWallet(retriveCurrencyWalletRequest);

        DbsGenericResponse<List<Currency>> dbsGenericResponse = new DbsGenericResponse<>();
        dbsGenericResponse.setData(response);
        dbsGenericResponse.setStatus(com.dbs.seed.Enum.ResponseStatus.SUCCESS);
        return dbsGenericResponse;


    }

    @PostMapping(value = "/calculate/convertionRate")
    public DbsGenericResponse<ConvertedRateResponse> retrieveCurrencyWallet(@RequestBody ConvertedRate convertedRate) {
        ExchangeRate exchangeRateDebit = exchangeRateService.getExchangeRate(convertedRate.getDebitCurrency());
        ExchangeRate exchangeRatecredit = exchangeRateService.getExchangeRate(convertedRate.getCreditCurrency());
        BigDecimal debit = exchangeRateDebit.getRate();
        BigDecimal credit = exchangeRatecredit.getRate();
        BigDecimal valueConverted = credit.divide(debit).multiply(convertedRate.getAmount());
        DbsGenericResponse<ConvertedRateResponse> dbsGenericResponse = new DbsGenericResponse<>();

        ConvertedRateResponse convertedRateResponse = ConvertedRateResponse.builder().amount(valueConverted).build();
        dbsGenericResponse.setData(convertedRateResponse);
        dbsGenericResponse.setStatus(com.dbs.seed.Enum.ResponseStatus.SUCCESS);
        return dbsGenericResponse;


    }

    @PostMapping(value = "/transaction")
    public DbsGenericResponse<Transaction> makeTransaction(@RequestBody TransactionRequest transactionRequest) {
        return transactionService.submitTransaction(transactionRequest);


    }
}