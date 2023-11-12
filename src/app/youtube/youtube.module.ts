import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './pages/result/result.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailedItemComponent } from './pages/detailed-item/detailed-item.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StartInterceptor } from './interceptors/start.interceptor';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { SnippetInterceptor } from './interceptors/snippet.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeRoutingModule, ResultComponent, DetailedItemComponent],
  exports: [ResultComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: StartInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SnippetInterceptor, multi: true },
  ],
})
export class YoutubeModule {}
