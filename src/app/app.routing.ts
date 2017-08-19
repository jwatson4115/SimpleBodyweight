import { StatisticsComponent } from './statistics/statistics.component';
import { WorkoutComponent } from './workout/workout.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'workout',
        component: WorkoutComponent,
        data: {
          title: 'Workout'
        }
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
        data: {
          title: 'Statistics'
        }
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
