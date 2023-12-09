import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysToXmasComponent } from './components/days-to-xmas/days-to-xmas.component';
import { DayComponent } from './components/days/day.component';
import { CandySurprisePopupComponent } from './components/candy-surprise-popup/candy-surprise-popup.component';
import { CreateCandyPopupComponent } from './components/create-candy-popup/create-candy-popup.component';
import { LightsComponent } from '../../shared/lights/lights.component';
import { HttpClientModule } from '@angular/common/http';
import { CandiesRecollectedComponent } from './components/candies-recollected/candies-recollected.component';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,

    CandySurprisePopupComponent,
    CandiesRecollectedComponent,
    DaysToXmasComponent,
    DayComponent,
    CreateCandyPopupComponent,
    LightsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  private readonly appStateService = inject(AppStateService)


  public showCreateCandyPopup() {
    return this.appStateService.showCreateCandyPopup
  }

  public showNewCandyPanel() {
    return this.appStateService.showNewCandyPanel
  }
}
