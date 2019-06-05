import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './components/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MessagesComponent],
  exports: [MessagesComponent],
  providers: [MessageService]
})
export class MessagesModule {}
