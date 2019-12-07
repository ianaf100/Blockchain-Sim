import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


/* OptionsComponent consists of the various options that are given to the mining engine 
*/
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  attempts: number = 1000000
  difficulty: string = "000"
  nonceGenerator: string = "linear"
  selectedEngine: string = "embedded"
  engines = [
    {value: 'embedded', viewValue: "Use Embedded Mining Engine"},
    {value: 'external', viewValue: "Use External Mining Engine"}
  ]

  constructor(private sharedService: SharedService) { }

  updateNonce() {
    if (this.nonceGenerator === 'linear')
      this.sharedService.useLinearNonce = true
    else
      this.sharedService.useLinearNonce = false
  }

  updateAttempts() {
    this.sharedService.maxAttempts = this.attempts
  }

  updateDifficulty() {
    this.sharedService.leadZeros = this.difficulty
  }

  updateEngine() {
    if (this.selectedEngine === 'embedded')
      this.sharedService.useEmbeddedEngine = true
    else
      this.sharedService.useEmbeddedEngine = false
  }

  ngOnInit() { }

}
