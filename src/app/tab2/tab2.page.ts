import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class Tab2Page {
  constructor() {}

  left: number = 0;
  right: number = 0;
  result: number = 0;

  calculate(a: any, b: any) {
    try {
      this.left = parseFloat(a);
      this.right = parseFloat(b);
      this.result = 1;

      if (isNaN(this.left) || isNaN(this.right)) {
        throw new Error('Parameter is not a number!');
      }

      let flag = false;
      for (let i = this.left; i <= this.right; ++i) {
        if (i % 6 === 0) {
          this.result *= i;
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
