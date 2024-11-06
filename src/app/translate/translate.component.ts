import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent implements OnInit{

  fromLanguage?: string;
  fromData?: string;
  toLanguage?: string;
  toData?:string;
  languageResponse :any;
  languageList: any;

  constructor(private router:Router, private appButton:AppComponent, private languageService : LanguageService, private translationService :TranslationService){
    console.log(this.router.url);
    this.setButtons();

  }

  sL = 'English'
  tL = 'Spanish'
  da= 'hello'
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.languageService.getLanguagesData().subscribe( response => {
      // console.log('data', response);
      this.languageResponse = response;
      console.log('data LR', this.languageResponse);
      this.languageList = this.languageResponse.data.languages;
      console.log('data LL', this.languageList);
      console.log('data LL0', this.languageList[0]);

      this.translationService.getTranslation(this.sL, this.tL, this.da).subscribe(reply=>{
        console.log("my api response", reply);
        console.log("converted: ", reply.provider.to_lang);
      })

    })
  }
 
  setButtons(){
    if(this.router.url=='/translate'){
      this.appButton.home= false;
      console.log("transssss",this.appButton.home);
      
    }
  }
  translate(){
    console.log("in trans button");
    
  }
  
}
