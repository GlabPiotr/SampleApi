import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AccountsService {

  url = '/api/accounts';

  constructor(private http: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }
}
