import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function DropDownPage() {
  const [value, setValue] = useState(null);

  const handleSelect = (option) => {
    setValue(option);
  };
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Purple', value: 'purple' },
    { label: 'Orange', value: 'orange' },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={value} onChange={handleSelect} />
    </div>
  );
}

export default DropDownPage;
