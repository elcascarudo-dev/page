import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistService {

  constructor(
    private _http: HttpClient
  ) { }

  publicGist(){

    return this._http.get( 'https://api.github.com/users/elcascarudo-dev/gists' );

  }
}
