import { Injectable } from '@angular/core';

interface Stats {
  pointsFor: number;
  pointsAgainst: number;
  wins: number;
  losses: number;
  ties: number;
  playoffWins: number;
  playoffLosses: number;
  moneyWon: number;
  moneyLost: number;
}

interface Team {
  owner: string;
  active: boolean;
  name?: string;
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
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1558,
        pointsAgainst: 1449,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1295,
        pointsAgainst: 1497,
        wins: 4,
        losses: 8,
        ties: 1,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1670,
        pointsAgainst: 1625,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 3,
        playoffLosses: 0,
        moneyWon: 160,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1413,
        pointsAgainst: 1473,
        wins: 3,
        losses: 10,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1342,
        pointsAgainst: 1255,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
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
    email: 't_correia@hotmail.com',
    stats: {
      2015: {
        pointsFor: 1481,
        pointsAgainst: 1511,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 50,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1498,
        pointsAgainst: 1516,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 50,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1813,
        pointsAgainst: 1665,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1615,
        pointsAgainst: 1447,
        wins: 10,
        losses: 3,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 60,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1647,
        pointsAgainst: 1627,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 30,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1328,
        pointsAgainst: 1253,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
    }
  },
  {
    name: 'THE ZOMBIES',
    active: true,
    logo: 'https://dl.dropboxusercontent.com/u/6823003/All-StarNoCannon.jpg',
    nsfwLogo: false,
    owner: 'Marco Ramos',
    mobile: '774-319-9111',
    email: 'mramos62786@gmail.com',
    stats: {
      2015: {
        pointsFor: 1422,
        pointsAgainst: 1816,
        wins: 2,
        losses: 11,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1562,
        pointsAgainst: 1615,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1446,
        pointsAgainst: 1492,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1559,
        pointsAgainst: 1573,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1679,
        pointsAgainst: 1619,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1326,
        pointsAgainst: 1473,
        wins: 3,
        losses: 10,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      }
    }
  },
  {
    name: 'TEAM JIMBO',
    active: true,
    logo: 'http://g.espncdn.com/s/ffllm/logos/HelmetAlphabet-ESPN/Helmet-J.svg',
    nsfwLogo: false,
    owner: 'Jim Morton',
    mobile: '508-496-9644',
    email: 'jimmorton52@gmail.com',
    stats: {
      2015: {
        pointsFor: 1633,
        pointsAgainst: 1562,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1763,
        pointsAgainst: 1538,
        wins: 7,
        losses: 5,
        ties: 1,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 100,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1678,
        pointsAgainst: 1548,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 3,
        playoffLosses: 0,
        moneyWon: 250,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1649,
        pointsAgainst: 1553,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 1,
        moneyWon: 100,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1292,
        pointsAgainst: 1487,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1425,
        pointsAgainst: 1448,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      }
    }
  },
  {
    name: 'THE DARKKNIGHTS',
    active: true,
    logo: 'http://i1378.photobucket.com/albums/ah86/ronnr77/KNIGHT_zpsnvfmszpo.jpg',
    nsfwLogo: false,
    owner: 'Ron Robitaille',
    mobile: '508-415-9397',
    email: 'ronnr77@gmail.com',
    stats: {
      2015: {
        pointsFor: 1341,
        pointsAgainst: 1620,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1505,
        pointsAgainst: 1638,
        wins: 4,
        losses: 8,
        ties: 1,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1670,
        pointsAgainst: 1716,
        wins: 5,
        losses: 7,
        ties: 1,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 50,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1709,
        pointsAgainst: 1471,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1686,
        pointsAgainst: 1549,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 100,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1287,
        pointsAgainst: 1445,
        wins: 5,
        losses: 7,
        ties: 1,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      }
    }
  },
  {
    name: 'STRAIGHT OFFA WAIVERS',
    active: true,
    logo: 'http://i159.photobucket.com/albums/t127/SteveO_82/ab149dbb-5b90-47f7-8a9d-fb05e398f4cc_zpscvuwjukf.jpg',
    nsfwLogo: false,
    owner: 'Steve Correia',
    mobile: '508-423-2503',
    email: 'steveoc82@aol.com',
    stats: {
      2015: {
        pointsFor: 1584,
        pointsAgainst: 1408,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1572,
        pointsAgainst: 1594,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1360,
        pointsAgainst: 1608,
        wins: 3,
        losses: 10,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1423,
        pointsAgainst: 1332,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1623,
        pointsAgainst: 1447,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 60,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1233,
        pointsAgainst: 1409,
        wins: 4,
        losses: 8,
        ties: 1,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 30,
        moneyLost: 30
      }
    }
  },
  {
    name: 'SEIKO\'S SILVERDRAGONS ',
    active: true,
    logo: 'http://mobi-wall.brothersoft.com/files/176220/s/12817144656579.jpg',
    nsfwLogo: false,
    owner: 'Fred Deo',
    mobile: '508-965-6525',
    email: 'fernando.deoliveira@engineer.com',
    stats: {
      2015: {
        pointsFor: 1673,
        pointsAgainst: 1516,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 1,
        moneyWon: 190,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1510,
        pointsAgainst: 1377,
        wins: 10,
        losses: 3,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 0,
        moneyWon: 250,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1491,
        pointsAgainst: 1516,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      }
    }
  },
  {
    name: 'MAPLE SYRUP',
    active: true,
    logo: 'http://i830.photobucket.com/albums/zz224/bragaffl/MapleSyrup_zpsdd4f037f.jpg',
    nsfwLogo: false,
    owner: 'Garrett Springhetti',
    mobile: '774-392-0886',
    email: 'gspringh@gmail.com',
    stats: {
      2015: {
        pointsFor: 1646,
        pointsAgainst: 1426,
        wins: 11,
        losses: 2,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1569,
        pointsAgainst: 1536,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1614,
        pointsAgainst: 1546,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      }
    }
  },
  {
    name: 'FALL RIVER FISH MARKET',
    active: true,
    logo: 'http://ecx.images-amazon.com/images/I/51uFfO-AE9L.jpg',
    nsfwLogo: true,
    owner: 'Mark Correia',
    mobile: '774-451-2108',
    email: 'mdzm34@comcast.net',
    stats: {
      2015: {
        pointsFor: 1609,
        pointsAgainst: 1298,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 3,
        playoffLosses: 0,
        moneyWon: 250,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1365,
        pointsAgainst: 1657,
        wins: 3,
        losses: 10,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1566,
        pointsAgainst: 1485,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1366,
        pointsAgainst: 1615,
        wins: 2,
        losses: 11,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1657,
        pointsAgainst: 1523,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1463,
        pointsAgainst: 1318,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 60,
        moneyLost: 30
      }
    }
  },
  {
    name: 'CHECK MY BALLS',
    active: true,
    logo: 'http://img.gawkerassets.com/img/18ha55yjdnorkjpg/k-bigpic.jpg',
    nsfwLogo: true,
    owner: 'Marc Miller',
    mobile: '508-954-4105',
    email: 'marc12881@gmail.com',
    stats: {
      2015: {
        pointsFor: 1331,
        pointsAgainst: 1478,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      }
    }
  },
  {
    name: 'MR. MCLOVIN',
    active: true,
    logo: 'http://g.espncdn.com/s/ffllm/logos/Marvel-75thAnnivSuperHeroIcons/GhostRider-01.svg',
    nsfwLogo: false,
    owner: 'Carols Novo',
    mobile: '508-558-3410',
    email: 'carlosnovo37@yahoo.com',
    stats: {
      2015: {
        pointsFor: 1578,
        pointsAgainst: 1617,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1504,
        pointsAgainst: 1472,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1617,
        pointsAgainst: 1511,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 1,
        moneyWon: 190,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1385,
        pointsAgainst: 1451,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1216,
        pointsAgainst: 1530,
        wins: 2,
        losses: 11,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1278,
        pointsAgainst: 1222,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 0,
        moneyWon: 160,
        moneyLost: 30
      }
    }
  },
  {
    name: 'URINE TROUBLE',
    active: true,
    logo: 'http://i830.photobucket.com/albums/zz224/bragaffl/UTIcup_zpsf58917ad.jpg',
    nsfwLogo: false,
    owner: 'Jeff Gonsalves',
    mobile: '774-365-7937',
    email: 'jg0181@yahoo.com',
    stats: {
      2015: {
        pointsFor: 1789,
        pointsAgainst: 1608,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 95,
        moneyLost: 50
      },
      2014: {
        pointsFor: 1580,
        pointsAgainst: 1535,
        wins: 9,
        losses: 4,
        ties: 0,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 190,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1564,
        pointsAgainst: 1682,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1435,
        pointsAgainst: 1384,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1740,
        pointsAgainst: 1396,
        wins: 11,
        losses: 2,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 0,
        moneyWon: 160,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1510,
        pointsAgainst: 1337,
        wins: 10,
        losses: 3,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
    }
  },
  {
    owner: 'Tyler Crafford',
    active: false,
    stats: {
      2010: {
        pointsFor: 1113,
        pointsAgainst: 1288,
        wins: 4,
        losses: 9,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      }
    }
  },
  {
    owner: 'Ryan Noonan',
    active: false,
    stats: {
      2012: {
        pointsFor: 1401,
        pointsAgainst: 1535,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1450,
        pointsAgainst: 1562,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      }
    }
  },
  {
    owner: 'Danny Ferreira',
    active: false,
    stats: {
      2011: {
        pointsFor: 1423,
        pointsAgainst: 1565,
        wins: 4,
        losses: 9,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1232,
        pointsAgainst: 1175,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      }
    }
  },
  {
    owner: 'Chris Medeiros',
    active: false,
    stats: {
      2014: {
        pointsFor: 1528,
        pointsAgainst: 1587,
        wins: 6,
        losses: 7,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 50
      },
      2013: {
        pointsFor: 1785,
        pointsAgainst: 1633,
        wins: 8,
        losses: 5,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 1,
        moneyWon: 100,
        moneyLost: 50
      },
      2012: {
        pointsFor: 1388,
        pointsAgainst: 1508,
        wins: 5,
        losses: 8,
        ties: 0,
        playoffWins: 0,
        playoffLosses: 0,
        moneyWon: 0,
        moneyLost: 30
      },
      2011: {
        pointsFor: 1435,
        pointsAgainst: 1483,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 1,
        playoffLosses: 1,
        moneyWon: 0,
        moneyLost: 30
      },
      2010: {
        pointsFor: 1372,
        pointsAgainst: 1286,
        wins: 7,
        losses: 6,
        ties: 0,
        playoffWins: 2,
        playoffLosses: 1,
        moneyWon: 100,
        moneyLost: 30
      }
    }
  }
];

@Injectable()
export class TeamsService {

  constructor() { }

  getAllTeams(): Team[] {

    return teams;
  }

  getActiveTeams(): Team[] {

    return teams.filter(team => team.active);
  }

}
