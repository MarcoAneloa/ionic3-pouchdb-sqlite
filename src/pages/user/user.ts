import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { BirthdayService } from '../../providers/birthdayservice/birthdayservice';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  id:any;  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private birthdayService: BirthdayService,
     private platform: Platform,) {
    console.log("home"+this.birthdayService);
}

  ionViewDidLoad() {
    this.id=this.navParams.get('id');
    console.log('id:'+this.id);
    console.log('ionViewDidLoad UserPage');
    this.platform.ready().then(() => {
      //this.birthdayService.initDB();

      this.birthdayService.getUserId(this.id)
      .then(data => {
         // this.zone.run(() => {
              console.log('[InfoDB]: '+JSON.stringify(data));
              //this.birthdays = data;
          //});
      })
      .catch(console.error.bind(console));
  });
}

}
