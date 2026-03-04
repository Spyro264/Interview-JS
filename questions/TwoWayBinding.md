# Two Way Binding ?

- const input = document.createElement('input')
const state = {value:"hi"};

input.value = "";
input.dispatchEvent(new Event("input"))

function model(state , input){
    input.value = state.value;

    input.addEventListener("input",(e)=>{
        state.value = e.target.value;
    });

    let currentValue = state.value;
    

    Object.defineProperty(state , "value",{
        get(){
            return currentValue;
        },
        set(newVal){
            console.log({newVal});

            currentValue = newVal;
            input.value = newVal    
        }
    })  
}

model(state , input);
console.log({input: input.value});
console.log({state: state.value});








