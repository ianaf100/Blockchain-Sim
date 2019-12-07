import { Injectable } from '@angular/core';


/* SharedService stores various global option variables to be shared by multiple components/services
*/
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  maxAttempts: number
  leadZeros: string
  useEmbeddedEngine: boolean
  useLinearNonce: boolean

  constructor() {     
    this.maxAttempts = 1000000
    this.leadZeros = "000"
    this.useEmbeddedEngine = true
    this.useLinearNonce = true
  }
}
