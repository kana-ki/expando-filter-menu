import {useEffect, useState} from "react";

function buildFilterFn(filters) {
  return v => {
    for (let filter of filters) {
      if (filter.active) {

      }
    }
  }

}


export function FilterMenu(props) {
  const options = props.options;
  const onFilter = props.onFilter;

  const [ open, setOpen ] = useState(-1);
  const [ active, setActive ] = useState([]);

  const onActivate = (o, i) => {
    const newActive = [ ...active ];
    newActive[i] = active[i] === undefined ? o.filter : undefined;
    setActive(newActive);
    if (onFilter) onFilter(newActive.filter(f => f !== undefined));
  };

  useEffect(() => {
    if (props.parentActive)
      setActive([]);
  }, [ props.parentActive ]);

  return (<ul style={props.style}>
    {options.map((option, i) => {
      if (open !== -1 && open !== i)
        return undefined;

      const isActive = active[i] !== undefined;

      return <li key={option.name} className={isActive ? "active" : undefined}>
        { open === i &&
          <span className="expand" onClick={_ => setOpen(-1)}>&lt;</span>
        }
        <span className="name" onClick={_ => onActivate(option,i)}>{option.name}</span>
        { open !== i && option.options &&
          <span className="expand" onClick={_ => setOpen(i)}>&gt;</span>
        }
        { option.options &&
          <FilterMenu style={open !== i ? { display:"none" } : undefined}
                      options={option.options}
                      onFilter={_ => setActive([])}
                      parentActive={isActive}
          /> }
      </li>})}
  </ul>);
}