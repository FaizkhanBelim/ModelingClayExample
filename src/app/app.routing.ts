import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';

import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: GalleryComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'image/:id', component: ImageComponent },
    { path: 'product', component: ProductComponent },
    { path: 'price', component: PricingComponent},
    { path: 'home', component: HomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
