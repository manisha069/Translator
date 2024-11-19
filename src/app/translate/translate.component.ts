import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';
import { getEventListeners } from 'node:events';
import { GoogleTranslateService } from '../services/google-translate.service';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent implements OnInit{

  sourceLanguage: any ="English";
  sourceData?: any;
  targetLanguage: string = "English"
  targetData?:string = "";
  languageResponse :any;
  languageList: any;
  Languages: any =[];
  sourceCode: any;
  targetCode :any;
  td:any;
  translationResponse:any;
  constructor(private router:Router, private appButton:AppComponent, private languageService : LanguageService, private translationService :TranslationService, private gtranslate : GoogleTranslateService){
    console.log(this.router.url);
    this.setButtons();

  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.languageService.getLanguagesData().subscribe( response => {
     
      this.languageResponse = response;
      
      this.languageList = this.languageResponse.data.languages;
     
      this.languageList.forEach((item: any) => {
        
        this.Languages.push(item.name);
      });

      
      
      

    })
  }
 
  setButtons(){
    if(this.router.url=='/translate'){
      this.appButton.home= false;
      
    }
  }
  translateMethod(){
    this.sourceData = document.getElementById("sourceData")!;
    this.sourceData = this.sourceData.value;

    console.log(this.sourceLanguage, this.targetLanguage, this.sourceData);
    this.getSourceLanguageCode();
    this.getTargetLanguageCode();
    

    
    this.gtranslate.getGoogleTranslation(this.sourceCode, this.targetCode, this.sourceData).subscribe(gresponse =>{
      this.translationResponse = gresponse;
      this.targetData = this.translationResponse.trans;


    })

    // python api code that works in ngOnInit but not inside this method.

    // this.translationService.getTranslation(this.sL, this.tL, this.da).subscribe(reply=>{
    //   console.log("my api response", reply);
    //   console.log("converted: ", reply.provider.to_lang);
    // })

    
  }

  // setSourceLanguage(){
  //   console.log("in meth");
  //   // console.log(this.sourceLang);
  //   this.sourceLang = document.getElementById("source");
  //     console.log("this source", this.sourceLang, this.sourceLanguage);
      
  // }

  setSourceLang (value:string){
    this.sourceLanguage = value;
  }

  setTargetLang(value:string){
    this.targetLanguage = value;

  }

  getSourceLanguageCode() : any {

    this.languageList.forEach((item:any) => {
      if(item.name == this.sourceLanguage){
          this.sourceCode = item.language;
        }  
    }) 
  } 

  getTargetLanguageCode() : any {

    this.languageList.forEach((item:any) => {
      if(item.name == this.targetLanguage){
          this.targetCode = item.language;
        }  
    }) 
  } 
}
