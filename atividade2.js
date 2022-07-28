function replacing(number){
    const arr = []
    if(typeof number != typeof arr ||!number.length){
        number = -1
    } 

    for(let i = 0; i < number.length; i++){
        if(number[i] == null){
            number[i] = -1;   
    }
        if(number[i] === 0){
            console.log("Zeros não necessitam ser substituídos!")
        }
        else if(number[i] % 2 === 0){
            number[i] = 0;
        }
    }
    console.log(number)
}
    
replacing([1, 3, 4, 6, 80, 33, 23, 90])

// output: [1, 3, 0, 0, 0, 33, 23, 0]

replacing([])

// output: -1

replacing("string")

// output: -1

replacing(4)

//output: -1

replacing()

// output: -1

replacing([,1])

//output: [-1,1]

replacing([1,0,0,0,1])

//output: Zeros não necessitam ser substituídos! x3
//        [1,0,0,0,1]