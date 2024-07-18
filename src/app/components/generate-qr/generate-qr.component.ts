import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';


declare var codeQr : any; 

declare global {
  interface Window {
    salir: () => void;
  }
}


@Component({
  selector: 'app-generate-qr',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './generate-qr.component.html',
  styleUrl: './generate-qr.component.css'
})
export class GenerateQRComponent {
  public url : string = '';
  public dataQR : string = codeQr;

  onCodeChange(){

  }



  salir(){


    if (typeof window['salir'] === 'function') {
      window['salir']();
    } else {
      console.error('La función salir no está definida');
    }
 
  }

}
