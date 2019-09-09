// ACCION: Describe lo que deberia hacer el reducer.

interface Action{
    type: string;
    payload?:  any;
}

//const incrementadorAction: Action = {
//    type:'INCREMENTAR'
//};


//Reducer SIEMPRE retornan un estado.
//Reducer debe ser una funcion pura, que se pueda resolver solo con los datos del state y el action,
//sin intervencion con el exterior.
function reducer( state = 10 , action:Action ){
    
//    if(action.type === 'INCREMENTAR'){
//        return state += 1;    
//    }
//    return state;

    switch(action.type){
        case 'INCREMENTAR':  return state +=1;
        case 'DECREMENTAR':  return state -=1;
        case 'MULTIPLICAR':  return state * action.payload;
        case 'DIVIDIR':  return state / action.payload;
        default : return state;
    }
}



// Usar el reducer
const incrementadorAction: Action = {
    type:'INCREMENTAR'
};

const decrementadorAction: Action = {
    type:'DECREMENTAR'
};

const multiplicarAction: Action = {
    type:'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action = {
    type:'DIVIDIR',
    payload: 2
};

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));