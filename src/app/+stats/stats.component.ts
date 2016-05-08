import { Component, OnInit } from '@angular/core';
import {Team, Stats, TeamsService} from '../teams.service';

interface TeamStats {
  team: Team,
  allTime: Stats
}

@Component({
  moduleId: module.id,
  selector: 'app-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css']
})
export class StatsComponent implements OnInit {

  teamService: TeamsService;
  teamStats: TeamStats[];

  constructor(teamService: TeamsService) {
    this.teamService = teamService;
    let teams = teamService.getAllTeams();

    teams.map(team => {
      for (let statsYear in team.stats) {

      }
    });

  }

  ngOnInit() {
  }

}
