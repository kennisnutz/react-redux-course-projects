import { configureStore } from '@reduxjs/toolkit';
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from './slices/carsSlice';
import { formReducer, changeCost, changeName } from './slices/formSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { addCar, removeCar, changeCost, changeName, changeSearchTerm, store };
