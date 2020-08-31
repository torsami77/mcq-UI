const signIn = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/images/fetch_loader.gif"/>';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
  
    const uri = `${host}/api/v1/users/signin`;
    const h = new Headers({ 'content-type': 'application/json' });
    const body = {
      email,
      password
    };
  
    const req = new Request(uri, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(body),
    });

   try {
    const response = await fetch(req);
    const data = await response.json();
    console.log(data);
    if(data.errors){
        let errorString = ''
        for (var key in data.errors) {
            errorString = errorString + `<p>${data.errors[key]}</p>`;
        }
        document.getElementById("errors").innerHTML = errorString;
        return false
    }
    if(data.status === 401){
      document.getElementById("errors").innerHTML=`<p>${data.message}</p>`;
      return false
    }
    if(data.status === 200){
      localStorage.setItem("msq_user", JSON.stringify(data.data));
      localStorage.setItem("msq_token", JSON.stringify(data.data.token));
      userHasActiveSession = true;
      document.querySelector("#user").innerHTML = `<a href="#"><span class="material-icons">account_circle</span></br>Hi, ${data.data.first_name}</a>`;
      toggleView('assessments');
      return false;
    }
   } catch(e){
       console.log(e);
   }
   
    return false;
  }