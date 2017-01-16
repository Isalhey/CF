import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { Tabs1 } from '../pages/tabs1/tabs1';
import { HomePage } from '../pages/tabs2/tabs2';
import { AboutPage } from '../pages/tabs3/tabs3';
import { ContactPage } from '../pages/tabs4/tabs4';

//exporting the AngularFireModule config
export const firebaseConfig = {
    apiKey: "AIzaSyBBwRqf5KYHa1NAeZfA_a19XyCihyKBa9Q",
    authDomain: "my-cf-436d3.firebaseapp.com",
    databaseURL: "https://my-cf-436d3.firebaseio.com",
    storageBucket: "my-cf-436d3.appspot.com",
    messagingSenderId: "156687977"
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Tabs1,
    HomePage,
    AboutPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Tabs1,
    HomePage,
    AboutPage,
    ContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
