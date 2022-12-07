import { createSlice } from '@reduxjs/toolkit';

const initialState =[];

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state=initialState,action) => {
      const product=state.find(add=>add.id===action.payload.id)
       if(state.indexOf(product)!==-1) {
         state=[...state];
         
       }
       else{
        state=[...state,state=action.payload]
       }
     return state;
       
      },
      remove:(state,action)=>{
        const product=state.find(add=>add.id===action.payload)
        if(state.indexOf(product)!==-1)
        state=[...state.filter(item=>item.id!==action.payload)]
        return [...state]
      }  ,
      countamount:(state,action)=>{
        const product=state.find(add=>add.id===action.payload.id) 
        const ind=state.indexOf(product)
        if(state.indexOf(product)!==-1) 
        {
          state.amount=12 
          return;
        } 
        else {
          state=[...state,action.payload]
        }
        
      },
  }, 
})

export const { increment, remove,countamount} = counterSlice.actions

export default counterSlice.reducer