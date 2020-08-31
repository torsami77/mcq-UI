const startAssessments = () => {
    startTiming();
    const msq_questions = JSON.parse(localStorage.getItem('msq_questions'));
    let i = 1;
    let exams = '';
    msq_questions.forEach((passage) => {
        exams += `
            <p><h3> Passage ${i}</h3> ${passage.stories}</p>
        `;
        let n = 1;
        passage.questions.forEach((question) => {
            exams += `<p><strong>${n}. ${question.question}</br></strong>`;

            let { option_1, option_2, option_3, option_4 } = question;
            let shuffle = [option_1, option_2, option_3, option_4];

            let r = Math.floor((Math.random() * 4));
            let stoper = 1;
            while(stoper < 5){
                if(r == 4){
                    r = 0;
                }
                exams += `
                <input type="radio" class="" name="${question.id}" value="${shuffle[r]}">${shuffle[r]}</br>`;
                r += 1;
                stoper += 1;
            }
            exams += '</p></br>'

           
            n += 1;
                console.log(question);
        })
        exams += '</br></br></br>'
        i += 1;
    })

    document.getElementById("main").innerHTML = `
    <div id="timer_alert">
        <div>
            <h1>Time Up!</h1>
            <h3>Your time is up and your assessment have been submitted.</h3>
            <button onClick="document.getElementById('timer_alert').style.display = 'none'">O.K.</button>
        </div>
    </div>
    <div class="assessments" id="assessments">
        ${exams}
        <button onClick="submitAssessment();">Submit</button>
    <div>
    `;

  return false;
}