import readlineSync from 'readline-sync';
import {inputMatrix, matrixAddition, matrixSubtraction, printMatrix, traceMatrix, transposeMatrix} from './operation.js'

const main = () => {
    console.clear();

    console.log("********************************************")
    console.log("\t\tMATRIX CLI\t\t");
    console.log("********************************************")

    //Print Menu
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to Perform Matrix Addition
    2. Press 2 to Perform Matrix Subtraction
    3. Press 3 to Perform Matrix Multiplication
    4. Press 4 to Find Transpose of a Matrix
    5. Press 5 to Find Trace of a Matrix
    `)
    // Week5-Day2 (12.10.2023)

    //Taking input from User
    let option = readlineSync.questionInt("Enter the option you want to perform: ");

    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;

        case 1:
            console.log("Please type input for Matrix 1");
            let m1 = inputMatrix();

            console.log("Please type input for Matrix 2");
            let m2 = inputMatrix();

            let sum = matrixAddition(m1, m2);

            console.log("Matrix m1 is :");
            printMatrix(m1);
            console.log("Matrix m2 is :");
            printMatrix(m2);
            console.log("The sum of matrices is :");
            printMatrix(sum);

            break;
    
        case 2:
           console.log("Please type input for Matrix 1");
            let a = inputMatrix();

            console.log("Please type input for Matrix 2");
            let b = inputMatrix();

            let sub = matrixSubtraction(a, b);

            console.log("Matrix a is :");
            printMatrix(a);
            console.log("Matrix b is :");
            printMatrix(b);
            console.log("The difference of matrices is :");
            printMatrix(sub);

            break;

        case 3:
            // console.log("Please type input for Matrix 1");
            // let e = inputMatrix();

            // console.log("Please type input for Matrix 2");
            // let f = inputMatrix();

            // let multi = matrixMultiplicationn(e, f);

            // console.log("Matrix e is :");
            // printMatrix(e);
            // console.log("Matrix f is :");
            // printMatrix(f);
            // console.log("The multiplication of matrices is :");
            // printMatrix(multi);
            // break;
          
        case 4:
            console.log("Please type input for Matrix 1");
            let c = inputMatrix();
            let trans = transposeMatrix(c);
            console.log("Matrix c is :");
            printMatrix(c);
            console.log("The transpose of matrices is :");
            printMatrix(trans);
             break;
        case 5:
            console.log("Please type input for Matrix 1");
            let d = inputMatrix();
            let trace1 = traceMatrix(d);
            console.log("Matrix d is :");
            printMatrix(d);
            console.log("The trace of matrices is : ", trace1);
            // printMatrix(trace1);

            break;
        default:
            console.log("Invalid Option")
            break;
    }

    let willContinue = readlineSync.question("Do you want to continue? (Y/N): ");

    // Handling all this conditions y, Y, yes, YES, Yes, yEs, yES 
    willContinue = willContinue.toLowerCase()
    if(willContinue == 'yes' || willContinue == 'y'){
        main();
    }
    else {
        console.log("Thank you for using our CLI Application, See you Again!");
        return;
    }
}
main();