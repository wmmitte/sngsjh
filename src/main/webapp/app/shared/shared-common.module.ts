import { NgModule } from '@angular/core';

import { SngsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SngsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SngsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SngsSharedCommonModule {}
