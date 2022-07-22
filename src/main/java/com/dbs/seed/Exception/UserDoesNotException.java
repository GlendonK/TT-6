package com.dbs.seed.Exception;

public class UserDoesNotException extends  RuntimeException{
    public UserDoesNotException(String msg) {
        super(msg);
    }
}
