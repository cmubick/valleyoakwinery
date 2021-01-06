import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WinesComponent } from './wines/wines.component';
import { WineClubComponent } from './wine-club/wine-club.component';
import { PicturesComponent } from './pictures/pictures.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { OurStoryComponent } from './our-story/our-story.component';

const routes: Routes = [{
  path: '',
  component: OurStoryComponent
}, {
  path: 'wines',
  component: WinesComponent
}, {
  path: 'wine-club',
  component: WineClubComponent
}, {
  path: 'pictures',
  component: PicturesComponent
}
// , {
//   path: 'store',
//   component: StorefrontComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
