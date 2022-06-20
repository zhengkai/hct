import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './common/bootstrap.component';

@NgModule({
	declarations: [
		BootstrapComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [
		BootstrapComponent,
	],
})
export class AppModule { }
