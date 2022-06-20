import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';

import { RoutingModule } from './routing.module';
import { BootstrapComponent } from './common/bootstrap.component';
import { SplitComponent } from './split/split.component';

@NgModule({
	declarations: [
		BootstrapComponent,
		SplitComponent,
	],
	imports: [
		BrowserModule,
		RoutingModule,
		MatSliderModule,
	],
	providers: [],
	bootstrap: [
		BootstrapComponent,
	],
})
export class AppModule { }
