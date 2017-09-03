import { StartBodyweightService } from '../services/start-bodyweight/start-bodyweight.service';
import { Progression, Workout } from '../domain/start-bodyweight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  startBodyweightService: StartBodyweightService;
  workout: Workout;

  constructor(_startBodyweightService: StartBodyweightService) {
    this.startBodyweightService = _startBodyweightService;
  }

  ngOnInit() {
    this.startBodyweightService.getTempWorkoutData().subscribe(res => this.buildWorkoutData(res));
  }

  buildWorkoutData(workoutData: any) {
    const workout = new Workout();
    workout.sets = workoutData.sets;
    workout.maxReps = workoutData.maxReps;
    workout.minReps = workoutData.minReps;

    workout.progression = [];

    for (let i = 0; i < workoutData.progressions.length; i++) {
      const progression = new Progression();
      progression.name = workoutData.progressions[i].name;
      progression.exercises = workoutData.progressions[i].exercises;
      workout.progression.push(progression);
    }
    this.workout = workout;
  }
}
