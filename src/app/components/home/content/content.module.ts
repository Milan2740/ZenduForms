import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';

import { SubmissionComponent } from './submission/submission.component';
import { ContentComponent } from './content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { AgmOverlays } from 'agm-overlays';

@NgModule({
  declarations: [
    SubmissionComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: environment.AGM_API_KEY
    }),
  ]
})
export class ContentModule { }
