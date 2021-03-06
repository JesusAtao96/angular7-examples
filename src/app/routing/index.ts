import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sm', loadChildren: '../rxjs-subscription-management/index' },
  { path: 'async', loadChildren: '../async-pipe-issues/index' },
  { path: 'dumb', loadChildren: '../dumb-components/index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
