import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDbService {
  constructor(private http: HttpClient) {}

  url: any = 'https://easy-tan-starfish-hem.cyclic.app/usuarios';

  conectToDb(data: any) {
    const response = this.http.post(this.url, data);
    const resp = response.subscribe(data => {
      console.log(data);
      return data.toLocaleString();
    });
    const getData = this.http.get(this.url).subscribe(res => {
      console.log(res);
      return;
    });
    return console.log(resp, getData);
  }
}
