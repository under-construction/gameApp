import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/Services/game.service';
declare let alertify: any;

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
        () => this.successAlert(),
        err => console.log(err.message)
      );
    }
    else {
      this.validateForm();
    }
  }

  successAlert() {
    const innerHTML = 
    '<div style="display: flex"><div style="display: flex; align-items: center; margin-right: 10px;"><i class="fa fa-check" style="color: #fff; font-size: 1.75em;"></i></div><div style="display: flex; flex-direction: column; align-items: flex-start;"><div style="font-weight: bold; color: #eee;">success</div><div style="color: #eee;">game created successfully</div></div></div>'
    alertify.set('notifier', 'position', 'top-right');
    alertify.success(innerHTML, 2, () => window.location.replace('./'));
  }
}
