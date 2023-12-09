import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lights',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lights.component.html',
  styleUrl: './lights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightsComponent { }
