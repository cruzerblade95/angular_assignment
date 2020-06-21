import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Bmipersons} from '../.model/bmipersons';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public url = environment.web_api_url_base;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Bmipersons []> {
    return this.http.get<Bmipersons []>(this.url + 'view.php').pipe( map(data => {
        return data;
      })
    );
  }

  createProduct(data) {
    return this.http.post(this.url + 'create.php', data).pipe( map(response => {
        return response;
      })
    );
  }
}
