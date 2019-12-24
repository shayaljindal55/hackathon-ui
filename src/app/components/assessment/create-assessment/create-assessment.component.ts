import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html',
  styleUrls: ['./create-assessment.component.css'],
  providers: [AppService]
})
export class CreateAssessmentComponent implements OnInit {
  form: FormGroup;
  constructor(private appService: AppService, private formBuilder: FormBuilder,
    // private toast: ToastrService
    ) { }

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm() {
    const group = this.formBuilder.group({
      'assessmentCreationDate': '',
      'concernroleId': '',
      'createdBy': '',
      'riskOfHarmToOthers': '',
      'socialSupport': '',
      'specialNeedDisability': '',
      'suicidalThoughts': '',
      'visibleSignsOfInjury': ''
    });
    return group;
  }

  submitAssessment() {
    if (this.form.valid) {
      this.appService.createAssessment(this.form.value).then(res => {

      }, err => {
        // this.toast.error('Invaid form!');
      });
    } else {

    }
  }
}
