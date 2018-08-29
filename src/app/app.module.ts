import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialNavComponent } from './my-material-nav/my-material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { DearPuppyComponent } from './dear-puppy/dear-puppy.component';
import { JhonathanComponent } from './jhonathan/jhonathan.component';


const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponentComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'dear-puppy', component: DearPuppyComponent },
  { path: 'jhonathan', component: JhonathanComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MyMaterialNavComponent,
    FirstComponentComponent,
    SecondComponent,
    DearPuppyComponent,
    JhonathanComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
