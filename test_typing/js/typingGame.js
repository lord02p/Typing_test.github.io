function game() {

    // append game box
    var hero = document.querySelector('.hero');
    hero.innerHTML = `
<div class="typing-test">
    <div class="heading-pera">
        <h2>Typing Game</h2>
    </div>
    <div class="game-box">
        <div class="target-character">
            <div class="game-image">
            <img src="/img/XVo6.gif" alt="">
            </div>
            <p>Target Character</p>
            <button id="chracter_game">START</button>
        </div>
    </div>
      
</div>
    `;

    // start game script
    var chracter_game = document.getElementById('chracter_game');
    chracter_game.addEventListener('click', () => {
        hero.innerHTML = `
        <div class="typing-test">
            <div class="heading-pera">
                <h2>Character Target</h2>
            </div>

            <div class="game-point">
                <div class="right">
                <p id="totall_characters"> Totall Characters 0</p>
                <p id="speed"> Speed 00</p>
                </div>

                <div class="left">
                <p id="game_time"> Time 00:00</p>
                <p id="game_data"> Point 0</p>
                </div>
               
            </div>

            <div class="cahracter-data-box">
              <p id="character_game_data">😍</p>
            </div>

            <input type="text" id="character_game_input">
            <button id="play"> PLAY GAME </button>
            <div class="dummy_result"></div>
        </div>
            `;

        // play game script
        var game_data_text = `Thisaffectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingoflookingatlifeandfacingchallengesectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinkingectsnotonlytheirmoodandbehaviorbutalsochangestheirwayofthinking`;
        game_data_text = game_data_text.toLowerCase();
        var play = document.getElementById('play');
        play.addEventListener('click', () => {
            var mnts = 0;
            var scnd = 0;
            var game_split_index = 0;
            var game_point = 0;
            var game_span2;
            var speed = 2300;
            var character_game_input = document.getElementById('character_game_input');
            var character_game_data = document.getElementById('character_game_data');
            var game_data_text_split = game_data_text.split('');
            character_game_input.focus();
            play.style.display = 'none';
            var p = document.createElement('p');
            p.classList.add('game_key');
            p.innerText = 'Your Game Key';
            hero.append(p)
            var speed_int = setInterval(() => {
                if (speed <= 400) {
                    clearInterval(speed_int);
                    speed = speed;
                } else {
                    speed = speed - 50;
                }
                console.log(speed);

            }, speed);

            var game_span_arr = Array.from(game_data_text_split)
            game_span_arr.forEach((a) => {
                var game_span = document.createElement('span');
                game_span.classList.add('game_span_data');
                game_span.innerText = a;
                document.querySelector('.dummy_result').append(game_span);
            })
            var game_span_data2;
            setTimeout(() => {
                character_game_data.innerText = '3';
            }, 800);
            setTimeout(() => {
                character_game_data.innerText = '2';
            }, 1600);
            setTimeout(() => {
                character_game_data.innerText = '1';
            }, 2400);
            setTimeout(() => {
                character_game_data.innerText = 'GO';
            }, 3200);
            setTimeout(() => {
                var game_int = setInterval(() => {
                    game_split_index = game_split_index + 1;
                    game_span_data2 = document.querySelectorAll('.game_span_data');
                    document.querySelector('.cahracter-data-box').innerHTML = '';
                    document.querySelector('.cahracter-data-box').append(game_span_data2[game_split_index]);
                }, speed);


                var time_int = setInterval(() => {
                    var game_time = document.getElementById('game_time');
                    var scnd2 = 0;
                    var mnts2 = 0;
                    scnd = scnd + 1;
                    if (scnd <= 9) {
                        scnd2 = `0${scnd}`;
                    } else {
                        scnd2 = scnd;
                    }
                    if (scnd === 60) {
                        mnts = mnts + 1;
                        scnd = 0;
                    }
                    if (mnts <= 9) {
                        mnts2 = `0${mnts}`;
                    } else {
                        mnts2 = mnts;
                    }
                    game_time.innerText = `Time ${mnts2}:${scnd2}`;
                }, 1000);

                // inclusde speed in div
                setInterval(() => {
                    if (speed == 400) {
                        document.getElementById('speed').innerText = `Speed 10`;
                    }
                    if (speed == 600) {
                        document.getElementById('speed').innerText = `Speed 08`;
                    }
                    if (speed == 1000) {
                        document.getElementById('speed').innerText = `Speed 06`;
                    }
                    if (speed == 1500) {
                        document.getElementById('speed').innerText = `Speed 04`;
                    }
                    if (speed == 2200) {
                        document.getElementById('speed').innerText = `Speed 02`;
                    }
                }, );

                character_game_input.addEventListener('keypress', (e) => {
                    p.innerText = e.key;
                    if (game_span_data2[game_split_index].innerText === e.key) {
                        game_point = game_point + 1;
                        game_span_data2[game_split_index].style.animation = `rightKey ${speed}ms`;

                        if (speed <= 700) {
                            setTimeout(() => {
                                game_span_data2[game_split_index].style.display = 'none';
                            }, 400);
                        } else {
                            setTimeout(() => {
                                game_span_data2[game_split_index].style.display = 'none';
                            }, 700);
                        }
                        setTimeout(() => {
                            game_span_data2[game_split_index].style.display = 'none';
                        }, 700);
                    } else {
                        game_point = game_point;
                        clearInterval(speed_int);
                        clearInterval(game_int);
                        clearInterval(time_int);
                        document.querySelector('.cahracter-data-box').style.position = 'relative';
                        document.querySelector('.cahracter-data-box').style.animation = 'wrongKey 1s';
                        var p2 = document.createElement('p');
                        p2.classList.add('character_game_data');
                        p.remove();
                        p2.innerText = 'End';
                        document.querySelector('.cahracter-data-box').innerHTML = '';
                        document.querySelector('.cahracter-data-box').append(p2)
                        var button = document.createElement('button');
                        button.innerText = `AGAIN START`;
                        button.classList.add('game_btn');
                        hero.append(button);
                        button.addEventListener('click', () => {
                            chracter_game.click();
                        })

                    }
                    document.getElementById('game_data').innerText = `Point ${game_point}`;


                })
            }, 3400);
        })
    })
}