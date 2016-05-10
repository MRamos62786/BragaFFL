import { Component, OnInit} from '@angular/core';
import {Team, Stats, TeamsService} from '../teams.service';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {round10} from '../utils/number';


enum Column {
  name = 0,
  owner = 1,
  pointsFor = 2,
  pointsAgainst = 3,
  pointsForPerGame = 4,
  pointsAgainstPerGame = 5,
  wins = 6,
  losses = 7,
  ties = 8,
  winPercentage = 9,
  playoffWins = 10,
  playoffLosses = 11,
  playoffWinPercentage = 12,
  moneyWon = 13,
  moneyLost = 14,
  moneyDiff = 15
}

interface ColumnDetails {
  label: string;
  teamProp: boolean;
  round?: boolean;
}

let columnDetails: { [key: number]: ColumnDetails } = {
  0: {
    label: 'Team',
    teamProp: true
  },
  1: {
    label: 'Owner',
    teamProp: true
  },
  2: {
    label: 'PF',
    teamProp: false,
    round: false
  },
  3: {
    label: 'PA',
    teamProp: false,
    round: false
  },
  4: {
    label: 'PF/G',
    teamProp: false,
    round: true
  },
  5: {
    label: 'PA/G',
    teamProp: false,
    round: true
  },
  6: {
    label: 'W',
    teamProp: false,
    round: false
  },
  7: {
    label: 'L',
    teamProp: false,
    round: false
  },
  8: {
    label: 'T',
    teamProp: false,
    round: false
  },
  9: {
    label: 'W%',
    teamProp: false,
    round: true
  },
  10: {
    label: 'PW',
    teamProp: false,
    round: false
  },
  11: {
    label: 'PL',
    teamProp: false,
    round: false
  },
  12: {
    label: 'PW%',
    teamProp: false,
    round: true
  },
  13: {
    label: '$W',
    teamProp: false,
    round: false
  },
  14: {
    label: '$L',
    teamProp: false,
    round: false
  },
  15: {
    label: '$',
    teamProp: false,
    round: false
  }
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
    Column.name,
    Column.owner,
    Column.pointsFor,
    Column.pointsAgainst,
    Column.pointsForPerGame,
    Column.pointsAgainstPerGame,
    Column.wins,
    Column.losses,
    Column.ties,
    Column.winPercentage,
    Column.playoffWins,
    Column.playoffLosses,
    Column.playoffWinPercentage,
    Column.moneyWon,
    Column.moneyLost,
    Column.moneyDiff
  ];

  teams: Team[];
  sortColumn: Column;
  sortReverse: boolean;
  
  statYear: number = 2015;
  includeFormerOwners: boolean = false;

  constructor(teamService: TeamsService) {

    this.teamService = teamService;
  }

  ngOnInit() {

    this.loadTeams(false);
    this.sortBy(Column.name);
  }

  loadTeams(sort: boolean): void {

    this.teams = this.teamService.getTeams(!this.includeFormerOwners);

    if (sort) {
      this.sort();
    }
  }

  sort(): void {

    let method: string,
      reverse: boolean = this.sortReverse;

    let reverseNumber: number = !reverse ? 1 : -1;

    let sortFunction = (a: Team, b: Team): number => {
      let c: any = this.getColumnValue(this.sortColumn, a),
        d: any = this.getColumnValue(this.sortColumn, b),
        e: any = (c > d),
        f: any = (d > c);
      return reverseNumber * (e - f);
    };

    this.teams.sort(sortFunction);
  }

  sortBy(column: Column): void {

    if (this.sortColumn === column) {
      this.sortReverse = !this.sortReverse;
    } else {
      this.sortColumn = column;
      this.sortReverse = false;
    }
    this.sort();
  }

  getColumnName(column: Column): string {

    return columnDetails[column].label;
  }

  getColumnValue(column: Column, team: Team): any {
    let columnDetail = columnDetails[column];

    if (columnDetail.teamProp) {

      return team[Column[column]];
    } else {

      let stats: Stats;

      if (this.statYear) {
        stats = team.stats[this.statYear];
      } else {
        stats = team.allTimeStats;
      }

      if (stats) {

        let value: number = stats[Column[column]];
        if (isNaN(value)) {

          return 0;
        } else if (columnDetail.round) {

          return round10(value, -1);
        } else {

          return stats[Column[column]];
        }
      }
    }
  }

  getSortIcon(column: Column): string {
    if (this.sortColumn !== column) {

      return '';
    } else if (this.sortReverse) {

      return 'keyboard_arrow_up';
    } else {

      return 'keyboard_arrow_down';
    }
  }
}
