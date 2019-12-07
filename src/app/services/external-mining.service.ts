import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


/* ExternalMiningService sends requests to an external web service for blockchain mining
*/
@Injectable({
  providedIn: 'root'
})
export class ExternalMiningService {

  url = "http://localhost:5000/blockchain"

  constructor(
    private http: HttpClient,
    private sharedService: SharedService) { }


  mine(id: string, parentHash: string, data: string) {
    let request = JSON.stringify({
      'id': id,
      'parentHash': parentHash,
      'data': data,
      'maxAttempts': this.sharedService.maxAttempts,
      'prefix': this.sharedService.leadZeros,
      'useLinear': this.sharedService.useLinearNonce ? 1 : 0
    })

    return this.http.post(this.url, request, {headers: {'Content-Type': 'application/json', }})
  }

}
