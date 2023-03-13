import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    this.http.post("http://localhost:3000/RegisterUsers", data).subscribe((result: any) => {
      let token = (Math.random() + 1).toString(36).substring(7);
      // console.warn(token) 
      localStorage.setItem("token", token)   // to generate local jwt token as it is accessed through backend server.
    })
  }
}
