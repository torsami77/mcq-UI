const showAssessments = async () => {
    document.getElementById("main").innerHTML = '';
    const userData = JSON.parse(localStorage.getItem('msq_user'));
    if(!userData){
      logOut();
    }

    let history = ``;
    if(userData.assessments.length < 1){
        history = '<h3>No history found</h3>'
    }/* else
        sort and display assessments
    */

    
    document.getElementById("main").innerHTML = `
    <div class="assessments">
        <span>Assessment Profile <i class="material-icons">create</i></span>
        <div id="assessment-history">${history}</div>
        <button onClick="writeExams();">Take Exams</button> &nbsp; <button onClick="logOut();">Log Out</button>
    <div>
    `;

return false;
}