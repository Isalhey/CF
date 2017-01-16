import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  doctors: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
      this.doctors = angFire.database.list('/Doctors');
  }

  addDoctor():void {
    let prompt = this.alertCtrl.create({
       title: 'Add Doctor detail',
       inputs: [
          {
            name: 'name',
            placeholder: "Doctor's name"
          },
          {
            name: 'clinic',
            placeholder: "Hospital name"
          },
          {
            name: 'telephone',
            placeholder: "Contact number"
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
             this.doctors.push({
                name: data.name,
                clinic: data.clinic,
                telephone: data.telephone
             })
           }
         }
       ]
    })

    prompt.present();

  }

  editDoctor(doctor):void {
    let prompt = this.alertCtrl.create({
       title: 'Edit Doctor',
       inputs: [
          {
            name: 'name',
            placeholder: doctor.name
          },
          {
            name: 'clinic',
            placeholder: doctor.clinic
          },
          {
            name: 'telephone',
            placeholder: doctor.telephone
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
             let newName:String = doctor.name;
             let newClinic:String = doctor.clinic;
             let newTelephone:String = doctor.telephone;

             if(data.name != ''){
               newName = data.name;
             }
             if(data.clinic != ''){
               newClinic = data.clinic;
             }
             if(data.telephone != ''){
               newTelephone = data.telephone;
             }

             this.doctors.update(doctor.$key, {
                name: newName,
                clinic: newClinic,
                telephone: newTelephone
             })
           }
         }
       ]
    })

    prompt.present();

  }

  deleteDoctor(doctorID):void {
    let prompt = this.alertCtrl.create({
      title: 'Remove Doctor',
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
              this.doctors.remove(doctorID)
            }
        }
      ]
    })

    prompt.present();

  }


}

