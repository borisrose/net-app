import styles from "./FormSelector.module.scss"

function FormSelector({ list}){


    return(
        <select className={styles.container}>
            {list && list.map((el, index) => <option value={el.value}>{el.name}</option>)}
        </select>
    )


}

export default FormSelector