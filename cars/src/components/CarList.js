import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispactch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { list, searchTerm } }) => {
    const filteredCars = list.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const handleCarDelete = (car) => {
    dispactch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold ? 'bold' : ''}`}>
        <p>
          {car.name}- ${car.cost}
        </p>

        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
