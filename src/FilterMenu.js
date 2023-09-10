import React, { useState, useEffect } from 'react';

export function FilterMenu(props) {
  const [open, setOpen] = useState(-1);
  const [activeOptions, setActiveOptions] = useState([]);
  const [activeStack, setActiveStack ] = useState(props.activeStack || -1);

  const key = props.stackKey === undefined ? 0 : props.stackKey;

  const onActivate = (o, i) => {
    const newActive = [...activeOptions];
    newActive[i] = activeOptions[i] === undefined ? o.filter : undefined;
    setActiveOptions(newActive);
    const activeFilters = newActive.filter(f => f !== undefined);
    if (props.onFilter)
      props.onFilter({
        stackKey: key,
        filters:activeFilters
      });
    if (activeFilters.length > 0)
      setActiveStack(key);
  };

  const onChildActivate = (filterData) => {
    setActiveOptions([]);
    setActiveStack(filterData.stackKey);
    if (props.onFilter) props.onFilter(filterData);
  };

  useEffect(() => {
    if (props.activeStack !== key) setActiveOptions([]);
  }, [props.activeStack]);

  return (
      <ul style={props.style}>
        {props.options.map((option, i) => (
            <li key={option.name} className={activeOptions[i] !== undefined ? 'active' : undefined}>
              {open === i && <span className="expand" onClick={() => setOpen(-1)}>&lt;</span>}
              <span className="name" onClick={() => onActivate(option, i)}>{option.name}</span>
              {open !== i && option.options && <span className="expand" onClick={() => setOpen(i)}>&gt;</span>}
              {option.options &&
                  <FilterMenu
                      stackKey={key+"."+i}
                      style={open !== i ? {...props.style, display: 'none' } : props.style}
                      options={option.options}
                      onFilter={onChildActivate}
                      activeStack={activeStack}
                  />
              }
            </li>
        ))}
      </ul>
  );
}
