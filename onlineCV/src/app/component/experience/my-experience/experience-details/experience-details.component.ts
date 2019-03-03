import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../experience.service';
import { Experience } from '../../models/Experience';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
  experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() {
    this.experienceService.getExperiences()
      .subscribe((experiences: Experience[]) => {
        this.experiences = experiences;
        console.log(this.experiences);
      },
    (error) => {
      console.log("ERROR RESOLVING getExperience()", error);
    })
  }
}
