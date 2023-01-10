import "./index.css";
import { Button } from "../Button";
import { AiFillCloseCircle } from "react-icons/ai";
import { Api } from "../../services/Api";
import { useState } from "react";

export const Modal = ({onClick}) => {

    const [input, setInput] = useState([])

    async function formSubmit(e) {
        e.preventDefault();

        const newTask = await Api.post("/todos", {
            id: Math.random(),
            item: input
        });

        alert("Item adicionado!");

        onClick();
    };

// =====================================================================

    return (
        <div className="modal">

            <div className="modal-content">
                <form className="form-modal" onSubmit={formSubmit}>
                    <div className="modal-content-add-new-task">
                        <div className="text-close">
                            <h2>Adicionar novo item:</h2>
                            <AiFillCloseCircle className="icon-close" onClick={onClick} />
                        </div>
                        <input
                        type="text"
                        placeholder="Digite nova tarefa..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    <Button>
                        Adicionar
                    </Button>
                </form>

            </div> {/* modal-content */}

        </div> // modal
    )
};