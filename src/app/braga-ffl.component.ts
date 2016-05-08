import { Component, OnInit} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import { TeamsComponent } from './+teams';
import { RulebookComponent } from './+rulebook';
import {TeamsService} from './teams.service';

@Component({
  moduleId: module.id,
  selector: 'braga-ffl-app',
  templateUrl: 'braga-ffl.component.html',
  styleUrls: ['braga-ffl.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [
    MdIconRegistry,
    MdRadioDispatcher,
    TeamsService],

})
@Routes([
  { path: '/home', component: HomeComponent },
  { path: '/teams', component: TeamsComponent },
  { path: '/rulebook', component: RulebookComponent }
])
export class BragaFFLAppComponent implements OnInit {
  title: string = 'Braga FFL!';
  formShowing: boolean = false;
  views: Object[] = [
    {
      name: "Home",
      description: "Yo! It's a homepage yo!",
      icon: "home",
      route: "/home"
    },
    {
      name: "Teams",
      description: "Know the teams!",
      icon: "title",
      route: "/teams"
    },
    {
      name: "Rulebook",
      description: "Know the rules!",
      icon: "sentiment_very_dissatisfied",
      route: "/rulebook"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {

    if (this.router.urlTree._root.children.length === 0) {
      this.router.navigate(['/home']);
    }
  }
}
