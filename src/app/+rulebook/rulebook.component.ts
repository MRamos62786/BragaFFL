import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';

interface Rulebook {
  year: number;
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-rulebook',
  templateUrl: 'rulebook.component.html',
  styleUrls: ['rulebook.component.css'],
  directives: [MdButton]
})
export class RulebookComponent implements OnInit {

  rulebooks: Rulebook[] = [
    {
      year: 2015,
      id: '0B-olz8zrBWq_Wm5vRGd2YUs4MkU'
    },
    {
      year: 2014,
      id: '0B-olz8zrBWq_emlVWklKbENTdlR6NXEyQ1ZJTjhrU3hNYldn'
    },
    {
      year: 2013,
      id: '0B-olz8zrBWq_aGI3Yml6TjBFLWc'
    },
    {
      year: 2012,
      id: '0B-olz8zrBWq_VjJES1dfelE3Ylk'
    },
    {
      year: 2011,
      id: '0B-olz8zrBWq_ZmY1NzdXRGZta3M'
    },
    {
      year: 2010,
      id: '0B-olz8zrBWq_bnI3SUNJQTZoQ1E'
    }
  ];
  
  rulebookButtons: Rulebook[];
  showAll: boolean;
  current: Rulebook;

  constructor() {
    this.current = this.rulebooks[0];
    this.show(false);
  }

  ngOnInit() {
  }

  rulebookSrc(): string {
    let id = this.current.id;
    return `https://docs.google.com/viewer?srcid=${id}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;
  }

  change(rulebook: Rulebook): void {
    this.current = rulebook;
  }

  isSelected(rulebook: Rulebook): boolean {
    return this.current === rulebook;
  }
  
  show(all: boolean): void {
    
    this.showAll = all;
    if (all) {
      this.rulebookButtons = this.rulebooks;  
    } else {
      this.rulebookButtons = this.rulebooks.slice(0, 3);
    }   
  }
}
