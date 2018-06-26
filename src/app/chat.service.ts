import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = "d97f6e029d2a4483aaa48e6152e24673";

  constructor(private http: HttpClient) { }

  public getResponse(query: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + this.token
      })
    };
    console.log(query);
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseURL}`, data, httpOptions);
  }

  // public getHeaders(){
  //   let headers = new Headers();
  //   headers.append('Authorization', `Bearer ${this.token}`);
  //   return headers;
  // }
}
