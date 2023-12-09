import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../../services/app-state.service';
import { ImageService } from '../../services/image.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [CommonModule,     HttpClientModule,
],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  private readonly appStateService = inject(AppStateService)
  private readonly imageService = inject(ImageService)
  public readonly today: number = new Date().getDate();

  constructor() {
    const openedDaysFromStorage = localStorage.getItem('openedDays');
    if (openedDaysFromStorage) {
      this.appStateService.openedDays = JSON.parse(openedDaysFromStorage);
    } else {
      this.appStateService.openedDays = [];
    }
    this.imageService.randomImagePaths = this.imageService.getRandomImagePaths();
  }

  public get openedDays() {
    return this.appStateService.openedDays
  }
  public get randomImagePaths() {
    return this.imageService.randomImagePaths
  }
  public showPanelIfToday(day: number) {
    this.appStateService.showPanelIfToday(day)
  }
}
