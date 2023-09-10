import {useState} from "react";

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
    const newActive = [...active ];
    newActive[i] = active[i] === undefined ? o.filter : undefined;
    setActive(newActive);
    if (onFilter) onFilter(newActive.filter(f => f !== undefined));
  };

  if (open === -1) // Nothing open, list all options.
    return (<ul style={props.style}>
      {options.map((option, i) => {
        const isActive = active[i] !== undefined;

        return <li key={option.name} className={isActive ? "active" : undefined}>
          <span className="name" onClick={_ => onActivate(option,i)}>{option.name}</span>
          { option.options && <span className="expand" onClick={_ => setOpen(i)}>&gt;</span> }
          { option.options && <FilterMenu style={{ display:"none" }} options={option.options} onFilter={_ => setActive([])}/> }
        </li>})}
    </ul>);


  const option = options[open];
  const isActive = active[open] !== undefined;

  return (<ul style={props.style}>
      <li key={option.name} className={isActive ? "active" : undefined}>
        <span className="expand" onClick={_ => setOpen(-1)}>&lt;</span>
        <span className="name" onClick={_ => onActivate(option, open)}>{option.name}</span>
        { option.options && <FilterMenu options={option.options} onFilter={_ => setActive([])}/> }
      </li>
  </ul>);
}