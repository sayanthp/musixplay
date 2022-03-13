import { NgModule, ContentChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';
import { AccesdComponent } from './accesd/accesd.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"musics",component:ContentComponent},
{path:"music/search/:term",component:ResultComponent},
{path:"about",component:AboutComponent},
{path:"**",component:AccesdComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
