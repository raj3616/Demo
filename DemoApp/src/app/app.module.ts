import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FootComponent } from './foot/foot.component';
import { MainComponent } from './main/main.component';
import { RformComponent } from './rform/rform.component';
import { MatSelectModule } from '@angular/material/select';
import { ImgsilderComponent } from './imgsilder/imgsilder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { UserPorfileComponent } from './user-porfile/user-porfile.component';
import { LocalServiceService } from './local-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FootComponent,
    MainComponent,
    RformComponent,
    ImgsilderComponent,
    HomeComponent,
    UserPorfileComponent,
    

  ],
  entryComponents: [RformComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OwlModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
    
  ],
  providers: [LocalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
