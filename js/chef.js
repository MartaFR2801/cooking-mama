class Chef {
	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = 100;
		this.height = 100;
		this.vy = 0;
		this.vx = 0;
		this.speed = 4;
		this.img = new Image();
		this.img.src = "./images/chef.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		}; 
		this.movements = {
			left: false,
			right: false,
			up: false,
			down: false
		};
		this.counter = 0;
		

	 }

 draw() {
	if (this.isReady) {
		this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		this.counter++;
	}
	
 }
 
move() {
	this.x += this.vx;
	this.y += this.vy;

	if (this.movements.left) {
		this.vx = -this.speed;
	} else if (this.movements.right) {
		this.vx = this.speed;
	} else {
		this.vx = 0;
	};

	if (this.movements.up) {
		this.vy = -this.speed;
	} else if (this.movements.down) {
		this.vy = this.speed;
	} else {
		this.vy = 0;
	};

	if (this.x <= 0) {
		this.x = 0;
	} else if (this.x + this.width >= this.ctx.canvas.width) {
		this.x = this.ctx.canvas.width - this.width;
	}

	if (this.y <= 55) {
		this.y = 55;
	} else if (this.y + this.height >= this.ctx.canvas.height) {
		this.y = this.ctx.canvas.height - this.height;
	}
	}

	onKeyEvent(event) {
		const isKeyDown = event.type === 'keydown';
		if (event.keyCode === 37) {
			this.movements.left = isKeyDown;
		} else if (event.keyCode === 39) {
			this.movements.right = isKeyDown;
		} else if (event.keyCode === 38) {
			this.movements.up = isKeyDown;
		} else if (event.keyCode === 40) {
			this.movements.down = isKeyDown;
		}
	} 
	isColliding(ingredient) {
		const threshold = 25;
		return this.x + threshold < ingredient.x + ingredient.width
			&& this.x + this.width > ingredient.x + threshold
			&& this.y + threshold < ingredient.y + ingredient.height
			&& this.y + this.height > ingredient.y + threshold;
	}
}
//cuando el chef coja un ingredient que suene una musiquita
