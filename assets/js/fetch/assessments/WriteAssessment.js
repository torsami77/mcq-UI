const writeExams = async () => {
   
    const userData = JSON.parse(localStorage.getItem('msq_user'));
    if(!userData){
      logOut();
    }
    const { token } = userData;
     
    const uri = `${host}/api/v1/exams/write-exams`;
    const h = new Headers({ 'Accept': 'application/json', 'authorization': `bearer ${token}` });
  
    const req = new Request(uri, {
      method: 'GET',
      headers: h,
    });

    try {
        const response = await fetch(req);
        const data = await response.json();
        if(data.status != 200){
          logOut();
          return false;
        }
        localStorage.setItem("msq_questions", JSON.stringify(data.data));
    } catch(e){
        console.log(e);
    }
    document.getElementById("main").innerHTML = `
    <div class="assessments">
        <span>Assessment Profile <i class="material-icons">create</i></span>
        <h1>Instructions</h1>
        <div class="instructions">
          <p>Carefully Read the following instructions <strong>before you start</strong></p>
          <ol>
            <p><li>You have 10mins to complete the test</li></p>
            <p><li>Ensure that you wouldn't be distracted before you start</li></p>
            <p><li>Ensure you have time, good internet and electicity before you start</li></p>
            <p><li>You will answer 10 questions for each of the two passages you'll read</li></p>
            <p><li>It is advisable that you dedicate 5mins for each passage</li></p>
            <p><li>You will find your clock at bottom left of the screen</li></p>
            <p><li>When time is up, the test will automatically be submitted</li></p>
            <p><li>Select your answer by clicking the radio button on the correct answer</li></p>
            <p><li>Each correct answer carries 5 marks</li></p>
            <p><li>We are rooting all the best for you</li></p>
            </ol>
        </div>
        <button onClick="startAssessments();">Start</button>
    <div>
    `;
return false;
}