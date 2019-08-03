#include<stdio.h>
#include <sys/types.h>


int main()
{
    int hijo, hijo2;
    hijo = fork();
    //sleep(5);
    hijo2 = fork();
    //sleep(5);
    printf("Padre PID: %d, Hijo PID: %d \n", getppid(), getpid());

    /*/
    AL tener un solo fork dentro del main se crean dos fork,
    el primero que es el original y el segundo es el que
    /*/
    return (0);
}
