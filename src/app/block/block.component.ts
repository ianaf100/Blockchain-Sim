import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service'
import { HashService } from '../services/hash.service';
import { MiningEngineService } from '../services/mining-engine.service';
import { ExternalMiningService } from '../services/external-mining.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})


export class BlockComponent implements OnInit {
  @Input() count: number
  @Input() parentId: number    
  @Input() parentHash: string 
  
  id: string
  hash: string
  data: string
  nonce: number
  time: number
  isValid: boolean

  constructor(
    private messageService: MessageServiceService, 
    private hashService: HashService, 
    private miningEngine: MiningEngineService,
    private externalEngine: ExternalMiningService,
    private sharedService: SharedService) { 

    this.id = this.randomID()
    this.data = ""
    this.nonce = 0
    this.isValid = false
    this.time = 0
  }

  ngOnInit() {
    this.messageService.getMessage().subscribe(msg => {
      if (msg.id == this.parentId) {   // parent block hash has changed
        this.parentHash = msg.text
        this.updateHash()
        this.messageService.sendMessage(this.id, this.hash)  // notify child block of new hash
      }
    });
  }

  // on init, after injection
  ngOnChanges() {
    this.updateHash()
  }

  randomID() : string {
    return Math.random().toString(36).substr(2, 5) + '-' +
           Math.random().toString(36).substr(2, 5)
  };

  onMine() {
    if (this.sharedService.useEmbeddedEngine) {
      let result = this.miningEngine.mine(this.id, this.parentHash, this.data)
      this.nonce = result.nonce
      this.time = result.time
      this.onUpdate()
    
    } else {
      this.externalEngine.mine(this.id, this.parentHash, this.data).subscribe((response: any) => {
        this.nonce = response.nonce
        this.time = response.time
        this.onUpdate()
      })
    }
  }


  onUpdate() {
    this.updateHash()
    this.messageService.sendMessage(this.id, this.hash)
  }

  updateHash() {
    var hashInput = this.id + this.parentHash + this.data + this.nonce
    this.hash = this.hashService.generate(hashInput)
    if (this.hash.startsWith(this.sharedService.leadZeros) &&
        this.parentHash.startsWith(this.sharedService.leadZeros))
      this.isValid = true
    else 
      this.isValid = false
  }
}
