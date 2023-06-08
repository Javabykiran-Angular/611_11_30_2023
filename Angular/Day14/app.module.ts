import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { Fordirective2Component } from './fordirective2/fordirective2.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbildpipeComponent } from './inbildpipe/inbildpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './utility/course.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    Eventbinding3Component,
    TwowaybindingComponent,
    IfdirectiveComponent,
    FordirectiveComponent,
    Fordirective2Component,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    InbildpipeComponent,
    CustompipeComponent,
    SummaryPipe,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
