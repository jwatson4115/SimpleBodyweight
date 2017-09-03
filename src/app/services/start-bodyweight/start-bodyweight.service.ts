import { Workout } from '../../domain/start-bodyweight';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StartBodyweightService {

  constructor(private _http: Http) { }

  getProgressionNames () {
    const progressionNames = [
      'Squats',
      'Pull Ups',
      'Handstand Push Ups',
      'Leg Raises',
      'Push Ups',
      'Dips',
      'Horizontal Pulls',
      'Plank',
    ];

    return progressionNames;
  }

  getTempWorkoutData() {
      return this._http.get('/assets/temp-progression-data.json')
        .map(res => res.json());
  }
}
