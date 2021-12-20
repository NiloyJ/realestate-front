import homes from '../../Fakedata/homes.json'
const initialState = {
    discover: homes,
    Readinglist: [],
    finishedList: []
}


function homeReducer(state = initialState, action){


    switch(action.type){
        case 'ADD_TO_WISH_LIST':{
            const newState = {...state, Readinglist: [...state.Readinglist,action.payload]};
            return newState  
        }
        case 'REMOVE_FROM_WISH_LIST':{

            const newState = {...state, Readinglist:state.Readinglist.filter((Allhomes)=>Allhomes.name != action.payload) }
            
            return newState;
        }
        default: 
            return state
    }
    
    
}

export default homeReducer;


