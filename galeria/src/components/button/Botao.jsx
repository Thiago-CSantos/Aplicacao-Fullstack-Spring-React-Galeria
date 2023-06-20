
import "./botao.css";

// eslint-disable-next-line react/prop-types
export function Botao({nome, click}) {
    return (
    <div className="btn">
        <button onClick={click} type="button">{nome}</button>
    </div>
    )
}