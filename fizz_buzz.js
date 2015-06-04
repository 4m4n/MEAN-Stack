var FizzBuzz = {
    generate: function(max){
        var results = [];
        for(var i=1; i <= max; i++)
            results.push(this.returnString(i));
        return results;
    },
    returnString: function(num){
        if( 0 == num % 3){
            if( 0 == num % 5){
                return "FizzBuzz";
            }else{
                return "Fizz";
            }
        }else{
            if(0 == num % 5){
                return "Buzz";
            }else{
                return num;
            }
        }
    }
};