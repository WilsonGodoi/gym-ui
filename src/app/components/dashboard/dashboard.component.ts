import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { KmHourPipe } from '../../pipes/km-hour.pipe';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, KmHourPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  exercises$!: Observable<any>;
  time!: number;
  distance!: number;

  constructor(private exerciseService: ExerciseService) {
    this.getAll();
  }

  save() {
    this.exerciseService
      .save(this.time, this.distance)
      .subscribe(() => this.getAll());
  }

  private getAll() {
    this.exercises$ = this.exerciseService.getAll();
  }
}
