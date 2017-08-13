import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component'
import { AppComponent }  from './app.component';
import  { HeroService} from './hero.service'
import {RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot ([
  {
    path: 'heroes' ,
    component: HeroesComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
}, 
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}

])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
   
  ],
  providers: [HeroService],

  bootstrap: [ AppComponent ]
 
})
export class AppModule { }
