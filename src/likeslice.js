import { createSlice } from '@reduxjs/toolkit';

const initialState ={
     value:[],
     count:[],
     cartadd:1,
    };

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
     like: (state=initialState,action) => {
     const prod=state.value.find(add=>add.id===action.payload.id)
     if(state.value.indexOf(prod)!==-1) return
     else{
       state.value=[...state.value,state.value=action.payload]
      

     }
   return state.value;
     
    },
    amont:(state,action)=>{
        const pro=state.cartadd.find(ad=>ad.id===action.payload.id)
        if(state.cartadd.indexOf(pro)!==-1){
            state.cartadd+=action.payload;
        }
        return state;
    },
},
});

export const {like,amont} = likeSlice.actions

export default likeSlice.reducer