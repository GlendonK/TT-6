package com.dbs.seed;

import com.dbs.seed.Configuration.SSLConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SeedApplication {


	public static void main(String[] args) {
		SSLConfig.disableSSLVerification();
		SpringApplication.run(SeedApplication.class, args);
	}

}
