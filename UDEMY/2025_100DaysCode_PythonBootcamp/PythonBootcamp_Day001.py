# ==================================
# SECTION 1: print() FUNCTION
# ==================================
# This section demonstrates how to use the print() function in Python to display output in the console.

# 1. Basic use of print() to show a simple message
print("Hello world!")

# 2. Printing multiple lines using the newline character \n
print("Hello world!\nHello world!\nHello world!")  # Output will appear on three separate lines

# 3. String concatenation using +
print("Hello" + "Angela")             # No space: combines the strings exactly
print("Hello " + "Angela")            # Includes space after "Hello"
print("Hello" + " Angela")            # Includes space before "Angela"
print("Hello" + " " + "Angela")       # Adds space explicitly between words


# ==================================
# SECTION 2: input() FUNCTION
# ==================================
# This section introduces input(), which lets you receive text input from the user.

# 1. Takes input but doesn't do anything with it
input("What is your name?")  # Asks for input but doesn't save or display it

# 2. Takes input and immediately uses it in a print statement
print("Hello " + input("What is your name? "))  # The input is embedded directly inside print()

# 3. Adds a greeting with an exclamation mark
print("Hello " + input("What is your name? ") + "!")  # Same as above, with punctuation for friendliness


# ==================================
# SECTION 3: COMMENT LINE(S)
# ==================================
# Comments help explain what your code does.
# Python ignores anything after the # symbol — great for documentation and reminders.
# Use them to clarify sections, logic, or disable lines temporarily.


# =========================================
# SECTION 4: VARIABLE
# =========================================
# This section covers how to use variables to store and reuse values, especially user input.

# 1. Saves the user's input into a variable, then prints it
name = input("What is your name?")
print(name)

# 2. Assigns a string directly to a variable (no input involved)
name = "Jack"
print(name)

# 3. Calculates and prints the number of characters in the name (without saving the input)
print(len(input("What is your name? ")))  # len() returns the number of characters

# 4. Same as above, but broken into steps with variables
username = input("What is your name? ")   # Save input
length = len(username)                    # Measure length
print("length of chars = " + length)                             # Output the result


# =========================================
# SECTION 5: FINAL PROJECT
# =========================================
# A small project: "Band Name Generator"
# This combines multiple user inputs into a single creative output.
# Demo link: https://appbrewery.github.io/python-day1-demo/

print("Welcome to the Band Name Generator.")
city_name = input("What's the name of the city you grew up in?\n")  # First input
pet_name = input("What's your pet's name?\n")                       # Second input
print("Your band name could be " + city_name + " " + pet_name)      # Combine and display result
