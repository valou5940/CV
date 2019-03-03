import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceModule } from './component/experience/experience.module';
import { MyHobbiesComponent } from './component/hobbies/my-hobbies/my-hobbies.component';
import { MySkillsComponent } from './component/skills/my-skills/my-skills.component';
import { SkillsDetailsComponent } from './component/skills/my-skills/skills-details/skills-details.component';
import { MyTrainingComponent } from './component/training/my-training/my-training.component';
import { TrainingDetailsComponent } from './component/training/my-training/training-details/training-details.component';
import { CvComponent } from './pages/cv/cv.component';
import { DescriptionComponent } from './pages/description/description.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MySkillsComponent,
    LayoutComponent,
    HeaderComponent,
    SkillsDetailsComponent,
    MyTrainingComponent,
    TrainingDetailsComponent,
    MyHobbiesComponent,
    DescriptionComponent,
    CvComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule, 
    BrowserModule,
    HttpClientModule,
    ExperienceModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
