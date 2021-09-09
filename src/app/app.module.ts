import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { MainComponent } from './main/main.component';
import { FactsComponent } from './main/facts/facts.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ResumeComponent } from './main/resume/resume.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { MyServicesComponent } from './main/my-services/my-services.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PortfolioDetailsComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MainComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    MyServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
