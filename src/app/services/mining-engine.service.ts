import { Injectable } from '@angular/core';
import { HashService } from './hash.service';
import { Random } from '../prng'
import { SharedService } from './shared.service';


/* MiningEngineService performs embedded blockchain mining
*/
@Injectable({
  providedIn: 'root'
})
export class MiningEngineService {

  constructor(
    private hashService: HashService,
    private sharedService: SharedService) {
  }

/*  returns a JSON object 
     {'nonce': the resulting nonce,
      'time':  the time in ms to produce nonce 
     }  
*/
  mine(id: string, parentHash: string, data: string) {
    var hashInput = id + parentHash + data
    
    if (this.sharedService.useLinearNonce) {
      return this.linearMine(hashInput)
    } else {
      return this.randomMine(hashInput)
    }
  }

  // performs mining by generating nonce values linearly
  linearMine(hashInput: string) {
    let start = Date.now()
    let nonce
    for (nonce = 0; nonce < this.sharedService.maxAttempts; nonce++) {
      var newHash = this.hashService.generate(hashInput + nonce)
      if (newHash.startsWith(this.sharedService.leadZeros)) {
        break
      }
    }
    let elapsedTime = Date.now() - start
    return {
      "nonce": nonce,
      "time": elapsedTime
    }
  }

  // performs mining by generating nonce values randomly
  randomMine(hashInput: string) {
    let start = Date.now()
    let random = new Random(Date.now())
    let nonce
    for (let i = 0; i < this.sharedService.maxAttempts; i++) {
      nonce = random.next()
      let newHash = this.hashService.generate(hashInput + nonce)
      if (newHash.startsWith(this.sharedService.leadZeros)) {
        break
      }
    }
    let elapsedTime = Date.now() - start
    return {
      "nonce": nonce,
      "time": elapsedTime
    }
  }
}