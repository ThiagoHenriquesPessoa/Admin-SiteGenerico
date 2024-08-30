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
    console.log("serviço 1", siteDto)
    try{
    const response = await axios.post(url, siteDto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
    }catch(erro){
    console.log("serviço 2", erro)
    }

  }
}
