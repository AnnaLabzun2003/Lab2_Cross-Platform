import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent],
})
export class Tab3Page {
  constructor() {}

  matrix: number[][] = [];
  n: number = 0;

  process (n: any) {
    this.matrix = [];

    try {
      this.n = parseInt(n); 

      if (isNaN(this.n) || n <= 0) {
        throw new Error('Input right number!');
      }

      let max: number = 100, min: number = -100;

      let i: number = 0, j: number = 0;
      this.matrix = Array(this.n);
      for (i = 0; i < this.n; ++i) {
        this.matrix[i] = Array(this.n);
        for (j = 0; j < this.n; ++j) {
          let aa: number = Math.floor(Math.random() * (max - min + 1)) + min;
          this.matrix[i][j] = aa;
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  getColor(element: number): string {
    return (element > 0 && element % 2 === 0) ? 'green' : 'transparent'; 
  }

  ngOnInit() {
  }
}
