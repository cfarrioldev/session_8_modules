import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminActionsService {

constructor(private http: HttpClient) { }

createProduct(product: any){
  return this.http.post('http://localhost:8084/api/products/post', product)
}


}
