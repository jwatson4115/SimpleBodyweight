export class Workout {
  progression: Progression[];
  minReps: number;
  maxReps: number;
  sets: number;
}

export class Progression {
  name: string;
  exercises: Exercise[];
}

export class Exercise {
  name: string;
  reps1: number;
  reps2: number;
  reps3: number;
}
