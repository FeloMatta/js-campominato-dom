const playButton = document.getElementById('play');

playButton.addEventListener('click',

    function () {

        const gridContainer = document.getElementById('grid-container');

        const cellsNumber = 100;
        const bombsNumber = 16;
        const bombs = [];

        console.log('Cliccato play');

        for(let i = 0; i < bombsNumber; i++){
            const newBomb = getUniqueRandomNumber(1, cellsNumber, bombs);
            bombs.push(newBomb);
            console.log(newBomb);
        }

        console.log(bombs);
        
        gridContainer.innerHTML = '';

        let gameOver = false;

        for (let i = 1; i <= cellsNumber; i++) {
        
            const newCell = createNewCell(i);
            newCell.addEventListener('click',
            
                function () {
        
                    console.log(this.innerText);
                    if(gameOver == false){
                        const cellNumber = parseInt(this.innerText);
                        
                        if(bombs.includes(cellNumber)){
                            this.classList.add('bomb');
                            
                            const points = document.querySelectorAll('.cell.clicked').length;
                            
                            alert('Hai perso! Hai totalizzato: ' + points + ' punti');
                        
                            gameOver = true;
                        }
                        else{
                            this.classList.add('clicked');
                            
                            const points = document.querySelectorAll('.cell.clicked').length;
                            
                            if(points == cellsNumber - bombsNumber){
                                
                                alert('Hai vinto! Hai totalizzato: ' + points + ' punti');
                                gameOver = true;
                            }
                            
                        }

                    }
                    
        
                }
            
            );
            gridContainer.append(newCell);
        
        }

    }

);

function createNewCell(content) {

    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.innerHTML = content;

    return cell;

}

function getUniqueRandomNumber(min, max, arr) {

    let randomNumber = getRandomNumber(min, max);

    while(arr.includes(randomNumber)){
        randomNumber = getRandomNumber(min, max);
    }

    return randomNumber;

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}