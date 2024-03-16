const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = players.map((player, index) => {
        return {
            name: player,
            strength: getRandomStrength(),
            image: `images/super-${index + 1}.png`,
            type: index % 2 === 0 ? "hero" : "villain"
        };
    });

    return detailedPlayers;
}


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    var x = players.filter((player)=>{
        return player.type == type
    })
   
    var y = x.map((player,i)=>{
        console.log(i)
        let divi = `<div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}
        </div>
        <div class="strength">${player.strength}
        </div>
        </div>`
        return divi
    })

    fragment = y.join(' ')

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}