import "./index.css";
import { Button } from "../Button";
import { AiFillCloseCircle } from "react-icons/ai";
import { Api } from "../../services/Api";
import { useState, useEffect } from "react";

export const Modal = ({onClick, itemTask}) => {

    const [input, setInput] = useState([]);
    const [item, setItem] = useState("");

    async function btnSubmit(e) {
        e.preventDefault();

        await Api.post("/todos", {
            id: Math.random(),
            item: input,
            checked: false
        });

        alert("Item adicionado!");

        onClick();
    };

    async function removeItem(e) {
        e.preventDefault();

        await Api.delete(`/todos/${itemTask?.id}`);

        alert("Item removido com sucesso!");

        onClick();
    };

    async function updateItem(e) {
        e.preventDefault();

        await Api.put(`/todos/${itemTask?.id}`, {
            item: input 
        });

        alert("Item atualizado com sucesso!");

        onClick();
    };

    useEffect(() => {
        if(itemTask) {
            setInput(itemTask?.item)
        }
    }, []);

// =====================================================================

    return (
        <div className="modal">

            <div className="modal-content">
                <form className="form-modal">
                    <div className="modal-content-add-new-task">
                        <div className="text-close">
                            <h2>{itemTask ? "Editar / Remover item:" : "Adicionar novo item:"}</h2>
                            <AiFillCloseCircle className="icon-close" onClick={onClick} />
                        </div>
                        <input
                        type="text"
                        placeholder="Digite nova tarefa..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    {itemTask ? (
                        <div>
                            <Button onClick={updateItem}>Atualizar</Button>
                            <Button onClick={removeItem}>Remover</Button>
                        </div>
                    ) : <Button onClick={btnSubmit}>Adicionar</Button>}
                </form>

            </div> {/* modal-content */}

        </div> // modal
    )
};