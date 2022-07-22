package com.dbs.seed.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "exchange_rate")
public class ExchangeRate {
    @Id

    @Column(name = "id")
    private int id;
    @Column(name = "base_currency")
    @JsonProperty(value = "base_currency")
    private String baseCurrency;
    @Column(name = "exchange_currency")
    @JsonProperty(value = "exchange_currency")
    private String exchangeCurrency;

    @Column(name = "rate")
    @JsonProperty(value = "rate")
    private BigDecimal rate;


}
