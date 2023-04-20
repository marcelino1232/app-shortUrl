import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  nombreUrl:string;
  procesadadUrl:string;
  estado:boolean;
  loading:boolean;
  mensaje:string;

  constructor(private _shortUrl:ShortUrlService){
    this.nombreUrl = '';
    this.procesadadUrl = '';
    this.estado = false;
    this.loading = false;
    this.mensaje = '';
  }

  procesarUrl()
  {
    if(this.nombreUrl == ""){
      this.mensaje = "TODOS LOS COMPOS SON REQUERIDO"; 
      setTimeout(() => {
        this.mensaje = '';
      }, 2000);
      return;
    }

    this.estado = false;
    this.loading = true;

    setTimeout(() => {
      this.procesoHttp();
    }, 2000);
  
  }

  procesoHttp() {
    this._shortUrl.getShortUrl(this.nombreUrl).subscribe(data => {
      this.loading = false;
      this.estado = true;
      this.mensaje = '';
      this.procesadadUrl = data.link;
    }, error => {
      this.loading = false;
      this.nombreUrl = '';
      this.mensaje = 'LA URL ES INVALIDAD';
      setTimeout(() => {
        this.mensaje = '';
      }, 2000)
    });
  }

}
