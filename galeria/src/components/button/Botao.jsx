
import "./botao.css";

// eslint-disable-next-line react/prop-types
export function Botao({nome}) {
    return (
    <div className="btn">
        <button type="button">{nome}</button>
    </div>
    )
}