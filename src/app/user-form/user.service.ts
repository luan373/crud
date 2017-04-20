import { User } from './shared/User';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class UserService {

  private baseURL: string = 'http://localhost:8080/angularws/webapi/users/luan'

  constructor(private _http: Http) { }

  getUser(){
    return this._http.get('http://localhost:8080/angularws/webapi/users/sajdhjsakdhaksj')
      .map(res => res.json());
  }

}
