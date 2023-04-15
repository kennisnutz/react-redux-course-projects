import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (currentIndex) => {
    setExpandedIndex((current) => {
      if (current === currentIndex) return -1;
      else return currentIndex;
    });
  };

  const renderedItems = items.map((item, i) => {
    const isExpanded = i === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {' '}
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-100 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(i)}
        >
          {item.label}
          {icon}
        </div>

        {isExpanded && <div className="border-b p-5">{item.Content}</div>}
      </div>
    );
  });

  return <div className="border-x bg-gray-50">{renderedItems}</div>;
}

export default Accordion;
