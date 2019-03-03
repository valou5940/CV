import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceDetailsComponent } from './my-experience/experience-details/experience-details.component';
import { ExperienceService } from './experience.service';
import { ExperienceDescriptionComponent } from './my-experience/experience-details/experience-description/experience-description.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ExperienceDetailsComponent, ExperienceDescriptionComponent, MyExperienceComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ExperienceDetailsComponent,ExperienceDescriptionComponent,MyExperienceComponent ],
  providers: [ExperienceService],
})
export class ExperienceModule { }
