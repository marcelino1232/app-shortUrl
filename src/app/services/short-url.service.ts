import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = 'https://api-ssl.bitly.com/v4/shorten';
  key = '64dcad44084a68fbb653e37b390ada466457dc1e';

  constructor(private http:HttpClient) {

  }


  getShortUrl(nombreUrl:string) : Observable<any> {

    const tokenHeader = new HttpHeaders({Authorization:'Bearer '+ this.key});
    const body = {
      long_url:nombreUrl
    }
    return this.http.post(this.url,body,{ headers:tokenHeader });
  }
}
