import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/inicio/principal/principal.component';
import { GistComponent } from './components/github/gist/gist.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'gist', component: GistComponent},

  
  { path:'**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
