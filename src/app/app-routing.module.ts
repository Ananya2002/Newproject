import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'show', loadChildren: './show/show.module#ShowPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule {}
