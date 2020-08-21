import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  private currentUrl: string;
  constructor(protected router: Router) { }

  ngOnInit() {

    //监听路由改变事件
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe((evt: NavigationStart) => {
        this.currentUrl = evt.url;
      });
  }

  get homeActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('home') > 0 || this.currentUrl == '/';
  }

  get aboutActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('about') > 0;
  }

  get productActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('product') > 0;
  }

  get technologyActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('technology') > 0;
  }

  get technicalSupportActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('technical-support') > 0;
  }

  get newsActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('news') > 0;
  }

  get contactusActived() {
    if (!this.currentUrl) return false;
    return this.currentUrl.indexOf('contact-us') > 0;
  }

  showSmallNav = false;

  toggleNav(router?: string) {
    this.showSmallNav = !this.showSmallNav;
  }//toggleNav

}
