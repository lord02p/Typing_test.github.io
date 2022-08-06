document.getElementById('click').click();

function main() {
    var hero = document.querySelector('.hero');
    hero.innerHTML = `
    <div class="heading-pera">
    <h2>Check your typing skills in a minute</h2>
    <p>Type away to join 150+ million test takers!</p>
</div>

<div class="select-container">

    <div class="select-box">
        <div class="select">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#148aa1" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              </svg>
            <select name="" id="time">
                <option value="1">1 Minute Test</option>
                <option value="2">2 Minute Test</option>
                <option value="3">2 Minute Test</option>
                <option value="4">5 Minute Test</option>
                <option value="10">10 Minute Test</option>
            </select>
        </div>
        <div class="select">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#148aa1" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
              </svg>
            <select name="" id="mood">
                <option value="Easy">Easy Text</option>
                <option value="Medium">Medium Text</option>
                <option value="Hard">Hard Text</option>
            </select>
        </div>
        <button onclick="start()">START TEST</button>
    </div>

    <!-- <img src="/img/1655561478278.png" class="img" alt=""> -->
</div>
    `;
}