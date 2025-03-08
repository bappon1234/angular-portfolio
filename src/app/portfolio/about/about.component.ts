import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  name:string =  'Bappon Namosudra';
  role:string = 'Full Stack Developer';
  skills:string[] = ['Angular', 'Node.js', 'MongoDB', 'and JavaScript'];
  projects:string[] = ['e-commerce platforms', 'event management systems', 'budget planner applications', 'and real-time web solutions']

  getSkills():string{
    return this.skills.join(',');
  }
}
