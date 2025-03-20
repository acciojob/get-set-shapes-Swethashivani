//complete this code
class Rectangle {
	constructor(width, height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
  getArea(){
	  let area= (this._width)*(this._height);
	  return area;
  }
}

class Square extends Rectangle {
	constructor(side) {
        super(side, side); // Call the Rectangle constructor with equal width and height
    }

    getPerimeter() {
        return 4 * this._width; // Since width and height are the same in a square
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
