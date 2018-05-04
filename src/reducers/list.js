function list(state={
    data:[],
    loading:true
},action){
 switch(action.type){
     case "LIST_UPDATA_SUCC":
     return{
         loading:false,
         data:action.data.data
     }
     case "LIST_UPDATA_REEOR":
     return {
         loading:false,
         data:[]
     }

     default:
     return state;
 }
}

export default list;