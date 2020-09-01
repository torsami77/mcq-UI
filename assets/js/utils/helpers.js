const IS_DEV_MODE = false;
// eslint-disable-next-line no-unused-vars
const host = IS_DEV_MODE
  ? 'http://localhost:3000'
 : 'https://cors-torsami77.herokuapp.com/quick-mcq-backend.herokuapp.com/';
 
 const toggleVisibility = () => {
    if(document.getElementById("visibility").innerHTML === "visibility"){
      document.getElementById("visibility").innerHTML = "visibility_off"
      document.getElementById("password").type = "password"
    }else{
      document.getElementById("visibility").innerHTML = "visibility"
      document.getElementById("password").type = "text"
    }
  };


(() => {
  if(JSON.parse(localStorage.getItem('msq_user')) && document.getElementById("user")){
    const userData = JSON.parse(localStorage.getItem('msq_user'));
    const { first_name } = userData;
    userHasActiveSession = true;
    document.querySelector("#user").innerHTML = `<a href="#"><span class="material-icons">account_circle</span></br>Hi, ${first_name}</a>`;
    toggleView('assessments');
  }
})();

logOut = () => {
  document.querySelector("#user").innerHTML = '';
  localStorage.clear();
  toggleView('signInForm');
  return false;
}

const autoAuth = () => {
  if(userHasActiveSession){
    toggleView('assessments');
  }
}

const tokenFromUrl = () => {
  const url = window.location;
  const access_token = new URLSearchParams(url.search).get('token');
  return access_token;
}

let sec_count;

const sec = () => {
  let duration = 60;
  clearInterval(sec_count);
  sec_count = setInterval(() => {
    duration -= 1;
    document.querySelector('#sec').innerHTML = duration;
  }, 1000);
}

const min = () => {
  let duration = 9;
  return setInterval(() => {
    duration -= 1;
    if(duration <= 5 && duration >= 0){
      document.querySelector('#clock').style.color = 'red';
      document.querySelector('#time_ux').style.display = 'block';
    }else{
      document.getElementById('time_ux').style.display = 'none';
    }
    if(duration < 0){
      document.querySelector('#time_ux').style.display = 'none';
      document.querySelector('#clock').style.display = 'none';
      document.querySelector('#timer_alert').style.display = 'block';
      clearInterval(sec_count);
      return clearInterval(min)
    }
    document.querySelector('#min').innerHTML = duration;
    document.querySelector('#sec').innerHTML = '60';
    sec();
  }, 1000 * 60);
}

let submitAssessment = () => {
  //score computation
  document.getElementById('time_ux').style.display = 'none';
  document.querySelector('#clock').style.display = 'none';
  document.querySelector('#assessments').innerHTML = submitted;
 return false;
};

const startTiming = () => {
	
  setTimeout(submitAssessment, 60000 * 10);
  document.getElementById('clock').style.display = 'block';
  document.getElementById('clock').innerHTML = `
  <p>Timer:</p>
  <h3><span id="min">9</span>mins: <span id="sec">60</span>s</h3>
  `;
  sec();
  min();
}

const submitButton = `<button onClick="document.getElementById('buttons').innerHTML = confirmation">Submit</button>`;

const confirmation = `
  <h3>Are you sure you want to submit?</h3>
  <button onClick="submitAssessment();">Yes</button>&nbsp;&nbsp;
  <button onClick="document.getElementById('buttons').innerHTML = submitButton">No</button>
`;
