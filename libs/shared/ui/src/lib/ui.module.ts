import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTemplateComponent } from './table-template/table-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableTemplateComponent],
  exports: [TableTemplateComponent],
})
export class UiModule {}
