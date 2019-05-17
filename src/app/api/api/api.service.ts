import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  addUser(body) {

    return this.http.post('http://localhost:3000/users', JSON.stringify(body), httpOptions);
  }

  updateUser(id, body) {
    return this.http.put(`http://localhost:3000/users/${id}`, JSON.stringify(body), httpOptions);
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  getUser(id){
    return this.http.get(`http://localhost:3000/users/${id}`)
  }
}
