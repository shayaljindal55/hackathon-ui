import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { OutcomePlanDetails } from './model-classes';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';


@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    private baseurl = environment.awsAPIUrl;


    createPerson(formData): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.post(this.baseurl + `createPerson`, formData)
                .pipe(take(1))
                .subscribe(
                    (data: any) => {
                        resolve(data);
                    }, error => {
                        reject(error);
                    }
                );
        });
    }
}
