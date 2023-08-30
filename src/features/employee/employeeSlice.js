import { createSlice } from "@reduxjs/toolkit";


export const employeeSlice = createSlice({

    name : 'employee',
    initialState: {
        data : []
    },
    reducers : {

        // action  n°1
        createEmployee : (state, action) => {
            console.log('🥎 into createEmployee from employeeSlice Reducers')
            console.log('🔵 action.payload -->', action.payload)
            state.data.push(action.payload)
            console.log('⚾️ new state.data', state.data)
        }

    }

})

export const { createEmployee }  = employeeSlice.actions

export default employeeSlice.reducer