import { useEffect, useState } from "react"
import styles from "./table-x.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShowEntries = ({ entriesList, clickEntryHandler }) => {

    return(

        <section>
           Show <select onChange={(e) => clickEntryHandler(e)}> 

            { entriesList && entriesList.map((entry, index) => <option value={entry.value} key={index}>{entry.name}</option>)}
            
            </select>  entries
        </section>
    )

}

const SearchEngine = ({onInputChange}) => {


   


    const inputHandler = (e) => {

        const val = e.target.value;
        
        if(val.length > 3){

            console.log('val > 3 char', val)
            onInputChange(val)

        } else { 
            onInputChange("nope")
        }

        

    }
    

    return(

        <section>

            <span> Search : </span>
            <input onInput={(e) => inputHandler(e)}/>

        </section>

    )


}

const ColumnTitleX = ({columnObject, listHandler}) => {


    return(
        <th className={styles.headerTableContainer}>
            {columnObject.title} 
            <div className={styles.caretsContainer}>
                <FontAwesomeIcon icon="fa-solid fa-caret-up"  className={styles.icon}  onClick={() => listHandler(columnObject.data, true)}/>
                <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.icon}  onClick={() => listHandler(columnObject.data, false)} />
                
            </div>

        </th>
    )


}

const ColumnTableX = ({columns, listHandler}) => {

    

    
    return(

        <tr className={styles.columnsContainer}>

            {columns.map((column, index)  => <ColumnTitleX  columnObject={column} listHandler={listHandler} key={index}/>)}

        </tr>

    )


}

const RowDataTableX = ({rowData}) => {

    const rowDataArray = Object.keys(rowData).map( function(key) {
        return rowData[key];
    })

    
    return(
        <tr className={styles.dataTableContainer}>
        {
          rowDataArray.map((row, index) => <td key={index}> {row}</td>)
        }
        </tr>
    )
}

const RowTableX = ({data}) => {



    return (

        <>
           {data.map((row, index) =>  <RowDataTableX  rowData={row} key={index}/>)}
        </>
       
    )

}


const TableX = () => {

    const[data, setData] = useState(

        [

            {

                firstName : 'Boris',
                lastName : 'Rose',
                startDate : "2020-10-03",
                department : 'California',
                dateOrBirth: "2010-10-03",
                city : 'Los Angeles',  
                street : '1 Main Street',
                state : 'California',
                zipCode : '0203'
            },
            {

    
                firstName : 'Mathilda',
                lastName : 'Al',
                startDate : "2015-10-03",
                department : 'New York',
                dateOrBirth: "2010-10-03",
                city : 'Manhattan', 
                street : '2 Main Street',
                state : 'New York',
                zipCode : '0203'
    
    
            },
            {
                
 
                firstName : 'Patrick',
                lastName : 'Duse',
                startDate : "2015-06-01",
                department : 'California',
                dateOrBirth: "2020-03-03",
                city : 'Los Angeles',
                street: '19 Down Hill',
                state : 'California',
                zipCode : '30203'
    
    
            },
            {
    

                firstName : 'Lou',
                lastName : 'Flo',
                startDate : "2015-04-01",
                department : 'Texas',
                dateOrBirth: "2020-05-03",
                city : 'Dallas',
                street: '19 Down Hill',
                state : 'Texas',
                zipCode : '230d1290'
    
    
            }
    
        ]



    )


    const [updatedFilteredData, setUpdatedFilteredData] = useState([])

   

    const filterData = (val) => {


        const filteredData = []


        if(val !== "nope"){
            data.forEach(element => {

                Object.keys(element).forEach((v) => {
     
                     console.log('element[v', element[v])
                     if(element[v].includes(val)){
     
                         if(filteredData.find(el => el === element)){
                             return
                         }
                         filteredData.push(element)
                         return
                     }  
     
                })
             })
     
        }

 
        console.log('filteredData', filteredData)
        setUpdatedFilteredData([...filteredData])
            
    }



    const listHandler = (modifierProp, isOrdered) => {

        
        console.log('in listHandler', modifierProp, isOrdered);
        setUpdatedFilteredData([])
        
        if(isOrdered){
            
            console.log('data[0][modifierProp]',data[0][modifierProp])

       
            let newData = data;

            let updatedData = newData.sort((a, b) => {

                if (a[modifierProp] < b[modifierProp]) {
                  return -1;
                }

                if (a[modifierProp] > b[modifierProp]) {
                  return 1;
                }

                return 0;

            });

            console.log('newData ordered', updatedData);

            setUpdatedFilteredData([...updatedData]);

        } else {

            console.log('data[0][modifierProp]',data[0][modifierProp]);

            let newData = data;

            let updatedData = newData.sort((a, b) => {

                if (a[modifierProp] > b[modifierProp]) {
                  return -1;
                }
                if (a[modifierProp] < b[modifierProp]) {
                  return 1;
                }
                return 0;
            });

            console.log('newData ordered', updatedData);
            setUpdatedFilteredData([...updatedData]);
    
        }

   

    }




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

   
    const columns= [
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName'},
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth'},
        { title: 'Street', data: 'street'},
        { title: 'City', data: 'city'},
        { title: 'State', data: 'state'},
        { title: 'Zip Code', data: 'zipCode'},
    ]


    const clickEntryHandler =  (e) => {

        console.log('in to clickEntryHandler')

   
        if(data.length < e.target.value){

            console.log('- de data que la limite')

            setUpdatedFilteredData(data)
          
        } 
        else {
           
            const limitedData = []
            console.log('+ de data que la limite')
            for(let i = 0; i < e.target.value ; i++){

                console.log(data[i])
                limitedData.push(data[i])   
            }
            console.log('limitedData', limitedData)
            setUpdatedFilteredData([...limitedData])
    
        }
      

    }

  


    useEffect(() => {

        console.log('updataData', updatedFilteredData)
        
    }, [updatedFilteredData])

    return(

        <div className={styles.container}>
            <div className={styles.topContainer}>
                <ShowEntries  clickEntryHandler={clickEntryHandler} entriesList={list} />
                <SearchEngine onInputChange={filterData} />
            </div>
            <table className={styles.lowerContainer}>
                <thead>
                    <ColumnTableX columns={columns} listHandler={listHandler}/>
                </thead>
                <tbody className={styles.bodyTableContainer}>
                    {data && <RowTableX data={updatedFilteredData.length ? updatedFilteredData : data}/>}
                </tbody>
            </table>
        </div>

    )


    
}






export default TableX