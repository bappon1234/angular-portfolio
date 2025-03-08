import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'my-skill', component:MySkillComponent},
  {path:'contact', component:ContactComponent},
  {path:'my-project', component:MyProjectsComponent},
  {path:'footer', component:FooterComponent},
  {path:'', redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
