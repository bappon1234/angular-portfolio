import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent {
  skills = [
    { name: 'Node.js', percentage: 90, color: '#68a063' },
    { name: 'MongoDB', percentage: 95, color: '#47A248' },
    { name: 'Express.js', percentage: 95, color: '#404D59' },
    { name: 'JavaScript', percentage: 75, color: '#F7DF1E', textColor: 'black' },
    { name: 'Angular', percentage: 90, color: '#DD0031' },
    { name: 'HTML', percentage: 60, color: '#E44D26' }
  ];
}
