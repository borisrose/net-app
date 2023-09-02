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
      pattern: /^[a-zA-Z-]{3,20}$/
    },
    {
      name: 'lastname',
      placeholder: 'Last Name',
      type:'text',
      hint: 'ex: Dupont',
      pattern: /^[a-zA-Z-]{3,20}$/
    },
    {
      name: 'dateOfBirth',
      placeholder: 'Date of Birth',
      type:'date',
    },
    {  
      name: 'startdate',
      placeholder: 'Start Date',
      type:'date',
    },
  ]

  const address = [
    {  
      name: 'street',
      placeholder: 'Street',
      type:'text',
      pattern: /^[a-zA-Z-]{3,20}$/
    },
    {  
      name: 'city',
      placeholder: 'City',
      type:'text',
      pattern: /^[a-zA-Z-]{3,20}$/
    },
    {
      name: 'state',
      type: 'selector',
      content : [
        {
            name: "Alabama",
            abbreviation: "AL"
        },
        {
            name: "Alaska",
            abbreviation: "AK"
        },
        {
            name: "American Samoa",
            abbreviation: "AS"
        },
        {
            name: "Arizona",
            abbreviation: "AZ"
        },
        {
            name: "Arkansas",
            abbreviation: "AR"
        },
        {
            name: "California",
            abbreviation: "CA"
        },
        {
            name: "Colorado",
            abbreviation: "CO"
        },
        {
            name: "Connecticut",
            abbreviation: "CT"
        },
        {
            name: "Delaware",
            abbreviation: "DE"
        },
        {
            name: "District Of Columbia",
            abbreviation: "DC"
        },
        {
            name: "Federated States Of Micronesia",
            abbreviation: "FM"
        },
        {
            name: "Florida",
            abbreviation: "FL"
        },
        {
            name: "Georgia",
            abbreviation: "GA"
        },
        {
            name: "Guam",
            abbreviation: "GU"
        },
        {
            name: "Hawaii",
            abbreviation: "HI"
        },
        {
            name: "Idaho",
            abbreviation: "ID"
        },
        {
            name: "Illinois",
            abbreviation: "IL"
        },
        {
            name: "Indiana",
            abbreviation: "IN"
        },
        {
            name: "Iowa",
            abbreviation: "IA"
        },
        {
            name: "Kansas",
            abbreviation: "KS"
        },
        {
            name: "Kentucky",
            abbreviation: "KY"
        },
        {
            name: "Louisiana",
            abbreviation: "LA"
        },
        {
            name: "Maine",
            abbreviation: "ME"
        },
        {
            name: "Marshall Islands",
            abbreviation: "MH"
        },
        {
            name: "Maryland",
            abbreviation: "MD"
        },
        {
            name: "Massachusetts",
            abbreviation: "MA"
        },
        {
            name: "Michigan",
            abbreviation: "MI"
        },
        {
            name: "Minnesota",
            abbreviation: "MN"
        },
        {
            name: "Mississippi",
            abbreviation: "MS"
        },
        {
            name: "Missouri",
            abbreviation: "MO"
        },
        {
            name: "Montana",
            abbreviation: "MT"
        },
        {
            name: "Nebraska",
            abbreviation: "NE"
        },
        {
            name: "Nevada",
            abbreviation: "NV"
        },
        {
            name: "New Hampshire",
            abbreviation: "NH"
        },
        {
            name: "New Jersey",
            abbreviation: "NJ"
        },
        {
            name: "New Mexico",
            abbreviation: "NM"
        },
        {
            name: "New York",
            abbreviation: "NY"
        },
        {
            name: "North Carolina",
            abbreviation: "NC"
        },
        {
            name: "North Dakota",
            abbreviation: "ND"
        },
        {
            name: "Northern Mariana Islands",
            abbreviation: "MP"
        },
        {
            name: "Ohio",
            abbreviation: "OH"
        },
        {
            name: "Oklahoma",
            abbreviation: "OK"
        },
        {
            name: "Oregon",
            abbreviation: "OR"
        },
        {
            name: "Palau",
            abbreviation: "PW"
        },
        {
            name: "Pennsylvania",
            abbreviation: "PA"
        },
        {
            name: "Puerto Rico",
            abbreviation: "PR"
        },
        {
            name: "Rhode Island",
            abbreviation: "RI"
        },
        {
            name: "South Carolina",
            abbreviation: "SC"
        },
        {
            name: "South Dakota",
            abbreviation: "SD"
        },
        {
            name: "Tennessee",
            abbreviation: "TN"
        },
        {
            name: "Texas",
            abbreviation: "TX"
        },
        {
            name: "Utah",
            abbreviation: "UT"
        },
        {
            name: "Vermont",
            abbreviation: "VT"
        },
        {
            name: "Virgin Islands",
            abbreviation: "VI"
        },
        {
            name: "Virginia",
            abbreviation: "VA"
        },
        {
            name: "Washington",
            abbreviation: "WA"
        },
        {
            name: "West Virginia",
            abbreviation: "WV"
        },
        {
            name: "Wisconsin",
            abbreviation: "WI"
        },
        {
            name: "Wyoming",
            abbreviation: "WY"
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
