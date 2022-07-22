package com.dbs.seed.Repository;

import com.dbs.seed.Entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {
//    @Query("Select wallet from wallet WHERE wallet.user_id =:userId")
//    List<Wallet> findListOfWalletByUserId(@Param("userId") int userId);
List<Wallet> findAllByUserId(int userId);
}
