package com.dbs.seed.Service;

import com.dbs.seed.Entity.Currency;
import com.dbs.seed.Entity.Transaction;
import com.dbs.seed.Enum.ResponseStatus;
import com.dbs.seed.Exception.DbsGenericResponse;
import com.dbs.seed.Repository.RetrieveCurrencyWalletRepository;
import com.dbs.seed.Repository.TransactionRepository;
import com.dbs.seed.Request.TransactionRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.math.BigDecimal;

@Service
@Slf4j
public class TransactionService {

    @Autowired
    RetrieveCurrencyWalletRepository retrieveCurrencyWalletRepository;
    @Autowired
    TransactionRepository transactionRepository;

    public DbsGenericResponse<Transaction> submitTransaction(@RequestBody TransactionRequest transactionRequest) {

        Currency debitCurrency = retrieveCurrencyWalletRepository.findByWalletIdAndCurrency(transactionRequest.getWalletId(), transactionRequest.getDebitCurrency());

        BigDecimal debitAccountAmount = debitCurrency.getAmount();
        BigDecimal debitNewbalance = debitAccountAmount.subtract(transactionRequest.getDebitAmount());
        debitCurrency.setAmount(debitNewbalance);
        retrieveCurrencyWalletRepository.save(debitCurrency);
        Currency creditCurrency = retrieveCurrencyWalletRepository.findByWalletIdAndCurrency(transactionRequest.getWalletId(), transactionRequest.getCreditCurrency());
        BigDecimal creditAccountAmount = creditCurrency.getAmount();
        BigDecimal creditNewbalance = debitAccountAmount.add(transactionRequest.getCreditAmount());
        creditCurrency.setAmount(creditNewbalance);
        retrieveCurrencyWalletRepository.save(creditCurrency);

        Transaction transaction = Transaction.builder()
                .walletId(transactionRequest.getWalletId())
                .debit_Id(debitCurrency.getId())
                .debitCurrency(transactionRequest.getDebitCurrency())
                .debitAmount(transactionRequest.getDebitAmount())
                .creditId(creditCurrency.getId())
                .creditCurrency(transactionRequest.getCreditCurrency())
                .creditAmount(transactionRequest.getCreditAmount())
                .description(transactionRequest.getDescription())
                .createdBy("SYS")
                .updatedBy("SYS").build();
        transactionRepository.save(transaction);
        log.info("transaction saved successfully");

        return DbsGenericResponse.<Transaction>builder().data(transaction).status(ResponseStatus.SUCCESS).build();
    }
}


