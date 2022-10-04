import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  login(username: string = '', password: string = '') {
    const userInfo = { un: username, pw: password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(
      'http://localhost:3000/login',
      JSON.stringify(userInfo),
      { headers: headers, responseType: 'text' }
    );
  } //login

  public daDangNhap() {
    const str = localStorage.getItem('expires_at') || '';
    if (str == '') return false; //chưa dn
    const expiresAt = JSON.parse(str);
    return moment().isBefore(moment(expiresAt));
  }

  thoat() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
    localStorage.removeItem('userid');
  }
}
