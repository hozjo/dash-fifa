const url = 'https://fifagama.herokuapp.com/fifa19/0/10';
fetch( url)
    .then(response => response.text())
    .then(result => {
        const players = JSON.parse(result)
        for (const player of players) {
            createCard(player.data)
            createGraph(player.data)
            
        }    
        
    });
    


    function createGraph(item){
        var canv = document.createElement("canvas");
        canv.className = "col-lg-6"
        var myChart = new Chart(canv, {
            type: 'radar',
            data: {
                labels: [
                    "Acceleration",
                    "SprintSpeed",
                    "Agility",
                    "Jumping",
                    "Stamina",
                    "Strength",
                    "LongShots"
                ],
                datasets: [{
                    label: item.Name,
                    data: [item.Acceleration, item.SprintSpeed, item.Agility, item.Jumping, item.Stamina, item.Strength, item.LongShots],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                }
            }
        });
        document.getElementById('fifa').appendChild(canv); 
    }


    function createCard(player){   
            var card = document.createElement('div')
            card.className = "card col-sm-4 m-5 bg-info"

            var name = document.createElement('p');
            name.className = "card-title"
            // name.href = "#"
            name.innerText = `Nome: ${player.Name}`;

            var age = document.createElement('p');
            age.className= "card-text"
            age.innerText = `Idade: ${player.Age}`;

            var club = document.createElement('p');
            club.className= "card-text"
            club.innerText = `Clube: ${player.Club}`;
            
            var imgPlayer = document.createElement('img');
            imgPlayer.className = "card-img-top"
            var imgPlayer10 = player.Photo.replace("/4/", "/10/");
            imgPlayer.src = imgPlayer10;

            var imgClub = document.createElement('img');
            imgClub.className = "card-img-overlay"
            imgClub.src = player["Club Logo"];

            card.appendChild(imgPlayer);            
            card.appendChild(name);
            card.appendChild(age);
            card.appendChild(imgClub);
            card.appendChild(club);
            document.getElementById('fifa').appendChild(card);            
    }