import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderhomeComponent } from './sliderhome/sliderhome.component';
import { InfohomeComponent } from './infohome/infohome.component';
import { FeatureshomeComponent } from './featureshome/featureshome.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallaryComponent,
    
    HeaderComponent,
    FooterComponent,
    SliderhomeComponent,
    InfohomeComponent,
    FeatureshomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
