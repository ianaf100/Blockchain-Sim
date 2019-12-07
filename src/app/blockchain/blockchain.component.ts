import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlockComponent } from '../block/block.component';


// Represents a block upon creation, with a reference to its parent block
export class BlockTemplate {
  parentId: string
  parentHash: string

  constructor(id: string, hash: string) {
    this.parentId = id
    this.parentHash = hash
  }
}

/* BlockchainComponent represents the blockchain as a whole, as well as the Create Block and Reset buttons 
*/
@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
 
  /* array of blocks in the chain */
  chain: BlockTemplate[];    
  /* reference to already-created Block components */
  @ViewChildren(BlockComponent) blockComponents: QueryList<BlockComponent>  
  
  constructor() { 
    this.chain = []
  }

  onCreate() {
    var previousHash, previousId

    if (this.chain.length == 0) {
      previousHash = previousId = "0000000000000000000000000000000000000000"
    } else {
      previousHash = this.blockComponents.last.hash  // current hash of previous block
      previousId = this.blockComponents.last.id
    }
    
    var newBlock = new BlockTemplate(previousId, previousHash)
    this.chain.push(newBlock)
  }
 
  onReset() {
    this.chain = []
  } 

  ngOnInit() { }

}