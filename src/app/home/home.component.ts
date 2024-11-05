import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateComponent } from '../translate/translate.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router:Router, private appButton:AppComponent){
    this.setButtons();
  }
  

  setButtons(){
    if(this.router.url =='/home'){
      this.appButton.home = true;
      // this.appButton.trans= false;
    }
  }
}
