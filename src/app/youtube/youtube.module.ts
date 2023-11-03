import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './components/result/result.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeRoutingModule, ResultComponent],
  exports: [ResultComponent],
})
export class YoutubeModule {}
