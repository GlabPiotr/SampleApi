package com.api.sample.controllers;

import com.api.sample.models.Account;
import com.api.sample.services.AccountsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.api.sample.mappings.Mappings.GET_ACOUNTS;

/**
 * Created by Piotr on 18.10.2018.
 */
@RestController
public class AccountsController {

    @Autowired
    private AccountsService accountsService;

    @GetMapping(GET_ACOUNTS)
    public List<Account> getStudents() {
        return accountsService.getAccounts();
    }
}
