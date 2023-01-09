import "./index.css";
import { Button } from "../Button";
import { AiFillCloseCircle } from "react-icons/ai"

export const Modal = () => {
    return (
        <div className="modal">

            <div className="modal-content">
                <div className="modal-content-add-new-task">
                    <div className="text-close">
                        <h2>Adicionar novo item:</h2>
                        <AiFillCloseCircle className="icon-close" />
                    </div>
                    <input
                    type="text"
                    placeholder="Digite nova tarefa..."
                    />
                </div>

                <Button>
                    Adicionar
                </Button>

            </div> {/* modal-content */}

        </div> // modal
    )
};