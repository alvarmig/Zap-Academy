import time

answer="no"
wait=[".",".",".",".","."]

def get_gly(prompt, greater_values={"g", "greater"}, less_values={"l", "less"}, yes_values={"y", "yes"}):
    """
    Prompt for a greater, less or yes response;
    """
    while True:
        response = input(prompt).strip().lower()
        if response in greater_values:
            return 'greater'
        elif response in less_values:
            return 'less'
        elif response in yes_values:
            return "yes"


def guess_number_binary():

    currentNumber=0   
    number=100
    
    while currentNumber <= number:

        res=int((currentNumber+number)/2)
        answer=get_gly(f"Is your number greater or less than {res}?: \n\r")

        if currentNumber == res:
            print(f"Your number is {res}")
            break
        elif answer == "greater":
            currentNumber=res+1
        elif answer == "less":
            number = res-1
        elif answer == "yes":
            print(f"Your number is {res}")
            return res
            
            
print("Think about a number between 0 and 100")

for i in range(5):
    time.sleep(1)
    print(wait[i], end = "")

while answer != "yes":
    print("\n")
    answer=get_gly(str("Have you already thought about the number? "))

    if answer == "yes":
        guess_number_binary()