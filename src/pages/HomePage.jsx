import { Link } from "react-router-dom";
import Form from "../components/Form";
import Title from "../components/Title";
import styles from "./HomePage.module.scss"

function HomePage() {
  const form = [
    {  
      name: 'firstname',
      placeholder: 'First Name',
      type:'text',
      hint: 'ex: Doris',
      pattern: /^[a-zA-Z\-]{3,20}$/
    },
    {
      name: 'lastname',
      placeholder: 'Last Name',
      type:'text',
      hint: 'ex: Dupont',
      pattern: /^[a-zA-Z\-]{3,20}$/
    },
    {
      name: 'birthdate',
      placeholder: 'Date of Birth',
      type:'date',
    },
    {  
      name: 'startdata',
      placeholder: 'Start Date',
      type:'date',
    },
  ]

  const address = [
    {  
      name: 'street',
      placeholder: 'Street',
      type:'text',
      pattern: /^[a-zA-Z\-]{3,20}$/
    },
    {  
      name: 'city',
      placeholder: 'City',
      type:'text',
      pattern: /^[a-zA-Z\-]{3,20}$/
    },
    {
      name: 'states',
      type: 'selector',
      content : [
        {
          value : 'new-york',
          name : 'New York'
        },
        {
          value : 'los-angeles',
          name : 'Los Angeles'
        }
      ]
    },
    { 
      name: 'zipcode',
      placeholder: 'Zip Code',
      type:'text',
      pattern: /^[0-9]{3,6}$/
    },
  ] 


  const department = {
    name: 'department',
    type: 'selector',
    content : [
      {
        value : 'sales',
        name : 'Sales'
      },
      {
        value : 'marketing',
        name : 'Marketing'
      },
      {
        value : 'engineering',
        name : 'Engineering'
      },
      {
        value : 'human_ressources',
        name : 'Human Ressources'
      },
      {
        value : 'legal',
        name : 'Legal'
      }
    ]
  }


  return (
    <main className={styles.container}>

        <Link to={"/employee-list"} className={styles.link}> View Current Employees </Link>
        
        <Title title="Create Employee"/>
        <Form form={form} button={"Save"} address={address} department={department}/>

    </main>
  );
}

export default HomePage;
