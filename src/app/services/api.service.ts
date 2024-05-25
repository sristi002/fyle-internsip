import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/users/${githubUsername}?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`);
  }

  getUserRepos(username: string, page: number, max: number): Observable<any> {
    const encodedQuery: string = encodeURI(
      `user:${username} in:name sort:updated-asc`
    );
    return this.httpClient.get(
      `${environment.API_URL}/search/repositories?q=${encodedQuery}&page=${page}&per_page=${max}`
    );
  }

}
