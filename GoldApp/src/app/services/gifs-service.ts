import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class GifService {
    baseUrl: string;
    apiKey: string;
    constructor(private readonly http: HttpClient) {
        this.baseUrl = environment.baseUrl;
        this.apiKey = environment.apiKey;
    }
    getListGifs(filter: any): Observable<any> {
        let params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', filter.nameGif)
            .set('limit', filter.limitPage)
            .set('offset', 0)
            .set('rating', 'r')
            .set('lang', 'en')
            .set('bundle', 'messaging_non_clips');
        return this.http.get(`${this.baseUrl}search`, { params: params });
    }
}
