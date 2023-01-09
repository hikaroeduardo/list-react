import './App.css';
import { useState } from 'react';
import { Button } from "./components/Button";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Modal } from "./components/Modal";


const fakeList = [
  {
    id: 1,
    task: "Ir ao supermercado"
  }
];


function App() {

  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(true);
  };
  
  return (
    <div className="App">

      {modal && <Modal />}

      <div className="content">

        <header>
          <h1>Lista de Tarefas</h1>

          <div className="button">
            <Button onClick={showModal}>Nova Tarefa</Button>
          </div>
          
        </header> {/* header */}

        <div className="content-list">

          <div className="list">

            <div className="list-item">
              <div>
                <BsCheckSquare  className="icon" fontSize={23} />
              </div>

              {fakeList.map((item) => (
                <h3 key={item.id}>{item.task}</h3>
              ))}
            </div> {/* list-item */}

            <div className="edit-update">
                <h3>Atualizar / Remover</h3>
                <RiMenuUnfoldLine className="icon-menu" fontSize={25}/>
            </div> {/* edit-update */}

          </div> {/* list */}

        </div> {/* content-list */}

      </div> {/* content */}
      
    </div> // App
  );
}

export default App;
