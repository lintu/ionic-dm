import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Player} from '../player/player';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class Home {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;
  icons: string[];
  constructor(public navCtrl: NavController, navParams: NavParams) {
// If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];
        for(let i = 1; i < 11; i++) {
          this.items.push({
            title: 'Song ' + i,
            note: 'This is song #' + i,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
    }
  }
  itemTapped(event, item) {
    this.navCtrl.push(Player, {
      item: item
    });
  }
}
