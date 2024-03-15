import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {
  constructor() {}
  
  a: number = 0;
  b: number = 0;
  c: number = 0;
  result: number = 0;

  calculate(a: any, b: any, c: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.result = 1;

      if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) {
        throw new Error('Parameter is not a number!');
      }

      let numbers = [this.a, this.b, this.c];

      let flag = false;
      for (const number of numbers) {
        if (number > 10 && number < 15) {
          this.result *= number;
          flag = true;
        }
      }

      if (!flag)
        this.result = 0;
    }
    catch (error) {
      console.log(error);
    }
  }
}
