import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/tr';

import { FindLanguageFromKeyPipe } from 'app/shared';
@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'tr'
        },
        FindLanguageFromKeyPipe,
        DatePipe
    ]
})
export class JhEnfTestCoreModule {
    constructor() {
        registerLocaleData(locale);
    }
}
