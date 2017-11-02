import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

import { HeaderComponent } from './header/header.component';
import { FixedHeaderComponent } from './fixed-header/fixed-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { PortraitGalleryComponent } from './portrait-gallery/portrait-gallery.component';
import { PresentationGalleryComponent } from './presentation-gallery/presentation-gallery.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FixedHeaderComponent,
    HomeContentComponent,
    PortraitGalleryComponent,
    PresentationGalleryComponent,
    AboutComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
