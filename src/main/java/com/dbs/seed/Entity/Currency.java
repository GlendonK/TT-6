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
@Table(name = "currency")
public class Currency {
    @Id

    @Column(name = "id")
    private int id;
    @Column(name = "wallet_id")
    @JsonProperty(value = "wallet_id")
    private int walletId;
    @Column(name = "currency")
    @JsonProperty(value = "currency")
    private String currency;

    @Column(name = "amount")
    @JsonProperty(value = "amount")
    private BigDecimal amount;


}
