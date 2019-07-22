import random 
import turtle
from turtle import *

def star_chalk():
    color('red', 'yellow')
    begin_fill()
    while True:
        forward(200)
        left(170)
        if abs(pos()) < 1:
            break
    end_fill()
    done()
    turtle.exitonclick()
star_chalk()

def cross_chalk():
    while True:
        turtle.forward(100)
#cross_chalk()

def turtle_chalk():
    turtle.shape("turtle")
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(100)
    turtle.left(90)
    turtle.forward(100)
    turtle.exitonclick()

#turtle_chalk()
#print("Hello World I am using python!")

#print(random.randrange(0,1000))

#print(input("Enter your message:"))


def age_function():
    age=int(input("Enter your age: "))

    if age == 0:
        print("Your are a baby " + str(age))
        print(f"Your are a baby {age}")
    elif age > 0:
        print(f"Your age is {age}")



def reservoir():
    capacity=float(input("Level of the reservoir: \n"))

    if capacity > 1000.1:
        print("Alert")
    else:
        print("No Danger")

#age_function()
#reservoir()