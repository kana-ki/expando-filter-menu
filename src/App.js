import './App.css';
import {FilterMenu} from "./FilterMenu";

const filters = [
    {
        name: "North America",
        filter: v => alert("North America!"),
        options: [
            {
                name: "Aether",
                filter: _ => alert("Aether"),
                options: [
                    {
                        name: "Gilgamesh",
                        filter: v => alert("Gilgamesh")
                    },
                    {
                        name: "Cactuar",
                        filter: v => alert("Cactuar")
                    },
                    {
                        name: "Jenova",
                        filter: v => alert("Jenova")
                    },
                    {
                        name: "Siren",
                        filter: v => alert("Siren")
                    }
                ]
            },
            {
                name: "Primal",
                filter: v => alert("Primal"),
                options: [
                    {
                        name: "Behemoth",
                        filter: v => alert("Behemoth")
                    },
                    {
                        name: "Excalibur",
                        filter: v => alert("Excalibur")
                    },
                    {
                        name: "Exodus",
                        filter: v => alert("Exodus")
                    },
                    {
                        name: "Lamia",
                        filter: v => alert("Lamia")
                    }
                ]
            }
        ]
    },
    {
        name: "Europe",
        filter: v => alert("Europe!"),
        options: [
            {
                name: "Chaos",
                filter: v => alert("Chaos"),
                options: [
                    {
                        name: "Cerberus",
                        filter: v => alert("Cerberus")
                    },
                    {
                        name: "Louisoix",
                        filter: v => alert("Louisoix")
                    },
                    {
                        name: "Moogle",
                        filter: v => alert("Moogle")
                    },
                    {
                        name: "Omega",
                        filter: v => alert("Omega")
                    }
                ]
            },
            {
                name: "Light",
                filter: _ => alert("Primal"),
                options: [
                    {
                        name: "Alpha",
                        filter: v => alert("Alpha")
                    },
                    {
                        name: "Odin",
                        filter: v => alert("Odin")
                    },
                    {
                        name: "Phoenix",
                        filter: v => alert("Phoenix")
                    },
                    {
                        name: "Shiva",
                        filter: v => alert("Shiva")
                    }
                ]
            }
        ]
    }
]



function App() {
  return (
    <div className="App">
        <FilterMenu options={filters} />
    </div>
  );
}


export default App;
