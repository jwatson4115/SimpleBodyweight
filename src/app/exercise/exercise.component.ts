import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  @Input() name: string;
  @Input() exercises: string[];
  @Input() minReps: number;
  @Input() maxReps: number;

  reps: number[];

  constructor() {

  }

  ngOnInit() {
    this.setRepsArray(this.minReps, this.maxReps);
  }

  setRepsArray(minReps: number, maxReps: number) {
    const reps: number[] = [];

    for (let i = minReps; i <= maxReps; i++) {
      reps.push(i);
    }

    this.reps = reps;
  }
}
