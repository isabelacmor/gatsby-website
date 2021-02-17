import React, { useEffect, useState } from "react";
import { EventType } from "../TimelineEvent/TimelineEvent";
import styles from "./styles.module.scss";

export interface FilterOption {
    title: string;
    checked: boolean;
    type: EventType;
}

export interface FilterProps {
  options: FilterOption[];
  onChange: (options: FilterOption[]) => void;
}

export default function Filter(props: FilterProps) {
  const { options, onChange } = props;
  const [ filterOptions, setFilterOptions ] = useState(options);

  const updateFilter = (index: number) => {
    const newFilters = [...filterOptions];
    newFilters[index].checked = !newFilters[index].checked;
    setFilterOptions(newFilters);
    onChange(newFilters);
  }

  return (
    <div className={styles.filterContainer}>
        {filterOptions.map((option: FilterOption, index: number) => {
          return (
            <>
              {/* We keep the input's onClick here for accessibility reasons, even though it's visually hidden */}
              <input 
                type="checkbox" 
                checked={option.checked ?? undefined} 
                id={EventType[option.type]}
                onClick={() => updateFilter(index)}
              />
              <label onClick={() => updateFilter(index)}>{option.title}</label>
            </>
          );
        })}
    </div>
  );
}
