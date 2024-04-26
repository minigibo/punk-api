import { useState, useEffect } from "react";
import "./Filter.scss";
import { FilterType } from "../../data/types";

type FiltersProps = {
  handleFiltersChange: (filters: string[]) => void;
  activeFilters: string[];
};

const Filters = ({ handleFiltersChange, activeFilters }: FiltersProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    setSelectedFilters(activeFilters);
  }, [activeFilters]);

  const toggleCheckbox = (filter: FilterType) => {
    const isSelected = selectedFilters.includes(filter.value);
    let updatedFilters: string[];

    if (isSelected) {
      updatedFilters = selectedFilters.filter(
        (selected) => selected !== filter.value
      );
    } else {
      updatedFilters = [...selectedFilters, filter.value];
    }

    setSelectedFilters(updatedFilters);
    handleFiltersChange(updatedFilters);
  };

  const getFilter = (filter: FilterType, index: number) => (
    <div key={index} className="filter-item">
      <label>{filter.label}</label>
      <input
        type="checkbox"
        value={filter.value}
        checked={selectedFilters.includes(filter.value)}
        onChange={() => toggleCheckbox(filter)}
      />
    </div>
  );

  const filters: FilterType[] = [
    {
      label: "High Alcohol (ABV > 6%)",
      value: "highAlcohol",
      isChecked: false,
    },
    {
      label: "Classic Range (Before 2010)",
      value: "classicRange",
      isChecked: false,
    },
    { label: "High Acidity (pH < 4)", value: "highAcidity", isChecked: false },
  ];

  return (
    <div className="filters-list" data-testid="filters-list">
      {filters.map((filter, index) => getFilter(filter, index))}
    </div>
  );
};

export default Filters;
