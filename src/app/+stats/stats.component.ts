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
  columns: Column[] = [
    Column.Team,
    Column.Owner,
    Column.Wins,
    Column.Losses,
    Column.Ties,
  ];

  sortColumn: Column = Column.Team;
  sortAscending: boolean = true;

  statYear: number = 2015;
  includeFormerOwners: boolean = false;

  constructor(teamService: TeamsService) {

    this.teamService = teamService;
    this.sort();
  }

  ngOnInit() {
  }

  getTeams() {
     
     return this.teamService.getTeams(!this.includeFormerOwners);
  }

  sort() {
    this.getTeams().sort((teamA, teamB) => {
      return 0
    });
  }

  getColumnName(column: Column) {
    return Column[column];
  }

  getColumnValue(column: Column, team: Team): string {

    switch (column) {
      case Column.Team:
        return team.name;
      case Column.Owner:
        return team.owner;
      default:
        let stats: Stats;

        if (this.statYear) {
          stats = team.stats[this.statYear];
        } else {
          stats = team.allTimeStats;
        }

        if (stats) {
          return stats[Column[column].toLowerCase()];
        }
    }
  }

  getSortIcon(column: Column) {
    if (this.sortColumn !== column) {

      return '';
    } else if (this.sortAscending) {

      return 'keyboard_arrow_up';
    } else {

      return 'keyboard_arrow_down';
    }
  }
}
