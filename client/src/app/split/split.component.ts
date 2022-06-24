import { Component } from '@angular/core';
import { Hct } from '@material/material-color-utilities';

interface Color {
	step: number;
	rgb: number[];
	hex: string;
	hct: number[];
}

@Component({
	selector: 'app-split',
	templateUrl: './split.component.html',
	styles: [
	],
})
export class SplitComponent {

	box: Color[] = [];
	split = 12;

	offset = 0;
	chroma = 90;
	tone = 60;

	select: Color|null = null;

	constructor() {
		this.changeSplit(this.split);
	}

	build() {
		this.select = null;
		this.box.length = 0;
		for (let i = 0; i < this.split; i++) {
			let hue = 360 * (i + this.offset / 100) / this.split;
			if (hue < 0) {
				hue += 360;
			} else if (hue >= 360) {
				hue -= 360;
			}
			const color = Hct.from(hue, this.chroma, this.tone);
			const n = color.toInt();
			const rgb = [
				n >> 16 & 255,
				n >> 8 & 255,
				n & 255,
			];
			const c = {
				step: i,
				rgb,
				hex: '#' + rgb.map(c => ('00' + c.toString(16)).slice(-2)).join(''),
				hct: [
					(hue === (hue | 0)) ? hue : parseFloat(hue.toFixed(2)),
					this.chroma,
					this.tone,
				],
			} as Color;
			this.box.push(c);
		}
	}

	changeSplit(e: number) {
		this.split = e;
		this.build();
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
