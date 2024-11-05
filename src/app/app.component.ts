import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateComponent } from './translate/translate.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  home?:boolean= true;
  

  constructor(private router:Router){
    //routes to /home path as sson as application loads

    // this.router.navigate(['home'])
  }
  
  title = 'Translator';
}
