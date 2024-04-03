import { Component } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {

  foto: any;
  fotografia : File | undefined;
  imageurl: any;

  onFileSelected(event: any) {
    console.log(event)
    const file:File = event.target.files[0];
    file.arrayBuffer().then(b=> {
      let base64String = this.arrayBufferToBase64(b);
      this.imageurl = "data:image/jpg;base64," + base64String;
    })
  };

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  salvar() {
    throw new Error('Method not implemented.');
  }

}
