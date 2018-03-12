import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//below is the code for the signup button to connect to the contact page
//thru the nextpage function written within the signup button
  constructor(public navCtrl: NavController) {}
  nextpage(){
      this.navCtrl.push(ContactPage);
    }
  }
