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
public class ConvertedRate {
private String debitCurrency;
private String creditCurrency;
private BigDecimal amount;
}
