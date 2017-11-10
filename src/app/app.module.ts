import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HostListener } from '@angular/core';
import { PortraitsService } from './portraits-service.service';
import { PresentationsServiceService } from './presentations-service.service';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import { CarouselModule } from 'angular4-carousel';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FixedHeaderComponent } from './fixed-header/fixed-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { PortraitGalleryComponent } from './portrait-gallery/portrait-gallery.component';
import { PresentationGalleryComponent } from './presentation-gallery/presentation-gallery.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselPortraitsComponent } from './carousel-portraits/carousel-portraits.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DialogPortraitsComponent } from './dialog-portraits/dialog-portraits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FixedHeaderComponent,
    HomeContentComponent,
    PortraitGalleryComponent,
    PresentationGalleryComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    CarouselPortraitsComponent,
    ContactFormComponent,
    DialogPortraitsComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule],
    HttpClientModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    CarouselModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeContentComponent
      },
      {
        path: 'home',
        component: HomeContentComponent
      },
      {
        path: 'portraits',
        component: PortraitGalleryComponent
      },
      {
        path: 'presentations',
        component: PresentationGalleryComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  entryComponents: [DialogPortraitsComponent],
  providers: [PortraitsService, PresentationsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
