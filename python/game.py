import time

answer="no"
wait=[".",".",".",".","."]

def guess_number_binary():

    currentNumber=0   
    number=100
    
    while currentNumber <= number:

        res=int((currentNumber+number)/2)
        answer=input(f"Is your number greater or less than {res}?: \n\r")

        if answer == "greater":
            currentNumber=res+1
        elif answer == "less":
            number = res-1
        elif answer == "yes":
            print("Yes that is my number")
            return res
            
            
print("Think about a number between 0 and 100")

for i in range(5):
    time.sleep(1)
    print(wait[i], end = "")

while answer != "yes":
    print("\n")
    answer=str(input("Have you already thought about the number? "))

    if answer == "yes":
        guess_number_binary()