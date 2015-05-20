var a = 1;
var b = 1;
var sum = 0;


	for(var i=0; i<4000000;i++)
	{
		i = a + b;
		a = b;
		b = i;

		if(i % 2===0)
		{
			sum+=i;
			console.log(sum);
		}

	}
