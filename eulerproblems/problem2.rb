a = 1
b = 1
sum = 0
i = 0

while i < 4000000 
	i = a + b
	a = b;
	b = i;
	if (i % 2 == 0)
		sum+=i
	end
end

puts sum