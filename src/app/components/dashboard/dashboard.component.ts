import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  exercises$!: Observable<any>;

  constructor(private exerciseService: ExerciseService) {
    this.exercises$ = this.exerciseService.getAll();
  }
}
