import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-candies-recollected',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './candies-recollected.component.html',
  styleUrl: './candies-recollected.component.css',
})
export class CandiesRecollectedComponent {
  private readonly appStateService = inject(AppStateService)

  ngOnInit() {
    this.getSavedCandies()
  }

  get candiesTotalRecollected() {
    return this.appStateService.candiesTotalRecollected
  }
  
  getSavedCandies() {
    const storedCounter = localStorage.getItem('savedCandiesRecollected');
    if (storedCounter) {
      this.appStateService.candiesTotalRecollected = parseInt(storedCounter, 10);
    }
    console.log(storedCounter);
  }
}
