import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environment';
import { LanguageData } from '../models/languages.model';
import { Observable } from 'rxjs';
import { TranslationData } from '../models/translation.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

  constructor(private http:HttpClient) { }
  headers = { 'Content-Type': 'application/json' };
  getGoogleTranslation(sourceLang:any, targetLang:any, data:any): Observable<TranslationData>{

    const body = { "from": sourceLang, "to" : targetLang, "text" : data}
    return this.http.post<TranslationData>(environment.googleTranslateAPIURL, body,  {
       headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*') //to prevent CORS err or
                        .set(environment.XRapidAPIHostLabel2, environment.XRapidAPIHostValue2)
                        .set(environment.ContentTypeLabel, environment.ContentTypeValue)
                        .set(environment.XRapidAPIKeyLabel2, environment.XRapidAPIKeyValue2)

                        

      // body : new Http
    } )
  }
}
