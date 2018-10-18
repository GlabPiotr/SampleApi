package com.api.sample.services;

import com.api.sample.models.Account;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Piotr on 18.10.2018.
 */
@Service
public class AccountsService {

    //just a simple mock
    private final List<Account> accounts = new ArrayList<>(Arrays.asList(new Account("Full"), new Account("Partial")));

    public List<Account> getAccounts() {
        return accounts;
    }
}
