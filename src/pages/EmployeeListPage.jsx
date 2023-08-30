import styles from "./EmployeeListPage.module.scss"
import TableX from "table-x-library/dist/table-x"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { faker, fakerEN_US} from "@faker-js/faker"


const EmployeeListPage = () =>{

    const [data, setData] = useState([])
    const employees = useSelector((state) => state.employee.data)
    

    useEffect(() => {

        if(employees.length > 0){
            setData([...employees])
        }
   

    }, [employees])

    const list = [
        {
            value: 25,
            name : "25"
        },
        {
            value : 50,
            name : "50"
        },
        {
            value : 100,
            name : "100"
        }
    ]

   // en dur
    const columns= [
        { title: 'First Name', data: 'firstname' },
        { title: 'Last Name', data: 'lastname'},
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
        { title: 'Street', data: 'street'},
        { title: 'City', data: 'city'},
        { title: 'State', data: 'state'},
        { title: 'Zip Code', data: 'zipCode'},
    ]


   



    return(

        <main className={styles.container}>
        
                <h3> Employees's List </h3>

                {data && <TableX list={list} columns={columns} userData={data}/>}
        </main>

    )


}

export default EmployeeListPage

