import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';



@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
    nutrimain: string = "nutrition";
    isAndroid: boolean = false;
  
    constructor(platform: Platform) {
      this.isAndroid = platform.is('android');
    }

}








