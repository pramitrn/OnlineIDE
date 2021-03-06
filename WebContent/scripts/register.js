/**
 * 
 */

$(document).ready(
		function() {
			var validator = new Validator("signupForm");
			validator.EnableOnPageErrorDisplaySingleBox();
			//validator.EnableOnPageErrorDisplay();
			validator.EnableMsgsTogether();
			validator.addValidation("firstname", "req", "Please enter your first name");
			validator.addValidation("firstname","maxlen=20", "Max length for FirstName is 20");
			validator.addValidation("firstname","alpha","Alphabetic chars only");
			
			validator.addValidation("username","maxlen=50");
			validator.addValidation("username","req");
			validator.addValidation("username","email");
	
			
			validator.addValidation("password","minlen=8");
			validator.addValidation("confirm_password","eqelmnt=password", "The confirmed password is not same as password");
		}
);