package com.dbs.seed.Service;

import com.dbs.seed.Entity.ExchangeRate;
import com.dbs.seed.Repository.ExchangeRateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class ExchangeRateService {
    @Autowired
    ExchangeRateRepository exchangeRateRepository;


    public ExchangeRate getExchangeRate(String exchangeRate) {
        if (!(exchangeRate.equals("SGD"))) {
            Optional<ExchangeRate> optionalExchangeRate = exchangeRateRepository.findByExchangeCurrency(exchangeRate);
            if (optionalExchangeRate.isPresent()) {
                return optionalExchangeRate.get();
            }
        } else {
            return ExchangeRate.builder().rate(BigDecimal.valueOf(1)).build();
        }
        throw new RuntimeException("Exchange Rate Not Available");
    }

}

