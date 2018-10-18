import {AccountsService} from './services/accounts.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts: any;

  constructor(private accountsService: AccountsService) {
    this.retrieveAccounts();
  }

  private retrieveAccounts(): void {
    this.accountsService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

}
