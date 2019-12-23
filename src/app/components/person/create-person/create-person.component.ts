import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
  providers: [AppService]
})
export class CreatePersonComponent implements OnInit {

  constructor(private appService: AppService) { }
  languages = [{
    'id': 1, 'language': 'English'
  },
  { 'id': 2, 'language': 'Malay' },
  { 'id': 3, 'language': 'Chinese' },
  { 'id': 4, 'language': 'Telegu' },
  {
    'id': 5, 'language': 'Others'
  }];

  idTypes = [{
    'id': 1, 'type': 'NRIC'
  },
  { 'id': 2, 'type': 'FIN' },
  { 'id': 3, 'type': 'Passport' },
  { 'id': 4, 'type': 'Driving License' },
  {
    'id': 5, 'type': 'Others'
  }];

  ngOnInit() {
  }

  submitPerson(formPayload) {
    this.appService.createPerson([]).then(res => {

    }, err => {

    });
  }
}
