import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './pages/result/result.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailedItemComponent } from './pages/detailed-item/detailed-item.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeRoutingModule, ResultComponent, DetailedItemComponent],
  exports: [ResultComponent],
})
export class YoutubeModule {}
