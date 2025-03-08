import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
projects = [
  {name: 'E-Commerce Platforms',
    image: "../../../assets/images/e-commerce.jpg"
  },
  {name: 'Event Management Systems',
    image: "../../../assets/images/event-management.jpg"
  },
  {name: 'Budget Planner Applications',
    image: "../../../assets/images/budget-planner.jpg"
  }
];
}
