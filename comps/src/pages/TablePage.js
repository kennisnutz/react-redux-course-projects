import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Bannana', color: 'bg-yellow-500', score: 9 },
    { name: 'Mango', color: 'bg-green-500', score: 3 },
    { name: 'Guava', color: 'bg-gray-500', score: 4 },
  ];

  const config = [
    {
      label: 'Fruit',
      renderFunction: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      renderFunction: (fruit) => (
        <div className={`p-3 m-2 ${fruit.color}`}></div>
      ),
    },
    {
      label: 'Score',
      renderFunction: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
