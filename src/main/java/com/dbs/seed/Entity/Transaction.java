package com.dbs.seed.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "wallet_id")
    @JsonProperty(value = "wallet_id")
    private int walletId;

    @Column(name = "debit_id")
    @JsonProperty(value = "debit_id")
    private int debit_Id;
    @Column(name = "debit_currency")
    @JsonProperty(value = "debit_currency")
    private String debitCurrency;
    @Column(name = "debit_amount")
    @JsonProperty(value = "debit_amount")
    private BigDecimal debitAmount;
    @Column(name = "credit_id")
    @JsonProperty(value = "credit_id")
    private int creditId;
    @Column(name = "credit_currency")
    @JsonProperty(value = "credit_currency")
    private String creditCurrency;
    @Column(name = "credit_amount")
    @JsonProperty(value = "credit_amount")
    private BigDecimal creditAmount;
    @Column(name = "description")
    @JsonProperty(value = "description")
    private String description;
    @Column(name = "create_at")
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp createAt;

    @Column(name = "created_by")
    @JsonProperty(value = "created_by")
    private String createdBy;


    @Column(name = "updated_at")
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp updatedAt;
    @Column(name = "updated_by")
    @JsonProperty(value = "updated_by")
    private String updatedBy;


}
