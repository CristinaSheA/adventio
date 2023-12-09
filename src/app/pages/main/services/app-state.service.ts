import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public candies: any[]            = [];
  public candiesTotalRecollected   = 0;
  public giftDays: any             = Array.from({ length: 31 }, (_, i) => ({ day: i + 1, isOpened: false }));
  public openedDays: string[]      = [];
  public randomObj!: any

  public showDarkerLayer     : boolean = false
  public showNewCandyPanel  : boolean = false
  public showCreateCandyPopup: boolean = false

  public apiUrl = 'http://localhost:3090/api/candies';


  public showCandyPopUp() {
    this.showNewCandyPanel = true;
  }

  public showDarkLayer() {
    this.showDarkerLayer = true;
  }

  public showCreatePopup() {
    this.showCreateCandyPopup = true;
  }


  public showPanelIfToday(day: number) {
    const today = new Date().getDate();
    if (day === today && !this.openedDays[day - 1]) {
      this.showCandyPopUp();
      this.openedDays[day - 1] = today.toString();
      localStorage.setItem('openedDays', JSON.stringify(this.openedDays));
    }
  }
}
