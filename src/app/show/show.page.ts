import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }
  backtab1() {
    this.route.navigateBack('/tabs/tab1')
  }
}
