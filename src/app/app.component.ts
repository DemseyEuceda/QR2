import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QRCodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QR2';
}
