pNum = 2;
x = 600851475143;

while (x != pNum)
	if (x % pNum == 0)
		x = x / pNum
	else
		pNum += 1
	end
end

puts pNum