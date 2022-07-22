package com.dbs.seed.Service;

import com.dbs.seed.Entity.Currency;
import com.dbs.seed.Entity.Wallet;
import com.dbs.seed.Repository.RetrieveCurrencyWalletRepository;
import com.dbs.seed.Repository.WalletRepository;
import com.dbs.seed.Request.RetriveCurrencyWalletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RetrieveWalletService {
    @Autowired
    RetrieveCurrencyWalletRepository retrieveCurrencyWalletRepository;
    @Autowired
    WalletRepository walletRepository;

    public List<Currency> retrieveCurrencyWallet(RetriveCurrencyWalletRequest retriveCurrencyWalletRequest) {
int id = retriveCurrencyWalletRequest.getUserId();

        List<Wallet> listOfWallet = walletRepository.findAllByUserId(id);
        List<Currency> listOfCurrency = new ArrayList<>();
        for (Wallet wallet : listOfWallet) {
            List<Currency> listCurrency2 = retrieveCurrencyWalletRepository.findAllByWalletId(wallet.getId());
            listCurrency2.stream().forEach(currency -> {
                listOfCurrency.add(currency);
            });
        }
        return listOfCurrency;

//        User user = toUser(userRequest);
//        if (userRepository.findById(user.getId()).isPresent()) {
//            throw new UserExistException("User Existed");
//        }
//        return new ResponseEntity<User>(userRepository.save(toUser(userRequest)), HttpStatus.OK);
    }
}
//
//    ;
//
//    public User toUser(UserRequest userRequest) {
//        User user = User.builder().age(userRequest.getAge()).name(userRequest.getName()).build();
//        return user;
//    }
//
//    public ResponseEntity<User> getUser(int id) {
//        User user;
//        Optional<User> optionalUser = userRepository.findById(id);
//        if (optionalUser.isPresent()) {
//            user = optionalUser.get();
//            return new ResponseEntity<User>(user, HttpStatus.OK);
//        }
//        throw new UserDoesNotException("User Does Not Exist");
//    }
//
//    public ResponseEntity<List<User>> getUsers() {
////        return new ResponseEntity<List<User>>(userRepository.findAll(), HttpStatus.OK);
//        return new ResponseEntity<List<User>>(userRepository.findAll(), HttpStatus.OK);
//
//
//    }

