import { NgModule } from '@angular/core';
import { SfButtonModule } from '@safire/components/button';

export * from '@safire/components/button';


@NgModule({
  exports: [SfButtonModule]
})
export class SfComponentsModule {
}
