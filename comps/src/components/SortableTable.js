import useSort from '../hooks/useSort';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable(props) {
  const { data, config } = props;
  const { sortOrder, sortBy, sortedData, setSortConfig } = useSort(
    data,
    config
  );

  const updatetdConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    const getIcons = (label, sortBy, sortOrder) => {
      if (label !== sortBy) {
        return (
          <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
          </div>
        );
      }
      if (sortOrder === null) {
        return (
          <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
          </div>
        );
      } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />;
      } else {
        return <GoArrowSmallDown />;
      }
    };
    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortConfig(column.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //Only sort data if sort order and sortby are not null
  // Make a copy of data array
  //define sort value function

  return (
    <div>
      <Table {...props} data={sortedData} config={updatetdConfig} />
    </div>
  );
}

export default SortableTable;
