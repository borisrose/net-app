import styles from "./Title.module.scss"


function Title({ title }){

    return(

        <header className={styles.container}>
            <h1>{ title }</h1>
        </header>


    )

}

export default Title