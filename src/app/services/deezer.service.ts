import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import {search} from '../interfaces/search';
import {Observable} from 'rxjs/Rx';
import { from } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DeezerService {

  constructor(private http: HttpClient) { }

  output:Observable<search[]>;

  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "",
      "x-rapidapi-key": ""
    })
  };
    

 getResponse(str:string):Observable<search[]>{

  this.output = this.http.get<search[]>(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${str}`,this.httpOptions);
  return this.output;

 }
}
