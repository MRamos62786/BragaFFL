import { Component, OnInit } from '@angular/core';
import {DomSanitizationService}from '@angular/platform-browser'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {TeamsService} from '../teams.service';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdButton,
    MdIcon
    ]
})
export class TeamsComponent implements OnInit {

  santizer: DomSanitizationService;
  teamService: TeamsService;

  constructor(sanitizer: DomSanitizationService, teamService: TeamsService) {
    this.santizer = sanitizer;
    this.teamService = teamService;
  }

  ngOnInit() {
  }

  href(href: string) {
    window.location.href = href;
  }
  
  getTeams() {
    return this.teamService.getActiveTeams();
  }

}
