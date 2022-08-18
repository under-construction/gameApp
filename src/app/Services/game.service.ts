import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  baseURL: string = '/api';

  constructor(
    private http: HttpClient
  ) { }

  GetAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/games`);
  }

  Insert(model: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/games`, model); 
  }

  Delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/games/${id}`);
  }
}
