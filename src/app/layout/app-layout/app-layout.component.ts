import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../shared/nav/nav.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LightsComponent } from '../../shared/lights/lights.component';
import { AppStateService } from '../../pages/main/services/app-state.service';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,

    LightsComponent,
    NavComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {

  public readonly appStateService = inject(AppStateService)
  e = false

  ngOnInit() {
    this.setWallpaperByTime()
  }


  private setWallpaperByTime() {
    let currentHour = new Date().getHours();
    if (currentHour >= 18) {
      document.body.style.backgroundImage = "url('../../../assets/img/background/night-background.png')";
    } else {
      document.body.style.backgroundImage = "url('../../../assets/img/background/day-background.png')";
    }
  }

  public get showDarkerLayer() {
    return this.appStateService.showDarkLayer()
  }

  public get showCreateCandyPopup() {
    return this.appStateService.showCreatePopup()
  }
}
