package com.dbs.seed.Exception;

import com.dbs.seed.Enum.ResponseStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
@Slf4j
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
    private ResponseEntity<Object> handleException(Exception ex, WebRequest webRequest) {


        DbsGenericResponse dbsGenericResponse = new DbsGenericResponse();
        dbsGenericResponse.setStatus(ResponseStatus.FAIL);
        dbsGenericResponse.setLocalizedMessage(ex.getLocalizedMessage());
        return new ResponseEntity<Object>(dbsGenericResponse, HttpStatus.INTERNAL_SERVER_ERROR);
//     return null;

    }
}
