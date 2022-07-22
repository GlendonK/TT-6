package com.dbs.seed.Controller;

import com.dbs.seed.Entity.Currency;
import com.dbs.seed.Exception.DbsGenericResponse;
import com.dbs.seed.Request.BaseRequest;
import com.dbs.seed.Request.CreateRequest;
import com.dbs.seed.Request.RetriveCurrencyWalletRequest;
import com.dbs.seed.Response.Response;
import com.dbs.seed.Response.Response2;
import com.dbs.seed.Service.BaseService;
import com.dbs.seed.Service.RetrieveWalletService;
import com.dbs.seed.Service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "seed")
@Slf4j
public class GenericController {
    @Autowired
    BaseService<CreateRequest, Response2> createUserBaseService;

    @Autowired
    BaseService<BaseRequest, Response> getUserService;
    @Autowired
    private UserService userService;
    RestTemplate restTemplate = new RestTemplate();
    @Autowired
    RetrieveWalletService retrieveWalletService;

    //
    @PostMapping(value = "/retrieve/currencyWallet")
    public DbsGenericResponse<List<Currency>> retrieveCurrencyWallet(@RequestBody RetriveCurrencyWalletRequest retriveCurrencyWalletRequest) {

//throw new UserExistException("UserNotFound");

        List<Currency> response = retrieveWalletService.retrieveCurrencyWallet(retriveCurrencyWalletRequest);

        DbsGenericResponse<List<Currency>> dbsGenericResponse = new DbsGenericResponse<>();
        dbsGenericResponse.setData(response);
        dbsGenericResponse.setStatus(com.dbs.seed.Enum.ResponseStatus.SUCCESS);
        return dbsGenericResponse;


    }
//
//    @GetMapping(value = "/user/{id}")
//    public DbsGenericResponse<User> getUser(@PathVariable int id) {
//        User user = userService.getUser(id).getBody();
//        DbsGenericResponse<User> dbsGenericResponse = new DbsGenericResponse<>();
//        dbsGenericResponse.setData(user);
//        dbsGenericResponse.setStatus(ResponseStatus.SUCCESS);
//        return dbsGenericResponse;
////        }catch(Exception){
////
////        }
////        return userService.saveUser(userRequest);
//    }
//
//    @GetMapping(value = "/users")
//    public DbsGenericResponse<List<User>> getUser() {
//        List<User> userList = userService.getUsers().getBody();
//        DbsGenericResponse<List<User>> dbsGenericResponse = new DbsGenericResponse<>();
//        dbsGenericResponse.setData(userList);
//        dbsGenericResponse.setStatus(ResponseStatus.SUCCESS);
//        return dbsGenericResponse;
////        }catch(Exception){
////
////        }
////        return userService.saveUser(userRequest);
//    }
}
