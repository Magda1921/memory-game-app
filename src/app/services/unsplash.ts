import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { catchError, map, Observable } from 'rxjs';

export interface UnsplashPhoto {
  id: string;
  urls: { small: string; full: string; regular: string };
  alt_description: string;
}

@Injectable({
  providedIn: 'root',
})
export class Unsplash {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = environment.UNSPLASH_API_KEY;

  constructor(private http: HttpClient) {}

  fetchImages(query: string, count: number): Observable<any[]> {
    const params = new HttpParams()
      .set('query', query)
      .set('per_page', count)
      .set('client_id', this.accessKey);

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((response) => response.results || []),
      catchError((error) => {
        console.error('Error fetching images:', error);
        return [];
      }),
    );
  }
}
