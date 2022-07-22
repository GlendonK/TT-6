package com.dbs.seed.Exception;

import com.dbs.seed.Enum.ResponseStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DbsGenericResponse<T> {
    private T data;
    private ResponseStatus status;
    private String localizedMessage;


}

