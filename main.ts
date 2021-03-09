let winner = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let state = "idle"
let led_p1 = strip.range(4, 8)
let led_p2 = strip.range(0, 3)
basic.forever(function () {
    let colour = 0;
    switch (randint(0, 2))
    {
        case 0:
            colour = neopixel.colors(NeoPixelColors.Red)
            break;
        case 1:
            colour = neopixel.colors(NeoPixelColors.Green)
            break;
        case 2:
            colour = neopixel.colors(NeoPixelColors.Blue)
            break;
        default:
            colour = neopixel.colors(NeoPixelColors.Yellow)
            break;
    }

    strip.showColor(neopixel.colors(NeoPixelColors.White))
    pause(randint(1000, 4000))
    strip.showColor(colour)
    winner = 0

    for (let index = 0; index < 3000 && winner == 0; index++) {
        pause(1)
    }

    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (winner == 1) {
        for (let i = 0; i<5; i++) {
            led_p1.showColor(colour)
            pause(300)
            led_p1.showColor(neopixel.colors(NeoPixelColors.Black))
            pause(300)
        }
    } else if (winner == 2) {
    	for (let i = 0; i<5; i++) {
            led_p2.showColor(colour)
            pause(300)
            led_p2.showColor(neopixel.colors(NeoPixelColors.Black))
            pause(300)
        }
    } else {
        for (let i = 0; i<4; i++) {
            led_p2.showColor(neopixel.colors(NeoPixelColors.Yellow))
            pause(300)
            led_p2.showColor(neopixel.colors(NeoPixelColors.Black))
            pause(300)
        }
    }

    strip.showRainbow()
    for (let i=0; i<200; i++) {
        strip.rotate()
        strip.show()
        pause(50)
    }
})

input.onPinPressed(TouchPin.P1, function () {
    if (winner == 0) {
        winner = 2;
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (winner == 0) {
        winner = 1;
    }
})