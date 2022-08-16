import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  gameForm = new FormGroup({
    gameName: new FormControl(''),
    bundle: new FormControl(''),
    owner: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
