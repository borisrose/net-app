import { useState } from "react"
import styles from "./FormInput.module.scss"
import FormSelector from "./FormSelector"

function FormInput ({obj, handleInputChange}){

    const [ error, setError ] = useState(false)

    return(

        <section className={styles.container}>

            {obj.type === 'text' &&  <input type={obj.type} placeholder={obj.placeholder} id={obj.name} name={obj.name} onChange={handleInputChange}/>}

            {obj.type === 'selector' && 
                <>
                <label htmlFor="">{(obj.name)[0].toUpperCase() + (obj.name).slice(1)}</label>
                <br/>
                <FormSelector list={obj.content} listName={obj.name}/>
                </>
            }
            {
                obj.type  === 'date' && <input placeholder={obj.placeholder}/>
            }
      
            <aside>
                {
                    error && <p> Erreur </p>
                }
            </aside>
            

        </section>


    )

}


export default FormInput