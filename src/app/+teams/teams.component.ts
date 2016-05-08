import { Component, OnInit } from '@angular/core';
import {DomSanitizationService}from '@angular/platform-browser'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {Team, TeamsService} from '../teams.service';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

interface TeamComponent {
  team: Team,
  showLogo: boolean
}

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
  teams: TeamComponent[];

  constructor(sanitizer: DomSanitizationService, teamService: TeamsService) {
    this.santizer = sanitizer;
    this.teamService = teamService;
    this.teams = this.teamService.getActiveTeams().map(team => {
      return <TeamComponent>{
        team: team,
        showLogo: !team.nsfwLogo
      };
    });
  }

  ngOnInit() {
  }

  href(href: string) {

    window.location.href = href;
  }

  getTeams() {

    return this.teamService.getActiveTeams();
  }

  nsfwLogoBlurred(teamComp: TeamComponent) {

    return !teamComp.showLogo && teamComp.team.nsfwLogo;
  }
  
  nsfwLogoShowing(teamComp: TeamComponent) {

    return teamComp.showLogo && teamComp.team.nsfwLogo;
  }

  toggleBlurred(teamComp: TeamComponent, logo) {

    teamComp.showLogo = !teamComp.showLogo;
    //logo.className = 'showNsfw';
   
  }

}
