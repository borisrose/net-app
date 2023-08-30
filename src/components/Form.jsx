import FormInput from "./FormInput"
import styles from "./Form.module.scss"
import { useEffect, useState } from "react"
import { createEmployee } from "../features/employee/employeeSlice"
import { useSelector, useDispatch} from "react-redux"
import { useNavigate} from "react-router-dom"

function Form ({ form, button, address, department }){

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [ hasError, setHasError] = useState(false)

    const [ formInputs, setForm] = useState({})

    const onChangeHandler = (e, modifiedProp, selectArrayName) => {    
        if(modifiedProp.name === 'firstname'){
            setForm({ ...formInputs,firstname : e.target.value})
        }

        if(modifiedProp.name === 'lastname'){
           setForm({ ...formInputs,lastname : e.target.value})
        }

        if(modifiedProp.name === 'dateOfBirth'){
            setForm({...formInputs, dateOfBirth : e.target.value })
        }

        if(modifiedProp.name === 'startdate'){
            setForm({...formInputs,
                startDate : e.target.value })
        }

        if(modifiedProp.name === 'street'){
            setForm({...formInputs,
                street : e.target.value })
        }

        if(modifiedProp.name === 'zipcode'){
            setForm({...formInputs,
                zipCode : e.target.value })
        }

        if(modifiedProp.name === 'city'){
            setForm({...formInputs,
                city : e.target.value })
        }

        if(selectArrayName === 'department'){
            setForm({...formInputs,
                department: e.target.value })
        }

        if(selectArrayName === 'state'){
            setForm({
                ...formInputs,
                state: e.target.value
            })
        }
       
    }

    const formChecker = (obj) => {

        console.log('into formChecker', obj)

        let  emptyValuesArray  = []

        if(Object.keys(obj).length === 0){
            console.log('empty initial array')
            emptyValuesArray.push('empty')
            return emptyValuesArray
        }

        Object.keys(obj).forEach((key) => {
            if(obj[key] === ""){
                emptyValuesArray.push(key)
            }
        })

        return emptyValuesArray
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(hasError){
            console.log('no click while return')
            return
        }
        if(formChecker(formInputs).length > 0){

            setHasError(true)
            console.log('error ', formChecker.length)
            return 
        }
 
        dispatch(createEmployee(formInputs))
        navigate('/employee-list')
    }


    useEffect(() => {

        console.log('form inputs changing ...', formInputs)

    }, [formInputs])

    useEffect(() => {

        if(hasError){

            setTimeout(() => {
                setHasError(false)
            }, 4000)
        }

    }, [hasError])

    return(

        <form className={styles.container} onSubmit={onSubmitForm}>

            { form && form.map((el,index) => <FormInput obj={el} key={index} onInputChange={onChangeHandler}/>)}

            <fieldset>
                <legend> Address </legend>
                { form && address.map((el,index) => <FormInput obj={el} key={index} onInputChange={onChangeHandler}/>)}
            </fieldset>

            <br />
            <FormInput obj={department} onInputChange={onChangeHandler} />
            <div className={styles.popupContainer}>  {hasError ? <p className={styles.popupMessage}>Vous devez remplir tous les champs</p>: ''} </div>
            <section className={styles.buttons}>
                <button className={styles.button} disabled={hasError}>{button}</button>
            </section>
    

        </form>


    )



} 

export default Form