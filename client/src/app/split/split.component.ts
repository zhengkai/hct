import { Component } from '@angular/core';
import { Hct } from '@material/material-color-utilities';

@Component({
	selector: 'app-split',
	templateUrl: './split.component.html',
	styles: [
	],
})
export class SplitComponent {

	box: number[][] = [];
	split = 10;

	offset = 0;
	chroma = 80;
	tone = 50;

	constructor() {
		this.changeSplit(this.split);
	}

	build() {
		this.box.length = 0;
		for (let i = 0; i < this.split; i++) {
			let hue = 360 * (i + this.offset / 100) / this.split;
			if (hue < 0) {
				hue += 360;
			} else if (hue >= 360) {
				hue -= 360;
			}
			const color = Hct.from(hue, this.chroma, this.tone);
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

	changeSplit(e: number) {
		if (e !== this.box.length) {
			this.split = e;
			this.build();
		}
	}

	changeOffset(e: number) {
		this.offset = e;
		this.build();
	}

	changeChroma(e: number) {
		this.chroma = e;
		this.build();
	}

	changeTone(e: number) {
		this.tone = e;
		this.build();
	}
}
