import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { LanguageData } from '../models/languages.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  
  constructor(private http: HttpClient) { }
  // baseUrl= 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages'
  getLanguagesData(): Observable<LanguageData>{

    return this.http.get<LanguageData>(environment.baseUrl,{
      headers : new HttpHeaders()
      .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue)
      .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
      .set(environment.AcceptEncodingLabel, environment.AcceptEncodingValue),
      params: new HttpParams().set('target', 'en') //of params is not set then we only get 'en' from api when we want 'en' and 'english'
    } )
  }
}




