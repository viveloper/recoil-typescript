import React from 'react';
import { useRecoilState } from 'recoil';
import { Filter, todoListFilterState } from './state';

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setFilter(value as Filter);
  };
  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoListFilters;
