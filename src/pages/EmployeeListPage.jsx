import styles from "./EmployeeListPage.module.scss"

import TableX from "../software/table-x"


function EmployeeListPage(){

    return(

        <main className={styles.container}>
        
                <p> List Employees </p>

                <TableX />
        </main>

    )


}

export default EmployeeListPage

