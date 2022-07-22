package com.dbs.seed.Request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateRequest extends BaseRequest {
    private String name;
    private String job;
}
