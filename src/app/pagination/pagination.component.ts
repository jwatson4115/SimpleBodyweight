import { StartBodyweightService } from '../services/start-bodyweight/start-bodyweight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  title: string;
  progressionNames: string[];

  constructor(_startBodyweightService: StartBodyweightService) {
    this.progressionNames = _startBodyweightService.getProgressionNames();
    this.title = this.progressionNames[0];
  }

  next() {
    for (let i = 0; i < this.progressionNames.length - 1; i++) {
      if (this.progressionNames[i] === this.title) {
        this.title = this.progressionNames[i + 1];
        return;
      }
    }
  }

  previous() {
    for (let i = 1; i < this.progressionNames.length; i++) {
      if (this.progressionNames[i] === this.title) {
        this.title = this.progressionNames[i - 1];
        return;
      }
    }
  }

  ngOnInit() {
  }


}
