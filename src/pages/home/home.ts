import { Component,NgZone } from '@angular/core';
import { ModalController, NavController, Platform  } from 'ionic-angular';
import { DetailPage } from '../detail/detail';  
import { BirthdayService } from '../../providers/birthdayservice/birthdayservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public birthdays = [];

  constructor(private nav: NavController,
    private platform: Platform,
    private zone: NgZone,
    private modalCtrl: ModalController,
    private birthdayService: BirthdayService) {
        console.log("home"+this.birthdayService);
  }

ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        console.log('[InfoDB]: '+JSON.stringify(data));
                        this.birthdays = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    showDetail(birthday) {
        let modal = this.modalCtrl.create(DetailPage, { birthday: birthday });
        modal.present();
    }

    irUser(){
        this.nav.setRoot('UserPage',{id:'marco',name:'marco'});
    }
}
