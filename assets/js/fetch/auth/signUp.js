const signUp = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/images/fetch_loader.gif"/>';
    const email = document.getElementById('email').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
  
    const uri = `${host}/api/v1/users/signup`;
    const h = new Headers({ 'content-type': 'application/json' });
    const body = {
      email,
      first_name,
      last_name,
    };
  
    const req = new Request(uri, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(body),
    });

   try {
    const response = await fetch(req);
    const data = await response.json();
    if(data.errors){
        let errorString = ''
        for (var key in data.errors) {
            errorString = errorString + `<p>${data.errors[key]}</p>`;
        }
        document.getElementById("errors").innerHTML = errorString;
        return false
    }
    if(data.status === 409){
      document.getElementById("errors").innerHTML=`<p>${data.message}</p>`;
      return false
    }
    if(data.status === 201){
        document.getElementById("errors").innerHTML='';
      document.getElementById("form").innerHTML='<span class="success-message">Please proceed to your email to find verification link</span>';
      return false;
    }
    console.log(data);
   } catch(e){
       console.log(e);
   }
   
    return false;
  }