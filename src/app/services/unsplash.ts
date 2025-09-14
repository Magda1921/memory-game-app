import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnsplashPhoto, UnsplashResponse } from '@app/types/unsplash';
import { environment } from 'environments/environment.development';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Unsplash {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey: string = environment.UNSPLASH_API_KEY;

  constructor(private http: HttpClient) {}

  fetchImages(query: string, count: number): Observable<UnsplashPhoto[]> {
    const params = new HttpParams()
      .set('query', query)
      .set('per_page', count)
      .set('client_id', this.accessKey);

    return this.http.get<UnsplashResponse>(this.apiUrl, { params }).pipe(
      map((response) => {
        return response.results || [];
      }),
      catchError((error) => {
        console.error('Error fetching images:', error);
        return [];
      }),
    );
  }
}
