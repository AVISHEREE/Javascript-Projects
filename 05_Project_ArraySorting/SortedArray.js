outputElements = document.getElementById('outputElements');
InputElements = document.getElementById('InputElements');
let array = [20,10,11,80,3,2,89,1,0,];

function sorter(numbers){

    for(j = 0 ; j < numbers.length  ; j++ ){
        for(i = 0 ; i < numbers.length + 1  ; i++ ){
        if(numbers[i]>numbers[i + 1]){
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
         numbers[i + 1] = temp;
    }
}
}

    return numbers;
}
function sort(){
    array = InputElements.value.split(" ").map(Number);
    outputElements.innerHTML = `Sorted Array: ${sorter(array).join(", ")}`;
}

// hello.innerHTML = `${sorter(array)}`;