import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import axios from 'axios';
import { SiteDto } from '../../Models/site-dto.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = `${environment.apiUrl}`;

  async criaSite(siteDto: SiteDto): Promise<any> {
    const url = this.apiUrl + 'json/Create/SiteGenerico/';

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      data : siteDto
    };

    await axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data));
    }).catch((error) => {
      console.log(error);
    });
  }
}
