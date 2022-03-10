import { UrlModule } from '@spartacus/core';
import { CmsPageGuard } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule
  ]
})
export class ContactModule { }
