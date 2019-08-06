import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostdataService {

  public apiUrl = 'http://127.0.0.1:8181/addProduct';
  constructor(private http: HttpClient) { }

  public AddProduct(data): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, {Id: data.Id, Name: data.Name, Price: data.Price});
  }
}
