import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environment';
import { LanguageData } from '../models/languages.model';
import { Observable } from 'rxjs';
import { TranslationData } from '../models/translation.model';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http:HttpClient) { }

  getTranslation(sourceLang:string, targetLang:string, data:string): Observable<TranslationData>{

    return this.http.get<TranslationData>(environment.translationAPI,{
       headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*'), //to prevent CORS error

      
      params: new HttpParams().set('sourceLang', sourceLang)
                              .set('targetLang', targetLang)
                              .set('data',data ) 
    } )
  }
}
