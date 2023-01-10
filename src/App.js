import './App.css';
import { useState, useEffect } from 'react';
import { Button } from "./components/Button";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Modal } from "./components/Modal";
import { Api } from './services/Api';

// const fakeList = [
//   {
//     id: 1,
//     task: "Ir ao supermercado"
//   }
// ];


function App() {

  const [modal, setModal] = useState(false);
  const [item, setItem] = useState([]);

  function showModal() {
    setModal(true);
  };

  function closeModal() {
    setModal(false);
    loaderItems();
  };

  async function loaderItems() {
    const data = await Api.get("/todos");

    setItem(data.data);
  };

  useEffect(() => {
    loaderItems();
  },[]);


// =========================================================================

  return (
    <div className="App">

      {modal && <Modal onClick={closeModal} />}

      <div className="content">

        <header>
          <h1>Lista de Tarefas</h1>

          <div className="button">
            <Button onClick={showModal}>Nova Tarefa</Button>
          </div>
          
        </header> {/* header */}

        <div className="content-list">

        {item.map((item) => (
          <div className="list">

            <div className="list-item">
                <div>
                    <BsCheckSquare  className="icon" fontSize={23} />
                </div>

                <h3 key={item.id}>{item.item}</h3>

              </div> {/* list-item */}

              <div className="edit-update">
                <h3>Atualizar / Remover</h3>
                <RiMenuUnfoldLine className="icon-menu" fontSize={25}/>
              </div> {/* edit-update */}

            </div>
        ))}

          

        </div> {/* content-list */}

      </div> {/* content */}
      
    </div> // App
  );
}

export default App;
