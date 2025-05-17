import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { MySkillComponent } from "../my-skill/my-skill.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AboutComponent, MySkillComponent, MyProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
