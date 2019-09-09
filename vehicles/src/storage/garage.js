import {obserbavle, action, computed} from 'mobx';

class CarGarage {
	@obserbavle cars = [];
	@action addCar = (car) => {
		this.cars.push(car);
	}
	@computed get carModel() {
		return this.cars.speed;
	}
}

const garage = new CarGarage();
export default garage;