import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
constructor(
  public route: NavController
) { }
 
ngOnInit() {
}
openPortfolio() {
  this.route.navigateForward('/portfolio')
}
openshow() {
  this.route.navigateForward('/show')
}
}
