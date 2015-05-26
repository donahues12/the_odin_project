#------------------------------------------
#Problem 1
#How many hours are in a year?
hours = 365 * 24
puts "There are #{hours} hours in a year"

#how manay minutes are in a decade?
minutes = (10 * 365 * 24 * 60)
puts "There are #{minutes} minutes in a decade"

#how many seconds old are you?
seconds = (26 * 365 * 24 * 60 * 60)
puts "I am #{seconds} seconds old"

#if i am 1204 million seconds old, how old am I?
how_old = ((1204*1000000) / (60)) / (365 * 24 * 60)
puts "1204 million seconds is equal to #{how_old} years old"\

#------------------------------------------
#Problem 2
#Write a program which asks for a person's first name, then middle, 
#then last. Finally, it should greet the person using their full name.

puts "What is your first name?"
first = gets.chomp
puts "What is your middle name?"
middle = gets.chomp
puts "What is your last name?"
last = gets.chomp

puts "Greetings, #{first} #{middle} #{last}."