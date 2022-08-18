import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/Services/game.service';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  gameForm = new FormGroup({
    gameName: new FormControl('', [Validators.required]),
    bundle: new FormControl('', [Validators.required, Validators.pattern('/^([A-Za-z]{1}[A-Za-z\\d_]*\\.)+[A-Za-z][A-Za-z\\d_]*$/')]),
    owner: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\\..+$')]),
    photo: new FormControl('', Validators.required)
  });

  isX: boolean = true;

  get formData() { return this.gameForm.controls; };

  constructor(
    private gameService: GameService
  ) { }

  validateForm() { 
    for(let i in this.gameForm.controls)
        this.gameForm.controls[i].markAsTouched();
  }

  ngOnInit(): void {
  }
  
  onSubmit(gameForm: FormGroup) {
    if (this.gameForm.valid) {
      this.gameService.Insert(gameForm.value)
      .subscribe(
        () => window.location.replace('./'),
        err => console.log(err.message)
      );
    }
    else {
      this.validateForm();
    }
  }
}
