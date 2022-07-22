package com.dbs.seed.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionRequest {
    private int walletId;
    private String debitCurrency;
    private BigDecimal debitAmount;
    private String creditCurrency;
    private BigDecimal creditAmount;
    private String description;
}
