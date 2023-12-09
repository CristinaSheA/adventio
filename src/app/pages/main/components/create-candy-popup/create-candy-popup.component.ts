import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-create-candy-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  templateUrl: './create-candy-popup.component.html',
  styleUrl: './create-candy-popup.component.css',
})
export class CreateCandyPopupComponent {
  public name = '';
  public quantity = 0;
  public image: string | undefined;

  private http = inject(HttpClient);
  private appStateService = inject(AppStateService);

  private maxWidth = 500;
  private maxHeight = 300;

  private hidePopup() {
    this.appStateService.showCreateCandyPopup = false
  }

  public onSubmit(): void {
    this.hidePopup()
    this.createQuery().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  public async onFileChanged(event: Event): Promise<void> {
    this.image = undefined;
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files || !inputElement.files.length) return;

    const img = await this.readImage(inputElement.files[0]);
    if (!img) return;

    this.resizeImage(img);
  }

  private createQuery(): Observable<any> {
    return this.http.post(this.appStateService.apiUrl, {
      name: this.name,
      quantity: this.quantity,
      image: this.image,
    });
  }

  private async readImage(file: File): Promise<HTMLImageElement | void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          const originalImageDataUrl = e.target.result as string;
          const img = new Image();
          img.src = originalImageDataUrl;

          img.onload = function () {
            resolve(img);
          };

          img.onerror = function () {
            reject(new Error('Error al cargar la imágen'));
          };
        }
      };

      reader.readAsDataURL(file);
    });
  }

  private resizeImage(img: HTMLImageElement): void {
    let width = img.width;
    let height = img.height;

    if (width > this.maxWidth) {
      height *= this.maxWidth / width;
      width = this.maxWidth;
    }

    if (height > this.maxHeight) {
      width *= this.maxHeight / height;
      height = this.maxHeight;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx!.drawImage(img, 0, 0, width, height);

    this.image = canvas.toDataURL('image/jpeg');
  }

  public increaseCandyQuantity() {
    this.quantity++
  }

  public decreaseCandyQuantity() {
    this.quantity--
  }
}
