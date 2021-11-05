import { DivInput } from "./styled";

export function InputText({ NameInput, handleChange, Value, typeInput }) {
    return (
        <DivInput>
            <label htmlFor={NameInput}>
                {NameInput}
            </label>
            <input
                type={typeInput}
                id={NameInput}
                name={NameInput}
                onChange={(event) => handleChange(event.target.value)}
                value={Value}
            />
        </DivInput>
    );
}