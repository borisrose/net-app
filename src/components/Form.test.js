import { cleanup, fireEvent, queryByPlaceholderText, render } from "@testing-library/react";
import Form from "./Form";

afterEach(cleanup);


it('Should change the value of the input when inserting sth', () => {

    const obj ={
        name: 'test',
        palceholder:'text-placeholder',
    }

    const handleInputChange = () => {

        console.log('ok')
    }

    const form= [

        {
            name: 'test-firstname',
            type:'text',
            palceholder: 'text-placeholder',
        }
    ]


    const {  getByText} = render(

        <Form form={form} button={"Log in"} />
    )

    expect(getByText('Log in')).toBeTruthy()
   

})