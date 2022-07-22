package com.dbs.seed.Request;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class UserRequest {
    @NotNull
    private String age;
    @NotNull
    private String name;
}
