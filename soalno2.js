function valid_username(input) {
	var inputform: input;
	var RGEX = /^[a-z0-9._]{5,7}$/g;

  var Result = RGEX.test(inputForm);

  if(Result == false){
    return false;
  }else{
  	return true;
  }
}

function validate_password(input){
	if (input.length <= 9) {
		if (input.match(/(\W|_)/) && input.match(/(\d)/)) {
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

console.log('Result username validation is '+validate_username("diandra"));
console.log('Result password validation is '+validate_password("kint4m@ni"));
