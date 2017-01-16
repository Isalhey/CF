import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page5 } from '../page5/page5';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6 {
  note: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.note = this.navParams.get('note');
  }

}