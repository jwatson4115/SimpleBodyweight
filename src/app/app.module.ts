import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StartBodyweightService } from './services/start-bodyweight/start-bodyweight.service';
import { PathLocationStrategy } from '@angular/common/src/location/path_location_strategy';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    HomeComponent,
    WorkoutComponent,
    StatisticsComponent,
    ExerciseComponent,
    PaginationComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    StartBodyweightService,
  ],
})
export class AppModule { }
