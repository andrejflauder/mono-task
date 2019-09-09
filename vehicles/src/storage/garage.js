import {observable, action, computed} from 'mobx';

class CarGarage {
	@observable cars = [];
	@action addCar = (car) => {
		this.cars.push(car);
	}
	@computed get carModel() {
		return this.cars.speed;
	}
}

const garage = new CarGarage();
export default garage;