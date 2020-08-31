const toggleView = (param) => {
	switch(param) {
    case 'signUpForm':
      if(userHasActiveSession == false){
        document.getElementById('main').innerHTML = signUpForm;
      }
	    break;
 	  case 'signInForm':
	    document.getElementById('main').innerHTML = signInForm;
	    break;
      case 'resetPasswordForm':
            document.getElementById('main').innerHTML = resetPasswordForm;
        break;
      case 'assessments':
	        showAssessments();
        break;
	  default:
	    // document.getElementById('main').innerHTML = signInForm;
	}
return false;
};

const signUpForm = `
<div class="auth-form">
    <span>Assessment Profile <i class="material-icons">create</i></span>
    <h1>Sign Up</h1>
    <div id="errors"></div>
    <div class="form" id="form">
	    <input type="email" id="email" placeholder="Enter Your Email"/><span class="required">*</span></br>
	    <input type="email" id="first_name" placeholder="Enter First Name"/><span class="required">*</span></br>
	    <input type="email" id="last_name" placeholder="Enter Last Name"/><span class="required">*</span></br>
	    <button onClick="signUp();">Sign Up</button>
    </div>
    <p><a href="#" onClick="toggleView('signInForm');">Sign into my account?</a></p>
    <p><a href="#" onClick="toggleView('resetPasswordForm');">Forgot password?</a></p>
<div>
`;

const signInForm = `
<div class="auth-form">
    <span>Assessment Profile <i class="material-icons">create</i></span>
    <h1>Sign in</h1>
    <div id="errors"></div>
    <div class="form" id="form">
	    <input type="email" id="email" placeholder="Enter Your Email"/> &nbsp; <span class="required">*</span></br>
	    <input type="password" id="password" placeholder="Enter Your password"/><a href="#"><i class="material-icons" id="visibility" onclick="toggleVisibility();">visibility_off</i></a> <span class="required">*</span></br>
	    <button onClick="signIn();">Sign in</button>
    </div>
    <p><a href="#" onClick="toggleView('signUpForm');">Don't have account?</a></p>
    <p><a href="#" onClick="toggleView('resetPasswordForm');">Forgot password?</a></p>
<div>
`;

const resetPasswordForm = `
<div class="auth-form">
    <span>Assessment Profile <i class="material-icons">create</i></span>
    <h1>Password Reset</h1>
    <div id="errors"></div>
    <div class="form" id="form">
	    <input type="email" id="email" placeholder="Enter Your Email"/><span class="required">*</span></br>
	    <button onClick="resetPassword();">Send reset link to my email</button>
    </div>
    <p><a href="#" onClick="toggleView('signUpForm');">Create new account?</a></p>
    <p><a href="#" onClick="toggleView('signInForm');">Sign into my account?</a></p>
<div>
`;

const submitted = `
  <span class="success-message">
      <span style="font-size: 90px;" class="material-icons">
          check_circle
      </span>
      <h1>Submitted</h1>
  </span>
  <button onClick="toggleView('assessments');">See Scores</button>
`;