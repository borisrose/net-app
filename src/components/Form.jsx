import FormInput from "./FormInput"
import styles from "./Form.module.scss"


function Form ({ form, button, address, department }){



    return(

        <form className={styles.container}>

            { form && form.map((el,index) => <FormInput obj={el} key={index}/>)}

            <fieldset>
                <legend> Address </legend>
                { form && address.map((el,index) => <FormInput obj={el} key={index}/>)}
            </fieldset>

            <br />
            <FormInput obj={department} />
          

    
            <section className={styles.buttons}>

                    <button className={styles.button}>{button}</button>

            </section>

        </form>


    )



} 

export default Form