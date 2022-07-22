package com.dbs.seed.Service;

import com.dbs.seed.Entity.Currency;
import com.dbs.seed.Entity.Wallet;
import com.dbs.seed.Repository.RetrieveCurrencyWalletRepository;
import com.dbs.seed.Repository.WalletRepository;
import com.dbs.seed.Request.RetriveCurrencyWalletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RetrieveWalletService {
    @Autowired
    RetrieveCurrencyWalletRepository retrieveCurrencyWalletRepository;
    @Autowired
    WalletRepository walletRepository;

    public List<Currency> retrieveCurrencyWallet(RetriveCurrencyWalletRequest retriveCurrencyWalletRequest) {
        int id = retriveCurrencyWalletRequest.getUserId();

        List<Wallet> listOfWallet = walletRepository.findAllByUserId(id);
        List<Currency> listOfCurrency = new ArrayList<>();
        for (Wallet wallet : listOfWallet) {
            List<Currency> listCurrency2 = retrieveCurrencyWalletRepository.findAllByWalletId(wallet.getId());
            listCurrency2.stream().forEach(currency -> {
                listOfCurrency.add(currency);
            });
        }
        return listOfCurrency;


    }
}


