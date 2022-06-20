import { Component } from '@angular/core';
import { argbFromHex, Hct } from '@material/material-color-utilities';

@Component({
	selector: 'app-root',
	templateUrl: './bootstrap.component.html',
	styles: [],
})
export class BootstrapComponent {
	title = 'hct';

	box: any[] = [];

	constructor() {

		const len = 10;

		for (let i = 0; i < len; i++) {
			const hue = 360 * i / len;
			const color = Hct.from(hue, 40, 80);
			console.log('hue', hue);
			const argb = this.argb(color.toInt());
			this.box.push(argb);
		}
	}

	argb(n: number) {
		const key = [3, 2, 1, 0];
		const re = Array(4);
		for (const i of key) {
			const x = n % 256;
			re[i] = x;
			if (i) {
				n -= x;
				n /= 256;
			}
		}
		return re;
	}
}
