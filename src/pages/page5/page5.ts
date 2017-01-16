import { Component } from '@angular/core';
import { NavController, AlertController, NavParams} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Page6 } from '../page6/page6';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'

})
export class Page5 {

  notes: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
      this.notes = angFire.database.list('/Notes');
  }

  viewNote(note){
    this.navCtrl.push(Page6, {
      note: note
    });
  }


  addNote():void {
      let prompt = this.alertCtrl.create({
       title: 'Add a note',
       inputs: [
          {
            name: 'title',
            placeholder: "Note title"
          },
          {
            name: 'description',
            placeholder: "Description"
          }
       ],
       buttons: [
         {
           text: "Cancel",
           handler: data => {
             console.log("cancel clicked");
           }
         },
         {
           text: "Add",
           handler: data => {
             this.notes.push({
                title: data.title,
                description: data.description
             })
           }
         }
       ]
    })

    prompt.present();

  }


  deleteNote(noteID):void {
      let prompt = this.alertCtrl.create({
        title: 'Delete Note',
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("cancel clicked");
            }
          },
          {
              text: "Remove",
              handler: data => {
                this.notes.remove(noteID)
              }
          }
        ]
      })

      prompt.present();

  }



}

