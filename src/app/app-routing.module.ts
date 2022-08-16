import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCreationComponent } from './Components/game-creation/game-creation.component';
import { GameListComponent } from './Components/game-list/game-list.component';

const routes: Routes = [
  {path: '', component: GameListComponent},
  {path: 'create', component: GameCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
