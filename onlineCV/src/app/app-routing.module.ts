import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ExperienceDetailsComponent } from './component/experience/my-experience/experience-details/experience-details.component';
import { SkillsDetailsComponent } from './component/skills/my-skills/skills-details/skills-details.component';
import { TrainingDetailsComponent } from './component/training/my-training/training-details/training-details.component';
import { MyHobbiesComponent } from './component/hobbies/my-hobbies/my-hobbies.component';
import { DescriptionComponent } from './pages/description/description.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CvComponent } from './pages/cv/cv.component';
import { ExperienceDescriptionComponent } from './component/experience/my-experience/experience-details/experience-description/experience-description.component';

const routes: Routes = [
  { path: '', component: LayoutComponent},
  { path: 'cv', component: CvComponent, children: [
    { path: '', component: DescriptionComponent, outlet: 'cv'  },
      { path: 'experience', component: ExperienceDetailsComponent,  outlet: 'cv', children: [
        { path: 'description', component: ExperienceDescriptionComponent }
      ] },
      { path: 'skills', component: SkillsDetailsComponent},
      { path: 'training', component: TrainingDetailsComponent },
      { path: 'hobbies', component: MyHobbiesComponent }
  ] },
 
      
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
