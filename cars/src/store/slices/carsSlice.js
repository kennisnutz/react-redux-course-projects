import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    list: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //actions.payload==={name: 'ab', cost:100}

      state.list.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      //action.payload===the id of car to be deleted
      const updated = state.list.filter((car) => {
        return car.id !== action.payload;
      });
      state.list = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
