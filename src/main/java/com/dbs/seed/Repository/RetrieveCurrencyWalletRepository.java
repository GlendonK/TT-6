package com.dbs.seed.Repository;

import com.dbs.seed.Entity.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RetrieveCurrencyWalletRepository extends JpaRepository<Currency, Integer> {

    List<Currency> findAllByWalletId(int id);

    Currency findByWalletIdAndCurrency(int walletId, String currency);
}