import { PreloadAllModules } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,  LoadingController  } from '@ionic/angular';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab3Page implements OnInit {
  data: any = [];
  data_users: any = [];

  showDetails: boolean[] = new Array(1000).fill(false);

  dataURL = 'https://api.jsonbin.io/v3/b/65f4842e266cfc3fde98e898';

  loading: any;

  birthdays: any = {};
  sameBirthdays: any = [];

  dynamicWidth = '50vw';

  constructor(public loadingController: LoadingController ) { }

  ngOnInit() {
  }

  async load() {
    this.loading = await this.loadingController.create({
        spinner: "bubbles",
        message: 'Loading...'
    });

    await this.loading.present();

    

    fetch(this.dataURL).then(res => res.json())
        .then(json => {
            this.data = json;
            this.data = this.data.record;
            let i = 0;
            while (this.data[i] != undefined) {
                this.data_users.push(this.data[i][0]);
                i++;
            }
            this.findSameBirthdays();
            this.loading.dismiss();
        });
}


  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    } else {
      this.showDetails[i] = true;
    }
  }

  findSameBirthdays() {
    this.birthdays = {};
    this.data_users.forEach((user: { birthdayDate: string; }) => {
        if (this.birthdays[user.birthdayDate]) {
            this.birthdays[user.birthdayDate]++;
        } else {
            this.birthdays[user.birthdayDate] = 1;
        }
    });

    this.sameBirthdays = Object.keys(this.birthdays).filter(date => this.birthdays[date] > 1);
  } 


  getPinkColor(birthdayDate: string) {
    return this.sameBirthdays.includes(birthdayDate) ? 'pink' : '';
  }

}
