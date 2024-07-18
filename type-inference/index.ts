const spaceship = {
    name: 'Jhon',
    speed: 0
}

function accelerate({ spaceship}: { spaceship: { name: string, speed: number, }, speed: number; })
    {
        spaceship.speed = 50
}

accelerate({ spaceship, speed: 50 });

console.log(spaceship);