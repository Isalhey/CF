import { Component } from '@angular/core';

import { HomePage } from '../tabs2/tabs2';
import { AboutPage } from '../tabs3/tabs3';
import { ContactPage } from '../tabs4/tabs4';

@Component({
  templateUrl: 'tabs1.html'
})

export class Tabs1 {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}

