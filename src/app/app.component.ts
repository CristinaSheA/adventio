import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    AppLayoutComponent,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  backgroundClass;

  title = 'adventio';
  constructor(
  ) {
    const currentHour = new Date().getHours();

    if (currentHour >= 18) {
      this.backgroundClass = 'evening';
    } else {
      this.backgroundClass = 'day';
    }
  }

}
