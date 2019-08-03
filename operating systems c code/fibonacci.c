#include<stdio.h>
#include<pthread.h>
//#include<conio.h>

#define TRUE 1
#define FALSE 0

/*
    46 is the maxim number you can calculate due to the limitations of the long data type. max value is 1836311903
*/
int fibonacci(int n)
{
    if(n == 1)
        return(1);
    else if(n == 0)
        return 0;
    else
        return(fibonacci(n-1) + fibonacci(n-2));
}

printFibonacci()
{
        long value, result;

        printf("FIBONACCI RECURSION \n");
        printf("Which number from the series do you want to know? \n\r");
        printf("Enter number:");
        scanf("%d", &value);
        result = fibonacci(value);
        printf("The fibonacci value is: %d \n\r", result);
        printf("\n");

        printf("Do you want to calculate another serie? \n");
}

/*
    12! is the maximum number you can calculate due to the limitations of the long data type. max value is 479001600
*/
int factorial(int n)
{
    if(n<2)
        return 1;
    else
        return n * factorial(n-1);
}

printFactorial()
{
    long value, result;

    printf("FACTORIAL NUMBER \n");
    printf("Which Factorial value do you want to get? \n\r");
    printf("Enter number:");
    scanf("%d", &value);
    result = factorial(value);
    printf("The factorial value is: %d \n\r", result);
    printf("\n");

    printf("Do you want to calculate another factorial? \n");
}

int main()
{
    int option = 1;


    while(TRUE)
    {
        printFibonacci();
        //printFactorial();

        printf("Enter 0 to finish and 1 to continue:");
        scanf(" %d", &option);
        printf("\n");

        if(option != 1){
            printf("Bye \n");
            break;
        }
    }
    return 0;
}
