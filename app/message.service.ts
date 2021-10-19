import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(@Inject(HttpClient) private http:HttpClient) { }

  GetWelcomeMsg(){
    return this.http.get("http://localhost:9098/welcome", {responseType:"text"});
  }
}
