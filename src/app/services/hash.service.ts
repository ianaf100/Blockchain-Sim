import { Injectable } from '@angular/core';
import { Sha256 } from '../sha-256.js';


/* HashService provides a SHA-256 hash function
*/
@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  generate(input : string) : string {
    return Sha256.hash(input)
  }
}
