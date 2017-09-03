import { Progression } from '../domain/start-bodyweight';
import { StartBodyweightService } from '../services/start-bodyweight/start-bodyweight.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  title: string;
  @Input() progression: Progression[];

  constructor(_startBodyweightService: StartBodyweightService) {}

  ngOnInit() {
    this.title = this.progression[0].name;
  }

  next() {
    for (let i = 0; i < this.progression.length - 1; i++) {
      if (this.progression[i].name === this.title) {
        this.title = this.progression[i + 1].name;
        return;
      }
    }
  }

  previous() {
    for (let i = 1; i < this.progression.length; i++) {
      if (this.progression[i].name === this.title) {
        this.title = this.progression[i - 1].name;
        return;
      }
    }
  }
}
