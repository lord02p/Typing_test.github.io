function reward() {
    var hero = document.querySelector('.hero');

    var num = document.querySelector('.num').innerText;
    var num_a = num.split(' ');
    var toall_letter = num_a[0];
    var attend_word = num_a[1];
    var right_word = num_a[2];
    var wrong_word = num_a[3];
    var time = num_a[4];
    hero.innerHTML = `
    <div class="typing-test">
    <div class="heading-pera">
        <h2>Your Typing Result</h2>
    </div>
   <div class="result-div">
    <div class="center">
        <p>Your net wpm ${eval((attend_word / 5)/time)} </p>
        <p>Your Typing Accuracy ${80} </p>
        <p>Totall Characters ${toall_letter}</p>
        <p> Attend Characters ${attend_word} </p>
        <p> Right Characters ${right_word} </p>
        <p> Wrong Characters ${wrong_word} </p>
    <div>
  </div>
    <div class="btns">
        <button id="exit_btn">Typing Again</button>
    </div>
</div>
    `;
    document.getElementById('exit_btn').addEventListener('click', () => {
        document.getElementById('click').click();
    })


}