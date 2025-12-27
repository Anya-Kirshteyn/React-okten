import './App.css'
import {CharacterComponent} from "./components/CharacterComponent/CharacterComponent.tsx";
import {simpsons} from "./data/simpsonsArray.ts";

function App() {


  return (
    <>
        {simpsons.map((simpsons,index) => (
            <CharacterComponent key={index} simpson={simpsons}>
                {simpsons.info} </CharacterComponent>
        ))}

    </>
  )
}

export default App


// return (
//     <div
//         onMouseMove={(e) =>
//             document.body.style.backgroundColor =
//                 `rgb(${e.clientX % 255}, ${e.clientY % 255}, 150)`
//         }
//         style={{ minHeight: '100vh' }}
//     >
//         {simpsons.map((simpson, index) => (
//             <CharacterComponent key={index} simpson={simpson}>
//                 {simpson.info}
//             </CharacterComponent>
//         ))}
//     </div>
// )
//
// }