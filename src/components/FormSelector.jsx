import styles from "./FormSelector.module.scss"

function FormSelector({ list, listName, onInputChange}){

    return(
        <select id={listName} className={styles.container} onChange={(e) => onInputChange(e, {name: e.target.value}, listName)}>
            {list && list.map((el, index) => <option value={el.name} key={index} oncL>{el.name}</option>)}
        </select>
    )

}

export default FormSelector