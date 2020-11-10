import { Component } from '@angular/core';
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceX';
  toggleLanding: any = [
    {
      'flag': true
    },
    {
      'flag': false
    }
  ];
  toggleLaunch: any = [
    {
      'flag': true
    },
    {
      'flag': false
    }
  ];
  selectedLaunch: number = null;
  selectedLanding: number = null;
  selectedIndex: number = null;
  launchFlag: boolean = true;
  landFlag: boolean = true;
  yearLaunch: any = null;
  years: any = [
    {
      'year': 2006
    },
    {
      'year': 2007
    },
    {
      'year': 2008
    },
    {
      'year': 2009
    },
    {
      'year': 2010
    },
    {
      'year': 2011
    },
    {
      'year': 2012
    },
    {
      'year': 2013
    },
    {
      'year': 2014
    },
    {
      'year': 2015
    },
    {
      'year': 2016
    },
    {
      'year': 2017
    },
    {
      'year': 2018
    },
    {
      'year': 2019
    },
    {
      'year': 2020
    }
  ]
  data: any = [];
  yearApplied: boolean = false;

  constructor(private gs: GeneralService) { }

  ngOnInit() {
    this.loadAll();
  }

  /**
   * @method loadAll loads all the data on init
   */
  loadAll() {
    this.gs.loadData().subscribe(res => {
      this.data = res;
    });
  }

  /**
   * @method applyYearFilter when year is selected from Launch year filter
   * @param year passes current year value
   * @param index current selected year
   */
  applyYearFilter(year, index) {
    this.selectedIndex = index;
    this.yearLaunch = year;
    this.gs.allFilter(this.launchFlag, this.landFlag, year).subscribe(res => {
      this.yearApplied = true;
      this.data = [];
      this.data = res;
    });
  }

  /**
   * @method launch when Successful Launch is selected as true/false
   * @param arg Successful Launch true/false
   * @param index current selected index
   */
  launch(arg, index) {
    this.launchFlag = arg;
    this.selectedLaunch = index;
    if (this.yearApplied) {
      this.gs.allFilter(this.launchFlag, this.landFlag, this.yearLaunch).subscribe(res => {
        this.yearApplied = true;
        this.data = [];
        this.data = res;
      });
    } else {
      this.gs.landAndLaunch(this.launchFlag, this.landFlag).subscribe(res => {
        this.data = [];
        this.data = res;
      });
    }
  }

  /**
   * @method landing when Successful Landing is selected as true/false
   * @param arg Successful Landing true/false
   *  @param index current selected index
   */
  landing(arg, index) {
    this.landFlag = arg;
    this.selectedLanding = index;
    if (this.yearApplied) {
      this.gs.allFilter(this.launchFlag, this.landFlag, this.yearLaunch).subscribe(res => {
        this.yearApplied = true;
        this.data = [];
        this.data = res;
      });
    } else {
      this.gs.landAndLaunch(this.launchFlag, this.landFlag).subscribe(res => {
        this.data = [];
        this.data = res;
      });
    }
  }
}
