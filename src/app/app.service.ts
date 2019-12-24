import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { OutcomePlanDetails } from './model-classes';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    private personAWSAPIUrl = environment.personAWSAPIUrl;


    createPerson(formData): Promise<any> {
        const payload = {
            'name': formData['name'],
            'ClientID': formData['clientID'],
            'contactNumber': formData['contactNumber'],
            'dateOfBirth': formData['dateOfBirth'],
            'emailAddress': formData['emailAddress'],
            'idType': formData['idType'],
            'language': formData['language'],
            'address': formData['address'],
            'createdOn': Date.now().toString(),
            'lastWrittenDate': Date.now().toString()
        };
        return new Promise((resolve, reject) => {
            return this.http.post(this.personAWSAPIUrl, payload)
                .pipe(take(1))
                .subscribe(
                    (data: any) => {
                        resolve(data);
                        // this.toastr.success('Person has been created successfully');
                    }, error => {
                        reject(error);
                        // this.toastr.error('Something went wrong!');
                    }
                );
        });
    }

    getPerson(concernRoleId): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.get(this.personAWSAPIUrl + concernRoleId)
                .pipe(take(1))
                .subscribe(
                    (data: any) => {
                        resolve(data);
                        // this.toastr.success('Outcome Plan has been created successfully');
                    }, error => {
                        reject(error);
                        // this.toastr.error('Something went wrong!');
                    }
                );
        });
    }

    createAssessment(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.post('https://prhhpmrjt3.execute-api.ap-southeast-1.amazonaws.com/dev', {
                'AssessmentCreationdate': Date.now().toString(),
                'Concernroleid': formData['concernroleId'],
                'Createdby': formData['createdBy'],
                'Riskofharmtoothers': formData['riskOfHarmToOthers'],
                'Socialsupport': formData['socialSupport'],
                'SpecialneedDisability': formData['specialNeedDisability'],
                'Suicidalthoughts': formData['suicidalThoughts'],
                'Visiblesignsofinjury': formData['visibleSignsOfInjury']
            })
                .pipe(take(1))
                .subscribe(
                    (data: any) => {
                        resolve(data);
                        // this.toastr.success('Assessment has been created successfully');
                    }, error => {
                        reject(error);
                        // this.toastr.error('Something went wrong!');
                    }
                );
        });
    }

    createOutcomePlan(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.post('https://prhhpmrjt3.execute-api.ap-southeast-1.amazonaws.com/dev', {
                'AssessmentCreationdate': formData['AssessmentCreationdate'],
                'Concernroleid': formData['Concernroleid'],
                'Createdby': formData['Createdby'],
                'Riskofharmtoothers': formData['Riskofharmtoothers'],
                'Socialsupport': formData['Socialsupport'],
                'SpecialneedDisability': formData['SpecialneedDisability'],
                'Suicidalthoughts': formData['Suicidalthoughts'],
                'Visiblesignsofinjury': formData['Visiblesignsofinjury']
            })
                .pipe(take(1))
                .subscribe(
                    (data: any) => {
                        resolve(data);
                    }, error => {
                        reject(error);
                        // this.toastr.error('Something went wrong!');
                    }
                );
        });
    }
}
