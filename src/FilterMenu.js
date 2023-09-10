import React, { useState, useEffect } from 'react';

export function FilterMenu(props) {
  const { options, onFilter, style, parentActive } = props;
  const [open, setOpen] = useState(-1);
  const [active, setActive] = useState([]);

  const onActivate = (o, i) => {
    const newActive = [...active];
    newActive[i] = active[i] === undefined ? o.filter : undefined;
    setActive(newActive);
    if (onFilter) onFilter(newActive.filter(f => f !== undefined));
  };

  const onChildActivate = (childFilters) => {
    setActive([]);
    if (onFilter) onFilter(childFilters);
  };

  useEffect(() => {
    if (parentActive) setActive([]);
  }, [parentActive]);

  return (
      <ul style={style}>
        {options.map((option, i) => (
            <li key={option.name} className={active[i] !== undefined ? 'active' : undefined}>
              {open === i && <span className="expand" onClick={() => setOpen(-1)}>&lt;</span>}
              <span className="name" onClick={() => onActivate(option, i)}>{option.name}</span>
              {open !== i && option.options && <span className="expand" onClick={() => setOpen(i)}>&gt;</span>}
              {option.options && (
                  <FilterMenu
                      style={open !== i ? { display: 'none' } : undefined}
                      options={option.options}
                      onFilter={onChildActivate}
                      parentActive={active[i] !== undefined}
                  />
              )}
            </li>
        ))}
      </ul>
  );
}
