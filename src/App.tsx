import './App.css'

import {FamilyComponent} from "./components/FamilyComponent/FamilyComponent.tsx";

function App() {


  return (
    <>
        <FamilyComponent/>

    </>
  )
}

export default App

//для rainbow-hover эффекта
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