import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WinesComponent } from './wines/wines.component';
import { WinesDetailComponent } from './wines-detail/wines-detail.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { PicturesComponent } from './pictures/pictures.component';
import { WineClubComponent } from './wine-club/wine-club.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookFeedComponent } from './facebook-feed/facebook-feed.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { OurStoryComponent } from './our-story/our-story.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WinesComponent,
    WinesDetailComponent,
    StorefrontComponent,
    PicturesComponent,
    WineClubComponent,
    MailingListComponent,
    MapComponent,
    FooterComponent,
    FacebookFeedComponent,
    InstagramFeedComponent,
    PrivacyComponent,
    OurStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
