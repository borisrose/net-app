import { useState } from "react"
import styles from "./FormInput.module.scss"
import FormSelector from "./FormSelector"

function FormInput ({obj, onInputChange}){

    const [ error ] = useState(false)

    return(

        <section className={styles.container}>

            {obj.type === 'text'  &&  <input type={obj.type} placeholder={obj.placeholder} id={obj.name} name={obj.name} onChange={(e) => onInputChange(e, obj)}/>}

            {obj.type === 'selector' && 
                <>
                <label htmlFor={obj.name}>{(obj.name)[0].toUpperCase() + (obj.name).slice(1)}</label>
                <br/>
                <FormSelector list={obj.content} listName={obj.name} onInputChange={onInputChange}/>
                </>
            }
         
            {obj.type === 'date'  &&  
                <>
                    <label htmlFor="">{obj.placeholder}</label>
                    <br/>
                    <input type={obj.type}  id={obj.name} name={obj.name} onChange={(e) => onInputChange(e, obj)}/>
                </>
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