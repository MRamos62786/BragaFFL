import { Injectable } from '@angular/core';

interface Stats {
  pointsFor: number;
  pointsAgainst: number;
  wins: number;
  losses: number;
  playoffWins: number;
  playoffLosses: number;
  moneyWon: number;
  moneyLost: number;
}

interface Team {
  name: string;
  active: boolean;
  owner: string;
  stats?: { [key: number]: Stats };
  logo?: string;
  mobile?: string;
  email?: string;
  nsfwLogo?: boolean;
}

let teams: Team[] = [
  {
    name: 'PYLON PYTHONS',
    active: true,
    logo: 'http://i830.photobucket.com/albums/zz224/bragaffl/PPythons.jpg',
    nsfwLogo: false,
    owner: 'Joe Barros',
    mobile: '508-965-4027',
    email: 'joedebarros1@yahoo.com',
    stats: {
      2015: {
        pointsFor: 1306,
        pointsAgainst: 1533,
        wins: 2,
        losses: 11,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      }
    }
  },
  {
    name: 'WINTER SUPER SOLDIERS',
    active: true,
    logo: 'http://i830.photobucket.com/albums/zz224/bragaffl/WSSoldiersSMALL_zpszsisnqqf.jpg',
    nsfwLogo: false,
    owner: 'Tom Correia',
    mobile: '508-642-5661',
    email: 't_correia@hotmail.com'
  },
  {
    name: 'THE ZOMBIES',
    active: true,
    logo: 'https://dl.dropboxusercontent.com/u/6823003/All-StarNoCannon.jpg',
    nsfwLogo: false,
    owner: 'Marco Ramos',
    mobile: '774-319-9111',
    email: 'mramos62786@gmail.com'
  },
  {
    name: 'TEAM JIMBO',
    active: true,
    logo: 'http://g.espncdn.com/s/ffllm/logos/HelmetAlphabet-ESPN/Helmet-J.svg',
    nsfwLogo: false,
    owner: 'Jim Morton',
    mobile: '508-496-9644',
    email: 'jimmorton52@gmail.com'
  },
  {
    name: 'THE DARKKNIGHTS',
    active: true,
    logo: 'http://i1378.photobucket.com/albums/ah86/ronnr77/KNIGHT_zpsnvfmszpo.jpg',
    nsfwLogo: false,
    owner: 'Ron Robitaille',
    mobile: '508-415-9397',
    email: 'ronnr77@gmail.com'
  },
  {
    name: 'STRAIGHT OFFA WAIVERS',
    active: true,
    logo: 'http://i159.photobucket.com/albums/t127/SteveO_82/ab149dbb-5b90-47f7-8a9d-fb05e398f4cc_zpscvuwjukf.jpg',
    nsfwLogo: false,
    owner: 'Steve Correia',
    mobile: '508-423-2503',
    email: 'steveoc82@aol.com'
  },
  {
    name: 'SEIKO\'S SILVERDRAGONS ',
    active: true,
    logo: 'http://mobi-wall.brothersoft.com/files/176220/s/12817144656579.jpg',
    nsfwLogo: false,
    owner: 'Fred Deo',
    mobile: '508-965-6525',
    email: 'fernando.deoliveira@engineer.com'
  },
  {
    name: 'MAPLE SYRUP',
    active: true,
    logo: 'http://i830.photobucket.com/albums/zz224/bragaffl/MapleSyrup_zpsdd4f037f.jpg',
    nsfwLogo: false,
    owner: 'Garrett Springhetti',
    mobile: '774-392-0886',
    email: 'gspringh@gmail.com'
  },
  {
    name: 'FALL RIVER FISH MARKET',
    active: true,
    logo: 'http://ecx.images-amazon.com/images/I/51uFfO-AE9L.jpg',
    nsfwLogo: true,
    owner: 'Mark Correia',
    mobile: '774-451-2108',
    email: 'mdzm34@comcast.net'
  },
  {
    name: 'CHECK MY BALLS',
    active: true,
    logo: 'http://img.gawkerassets.com/img/18ha55yjdnorkjpg/k-bigpic.jpg',
    nsfwLogo: true,
    owner: 'Marc Miller',
    mobile: '508-954-4105',
    email: 'marc12881@gmail.com'
  },
  {
    name: 'MR. MCLOVIN',
    active: true,
    logo: 'http://g.espncdn.com/s/ffllm/logos/Marvel-75thAnnivSuperHeroIcons/GhostRider-01.svg',
    nsfwLogo: false,
    owner: 'Carols Novo',
    mobile: '508-558-3410',
    email: 'carlosnovo37@yahoo.com'
  },
  {
    name: 'URINE TROUBLE',
    active: true,
    logo: 'http://i830.photobucket.com/albums/zz224/bragaffl/UTIcup_zpsf58917ad.jpg',
    nsfwLogo: false,
    owner: 'Jeff Gonsalves',
    mobile: '774-365-7937',
    email: 'jg0181@yahoo.com'
  }
];

@Injectable()
export class TeamsService {

  constructor() { }

  getAllTeams(): Team[] {
    return teams;
  }

}
