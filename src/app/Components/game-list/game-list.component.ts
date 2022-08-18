import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/Services/game.service';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];
  searchText: string = "";

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    this.gameService.GetAll()
    .subscribe(
      res => this.games = res,
      err => console.log(err.message)
    );
  }

  deleteGame(id: number) {
    this.gameService.Delete(id)
    .subscribe(
      () => this.getAllGames(),
      err => console.log(err.message)
    )
  }

  onInputChange(value: any) {
    alert(value);
  }
}
