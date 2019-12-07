import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'

import { MatToolbarModule, 
         MatButtonModule, 
         MatCardModule, 
         MatFormFieldModule, 
         MatInputModule, 
         MatSelectModule, 
         MatProgressSpinnerModule, 
         MatOptionModule, 
         MatRadioModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlockComponent } from './block/block.component';
import { OptionsComponent } from './options/options.component';
import { MessageServiceService } from './services/message-service.service';
import { HashService } from './services/hash.service';
import { MiningEngineService } from './services/mining-engine.service';
import { ExternalMiningService } from './services/external-mining.service';
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    BlockComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    MatProgressSpinnerModule, 
    MatOptionModule, 
    MatRadioModule,
    HttpClientModule,
  ],
  providers: [
    HashService, 
    MiningEngineService, 
    MessageServiceService, 
    ExternalMiningService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
