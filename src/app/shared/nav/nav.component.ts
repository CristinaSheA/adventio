import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../../pages/main/services/app-state.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private readonly appStateService = inject(AppStateService)

  public showNewCandyPanel() {
    this.appStateService.showDarkerLayer = true
    this.appStateService.showCreateCandyPopup = true
  }
}
