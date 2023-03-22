import {Component} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;

  constructor(private _router: Router) {
    const navigation = this._router.getCurrentNavigation();
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      pendo && pendo.track && pendo.track('Navigated', {
        from: navigation.initialUrl,
        to: this._router.url,
        finalUrl: navigation.finalUrl.toString(),
      });
    });
  }
}
