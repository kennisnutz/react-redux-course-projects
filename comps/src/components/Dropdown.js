import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [openMenu, setOpenMenu] = useState(false);
  const divElement = useRef();

  const handleMenuOpen = () => {
    setOpenMenu((currentIsOpen) => !openMenu);
  };

  const handleOptionClick = (chosenIndex) => {
    setOpenMenu(false);
    onChange(chosenIndex);
  };

  const renderedOptions = options.map((item, i) => (
    <div
      onClick={() => handleOptionClick(item)}
      key={item.value}
      className="hover:bg-sky-400 rounded cursor-pointer p-1"
    >
      {item.label}
    </div>
  ));

  useEffect(() => {
    //to close the dropdown when user clicks outside the dropdown
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener('click', handler, true);
    //clean up
    return () => {
      document.removeEventListener('click', handler, true);
    };
  }, []);

  return (
    <div className="w-48 relative" ref={divElement}>
      <Panel
        onClick={handleMenuOpen}
        className="flex justify-between item-center cursor-pointer"
      >
        {value?.label || 'Select...'}
        <span className="text-xl">
          {openMenu ? <GoChevronUp /> : <GoChevronDown />}
        </span>
      </Panel>
      {openMenu && (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
