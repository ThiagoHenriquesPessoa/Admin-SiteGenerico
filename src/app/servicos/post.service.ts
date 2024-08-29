import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  criaSite(SiteDto: any): Observable<any> {
    const url = this.apiUrl + 'json/Create/SiteGenerico/';
    return this.http.post<any>(url, SiteDto, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
}
