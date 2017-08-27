import { Injectable } from '@angular/core';

@Injectable()
export class StartBodyweightService {

  constructor() { }

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
}
