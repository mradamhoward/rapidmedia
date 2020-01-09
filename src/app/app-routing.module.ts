import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { ChatbotsComponent } from './components/chatbots/chatbots.component'
import { ContactComponent } from './components/contact/contact.component'
import { EcommerceComponent } from './components/ecommerce/ecommerce.component'
import { FacebookComponent } from './components/facebook/facebook.component'
import { InstagramComponent } from './components/instagram/instagram.component'
import { WebComponent } from './components/web/web.component'


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  { path: 'chatbots', component: ChatbotsComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'facebook', component: FacebookComponent },
  { path: 'web', component: WebComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
