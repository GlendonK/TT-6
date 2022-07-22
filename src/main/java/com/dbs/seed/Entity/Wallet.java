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

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wallet")
public class Wallet {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "user_id")
    @JsonProperty(value = "user_id")
    private int userId;
    @Column(name = "name")
    @JsonProperty(value = "name")
    private String name;


}
