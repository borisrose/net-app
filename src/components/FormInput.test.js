import { cleanup, fireEvent, getByPlaceholderText, queryByPlaceholderText, render } from "@testing-library/react";
import FormInput from "./FormInput";

afterEach(cleanup);


it('Should change the value of the input when inserting sth', () => {

    const obj ={
        name: 'test',
        placeholder:'text-placeholder',
        type: 'text'
    }

    const handleInputChange = () => {

        console.log('ok')
    }

    const {   getByPlaceholderText} = render(

        <FormInput obj={obj}  handleInputChange={handleInputChange}/>
    )
   
    expect(getByPlaceholderText(/^text/)).toBeTruthy()

})