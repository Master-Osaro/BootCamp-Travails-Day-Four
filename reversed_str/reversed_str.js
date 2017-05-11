exports.reverseString = (string) =>{
	count = 0;
	reversedString=''
	if (string===''){
		return null;
	}
	else
	{
		stringArr = string.split('')
		stringArr.reverse()

    	for (count; count < stringArr.length; count++) 
    	{
       		reversedString+= stringArr[count];
    	}
    	if( reversedString === string ){
    		return true
    	}
    	else
    	{
            return reversedString
    	}
    
   }
   }  
