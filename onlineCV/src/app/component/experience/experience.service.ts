import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from './models/Experience';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly EXP_URL = '/experience';

  constructor(private httpClient: HttpClient) {}

    getExperiences(): Observable<Experience[]> {
      return this.httpClient.get<Experience[]>(environment.apiURL + this.EXP_URL);
    }
}
