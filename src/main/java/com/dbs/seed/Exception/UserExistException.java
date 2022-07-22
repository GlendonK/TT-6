package com.dbs.seed.Exception;

public class UserExistException extends  RuntimeException{
    public UserExistException(String msg) {
        super(msg);
    }
}
