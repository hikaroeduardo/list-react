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
  const [selectedItem, setSelectedItem] = useState(null);
  const [checked, setChecked] = useState(false);

  function showModal() {
    setModal(true);
  };

  function closeModal() {
    setModal(false);
    loaderItems();
    setSelectedItem(null);
  };

  async function loaderItems() {
    const data = await Api.get("/todos");

    setItem(data.data);
  };

  function editItem(item) {
    showModal();
    setSelectedItem(item);
  };

  async function checkeditem(item) {
    const updateData = await Api.put(`/todos/${item.id}`, {
      item: item.item,
      checked: true
    })

    closeModal()
  };

  async function noChekedItem(item) {
    const updateData = await Api.put(`/todos/${item.id}`, {
      item: item.item,
      checked: false
    })

    closeModal()
  };

  useEffect(() => {
    loaderItems();
  },[]);


// =========================================================================

  return (
    <div className="App">

      {modal && <Modal itemTask={selectedItem} onClick={closeModal} />}

      <div className="content">

        <header>
          <h1>Lista de Tarefas</h1>

          <div className="button">
            <Button onClick={showModal}>Nova Tarefa</Button>
          </div>
          
        </header> {/* header */}

        <div className="content-list">

          {item.map((item) => (
            <div className="list" key={item.id}>

              <div className="list-item">
                {item.checked ?
                (<div>
                  <BsCheckSquareFill className="icon" fontSize={23} onClick={() => noChekedItem(item)}  />
                </div>)
                :
                (<div>
                  <BsCheckSquare className="icon" fontSize={23} onClick={() => checkeditem(item)} />
                </div>)}

                  <h3>{item.item}</h3>

                </div> {/* list-item */}

                <div className="edit-update" onClick={() => editItem(item)}>
                  <h3>Atualizar / Remover</h3>
                  <RiMenuUnfoldLine className="icon-menu" fontSize={25}/>
                </div> {/* edit-update */}

              </div> // list-item
          ))}

        </div> {/* content-list */}

      </div> {/* content */}
      
    </div> // App
  );
}

export default App;
