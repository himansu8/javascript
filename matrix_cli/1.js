import readLineSync from "readline-sync";


// const name= readLineSync.question("name");
// console.log(name);

// const arr = [1,2,3,4];
// console.log(arr);

// const arr = [];

// for (let i=1; i<=10; i++){
//     // arr[i] = i;
// let temp = readLineSync.questionInt(`Enter Number of ${i} index `)
//     arr.push(temp);
// }

// console.log(arr); 


// const twoDim= [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// console.log(twoDim);


function additionOfMatrix(matrix1, matrix2) {                        
    
    var newMatrix = [ ];                                                               
     
        for( let i = 0; i < matrix1.length; i++) {                              
     
            newMatrix[i] = [ ];                                                         
     
            for( let j = 0; j < matrix1[i].length; j++) {
     
               newMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
     
            }
     
        }
     
        return newMatrix;
     
    }
     
    let matrixA = [[1,2,3],[2,3,4],[3,4,5]];                              
    let matrixB = [[0,9,8],[9,8,7],[8,7,6]];                              
     
    console.log( additionOfMatrix(matrixA, matrixB))         
     
