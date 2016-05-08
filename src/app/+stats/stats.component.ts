import { Component, OnInit } from '@angular/core';
import {Team, Stats, TeamsService} from '../teams.service';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

enum Column {
  Team,
  Owner,
  Wins,
  Losses,
  Ties
}

@Component({
  moduleId: module.id,
  selector: 'app-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css'],
  directives: [
    MdIcon
  ]
})
export class StatsComponent implements OnInit {

  teamService: TeamsService;
  teams: Team[];
  columns: Column[] = [
    Column.Team,
    Column.Owner,
    Column.Wins,
    Column.Losses,
    Column.Ties,
  ];
  sortColumn: Column;
  sortAscending: boolean = true;


  constructor(teamService: TeamsService) {

    this.teamService = teamService;
    this.teams = teamService.getTeams(true);

    this.sortColumn = Column.Team;
  }

  ngOnInit() {
  }

  sort() {
    this.teams.sort((teamA, teamB) => {
      return 0
    });
  }
  
  getColumnName(column: Column) {
    return Column[column];
  }

  getSortIcon(column: Column) {
    if (this.sortColumn === column) {
      return 'keyboard_arrow_down';
    }
  }


}
