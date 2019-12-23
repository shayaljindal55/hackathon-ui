import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { CreateOutcomePlanComponent } from './components/outcome-plan/create-outcome-plan/create-outcome-plan.component';
import { CreateAssessmentComponent } from './components/assessment/create-assessment/create-assessment.component';
import { CreatePersonComponent } from './components/person/create-person/create-person.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TabContentComponent,
    CreatePersonComponent,
    CreateOutcomePlanComponent,
    CreateAssessmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [HeaderComponent],
  exports: [MatToolbarModule, MatIconModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }