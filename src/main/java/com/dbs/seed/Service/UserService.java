package com.dbs.seed.Service;

import com.dbs.seed.Entity.User;
import com.dbs.seed.Exception.UserDoesNotException;
import com.dbs.seed.Exception.UserExistException;
import com.dbs.seed.Repository.UserRepository;
import com.dbs.seed.Request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
//    @Autowired
//    UserRepository userRepository;
//
//    public ResponseEntity<User> saveUser(UserRequest userRequest) {
//        User user = toUser(userRequest);
//        if (userRepository.findById(user.getId()).isPresent()) {
//            throw new UserExistException("User Existed");
//        }
//        return new ResponseEntity<User>(userRepository.save(toUser(userRequest)), HttpStatus.OK);
//    }
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
}
