import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {

  medicines: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
      this.medicines = angFire.database.list('/Medicines');
  }

  addMedicine():void {
      let prompt = this.alertCtrl.create({
       title: 'Add Medicine',
       inputs: [
          {
            name: 'name',
            placeholder: "Medicine name"
          },
          {
            name: 'dosage',
            placeholder: "Dosage"
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
             this.medicines.push({
                name: data.name,
                dosage: data.dosage
             })
           }
         }
       ]
    })

    prompt.present();

  }

  editMedicine(medicine):void {
    let prompt = this.alertCtrl.create({
       title: 'Edit Medicine',
       inputs: [
          {
            name: 'name',
            placeholder: medicine.name
          },
          {
            name: 'dosage',
            placeholder: medicine.dosage
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
           text: "Save",
           handler: data => {
             let newName:String = medicine.name;
             let newDosage:String = medicine.dosage;

             if(data.name != ''){
               newName = data.name;
             }
             if(data.dosage != ''){
               newDosage = data.dosage;
             }

             this.medicines.update(medicine.$key, {
                name: newName,
                dosage: newDosage
             })
           }
         }
       ]
    })

    prompt.present();

  }

  deleteMedicine(medicineID):void {
    let prompt = this.alertCtrl.create({
      title: 'Remove Medicine',
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
              this.medicines.remove(medicineID)
            }
        }
      ]
    })

    prompt.present();

  }


}

