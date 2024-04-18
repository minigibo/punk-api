import { useState } from "react";
import "./Filter.scss";
import { FilterType } from "../../data/types";

type FiltersProps = {
  filters: FilterType[];
  handleChecked: (filter: FilterType, isChecked: boolean) => void;
};

const Filters = ({ filters, handleChecked }: FiltersProps) => {
  const [checkedFilters, setCheckedFilters] = useState<Record<string, boolean>>(
    {}
  );

  const toggleCheckbox = (filter: FilterType) => {
    const isChecked = !checkedFilters[filter.value];
    handleChecked(filter, isChecked);
    setCheckedFilters({ ...checkedFilters, [filter.value]: isChecked });
  };

  const getFilter = (filter: FilterType, index: number) => (
    <div key={index} className="filter-item">
      <label>{filter.label}</label>
      <input
        type="checkbox"
        value={filter.value}
        checked={checkedFilters[filter.value] || false}
        onChange={() => toggleCheckbox(filter)}
      />
    </div>
  );

  return (
    <div className="filters-list">
      <h4>Filters</h4>
      {filters.map(getFilter)}
    </div>
  );
};

export default Filters;
