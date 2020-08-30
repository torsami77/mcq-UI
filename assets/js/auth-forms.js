const toggleForm = (param) => {
	switch(param) {
	  case 'signUpForm':
	    document.getElementById('main').innerHTML = signUpForm;
	    break;
 	  case 'signInForm':
	    document.getElementById('main').innerHTML = signInForm;
	    break;
          case 'resetPasswordForm':
	    document.getElementById('main').innerHTML = resetPasswordForm;
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
    <div id="error"></div>
    <div class="form">
	    <input type="email" id="email" placeholder="Enter Your Email"/><span class="required">*</span></br>
	    <input type="email" id="first_name" placeholder="Enter First Name"/><span class="required">*</span></br>
	    <input type="email" id="last_name" placeholder="Enter Last Name"/><span class="required">*</span></br>
	    <button onClick="resetPassword();">Sign Up</button>
    </div>
    <p><a href="#" onClick="toggleForm('signInForm');">Sign into my account</a></p>
    <p><a href="#" onClick="toggleForm('resetPasswordForm');">Forgot password?</a></p>
<div>
`;

const signInForm = `
<div class="auth-form">
    <span>Assessment Profile <i class="material-icons">create</i></span>
    <h1>Sign in</h1>
    <div id="error"></div>
    <div class="form">
	    <input type="email" id="email" placeholder="Enter Your Email"/><span class="required">*</span></br>
	    <input type="password" id="password" placeholder="Enter Your password"/><span class="required">*</span></br>
	    <button onClick="signIn();">Sign in</button>
    </div>
    <p><a href="#" onClick="toggleForm('signUpForm');">Don't have account?</a></p>
    <p><a href="#" onClick="toggleForm('resetPasswordForm');">Forgot password?</a></p>
<div>
`;

const resetPasswordForm = `
<div class="auth-form">
    <span>Assessment Profile <i class="material-icons">create</i></span>
    <h1>Password Reset</h1>
    <div id="error"></div>
    <div class="form">
	    <input type="email" id="email" placeholder="Enter Your Email"/><span class="required">*</span></br>
	    <button onClick="resetPassword();">Send reset link to my email</button>
    </div>
    <p><a href="#" onClick="toggleForm('signUpForm');">Don't have account?</a></p>
    <p><a href="#" onClick="toggleForm('signInForm');">Sign into my account</a></p>
<div>

`;
