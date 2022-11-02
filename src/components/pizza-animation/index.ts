import mojs, { CustomShape } from "@mojs/core";

export class PizzaShape extends CustomShape {
	getShape() {
		return `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#F72E12;" d="M502.865,188.049C473.095,79.648,373.856,0,256,0C114.615,0,0,114.615,0,256
	c0,117.856,79.648,217.094,188.049,246.865L502.865,188.049z"/>
<path style="fill:#B51E39;" d="M512,256c0-23.529-3.191-46.309-9.135-67.951l-89.458-89.458L98.592,413.408l89.458,89.458
	c21.641,5.944,44.422,9.135,67.951,9.135C397.385,512,512,397.384,512,256z"/>
<path style="fill:#FC870B;" d="M448.811,144.68h-51.182v222.639h51.182c18.947-32.746,29.797-70.764,29.797-111.319
	S467.759,177.427,448.811,144.68z"/>
<g>
	<path style="fill:#FA690E;" d="M256,33.391l-22.261,55.652l186.151,72.334l28.921-16.698C410.319,78.153,338.389,33.391,256,33.391
		z"/>
	<path style="fill:#FA690E;" d="M419.89,350.622l-186.151,72.334L256,478.609c82.389,0,154.319-44.762,192.811-111.289
		L419.89,350.622z"/>
</g>
<path style="fill:#FDA409;" d="M63.189,144.68C44.241,177.427,33.391,215.445,33.391,256s10.85,78.573,29.797,111.32h40.052V144.68
	H63.189z"/>
<g>
	<path style="fill:#FC870B;" d="M63.189,144.68l28.921,16.698L256,66.783V33.391C173.611,33.391,101.681,78.153,63.189,144.68z"/>
	<path style="fill:#FC870B;" d="M92.11,350.622L63.189,367.32C101.681,433.847,173.611,478.609,256,478.609v-33.391L92.11,350.622z"
		/>
</g>
<g>
	<path style="fill:#FFF3AD;" d="M92.11,350.622C76.005,322.787,66.783,290.472,66.783,256s9.223-66.787,25.327-94.622h55.652
		L256,256l-108.238,94.622H92.11z"/>
	<path style="fill:#FFF3AD;" d="M419.89,350.622c16.105-27.835,25.327-60.15,25.327-94.622s-9.223-66.787-25.327-94.622h-55.652
		L256,256l108.238,94.622H419.89z"/>
</g>
<g>
	<path style="fill:#FFE376;" d="M256,445.217c70.03,0,131.171-38.048,163.89-94.595L256,256l-22.261,97.951L256,445.217z"/>
	<path style="fill:#FFE376;" d="M256,66.783l-22.261,94.609L256,256l163.89-94.622C387.171,104.831,326.03,66.783,256,66.783z"/>
</g>
<g>
	<path style="fill:#FFFFFF;" d="M256,66.783c-70.03,0-131.171,38.048-163.89,94.595L256,256V66.783z"/>
	<path style="fill:#FFFFFF;" d="M92.11,350.622c32.719,56.547,93.86,94.595,163.89,94.595V256L92.11,350.622z"/>
</g>
<g>
	<circle style="fill:#F72E12;" cx="325.565" cy="376.487" r="27.826"/>
	<circle style="fill:#F72E12;" cx="395.13" cy="256" r="27.826"/>
	<circle style="fill:#F72E12;" cx="325.565" cy="135.513" r="27.826"/>
</g>
<g>
	<circle style="fill:#F8513A;" cx="186.435" cy="135.513" r="27.826"/>
	<circle style="fill:#F8513A;" cx="116.87" cy="256" r="27.826"/>
	<circle style="fill:#F8513A;" cx="186.435" cy="376.487" r="27.826"/>
</g>
<g>
	
		<rect x="280.051" y="305.821" transform="matrix(-0.866 0.5 -0.5 -0.866 701.8283 445.8432)" style="fill:#A0AD2F;" width="22.26" height="22.26"/>
	<rect x="315.27" y="244.87" style="fill:#A0AD2F;" width="22.261" height="22.261"/>
	
		<rect x="280.083" y="183.919" transform="matrix(0.866 0.5 -0.5 0.866 136.5438 -119.4771)" style="fill:#A0AD2F;" width="22.26" height="22.26"/>
</g>
<g>
	
		<rect x="209.679" y="183.919" transform="matrix(0.866 -0.5 0.5 0.866 -67.9425 136.5397)" style="fill:#BEC130;" width="22.26" height="22.26"/>
	<rect x="174.47" y="244.87" style="fill:#BEC130;" width="22.261" height="22.261"/>
	
		<rect x="209.667" y="305.821" transform="matrix(-0.866 -0.5 0.5 -0.866 253.5319 701.8377)" style="fill:#BEC130;" width="22.26" height="22.26"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        `;
	}
}
mojs.addShape('pizza', PizzaShape);
const timeline = new mojs.Timeline({ speed: 1.5 });
const RADIUS = 28


const burst = new mojs.Burst({
	left: 0, top: 0,
	radius: { 6: RADIUS - 1 },
	scale: { 0: 1.5 },

	angle: 45,
	children: {
		shape: 'pizza',
		radius: RADIUS / 1.5,
		fill: '#FD7932',
		degreeShift: 'stagger(0,-5)',
		duration: 1700,
		delay: 200,
		easing: 'quad.out',
	}
});
const pizzaShape = new mojs.Shape({
	shape: 'pizza',
	left: 0,
	top: 0,
	fill: '#FF9C00',
	scale: { 0: 1.5 },
	easing: 'cubic.out',
	duration: 1700,
	delay: 300,
	radius: RADIUS / 1,
	isSoftHide: true,
	opacity: { 100: 0 },
	isShowEnd: false,

});
export const specialPizzaShape = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	pizzaShape.tune({ x: e.pageX + 20, y: e.pageY - 50 }).setSpeed(3)
	burst.tune({ x: e.pageX + 5, y: e.pageY - 65 });
	timeline.add(pizzaShape, burst);
	timeline.replay()
} 