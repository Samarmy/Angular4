import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CalenderComponent } from './calender/calender.component';
import { LibraryComponent } from './library/library.component';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio',      component: PortfolioComponent },
  { path: 'calender',      component: CalenderComponent },
  { path: 'library',      component: LibraryComponent },
  { path: 'videos',      component: VideosComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'settings',      component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    CalenderComponent,
    LibraryComponent,
    VideosComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
