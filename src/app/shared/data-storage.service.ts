import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  
}

