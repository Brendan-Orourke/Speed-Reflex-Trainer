/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Jan 2026
 * This program records reaction time for 2 players
 */
let currentPlayer = 1
let scoreP1 = 9999
let scoreP2 = 9999
let startTime = 0
let gameActive = false
let falseStart = false 

let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Setup
strip.showColor(neopixel.colors(NeoPixelColors.Orange))
basic.showString("P1")

// Switch Player by shaking
input.onGesture(Gesture.Shake, function () {
    currentPlayer = currentPlayer === 1 ? 2 : 1
    basic.showString("P" + currentPlayer)
})

// Start game (Button B)
input.onButtonPressed(Button.B, function () {
    gameActive = false
    falseStart = false
    startTime = 0
    basic.clearScreen()
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    // Random interval to start the game    
    basic.pause(randint(1000, 3000))
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    startTime = control.millis()
    gameActive = true
})

// Period where pressing A causes a False Start
basic.pause(randint(1000, 3000))

// Only turn green and start timer if no false start happened
if (falseStart == false) {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    startTime = control.millis()
    gameActive = true
}


// Record reaction time (Button A)
input.onButtonPressed(Button.A, function () {
    if (gameActive) {
        let result = control.millis() - startTime
        gameActive = false
        basic.showNumber(result)

        // Player 1 best score
        if (currentPlayer === 1 && result < scoreP1) {
            scoreP1 = result
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.showString("P1 BEST")
        }

        // Player 2 best score
        if (currentPlayer === 2 && result < scoreP2) {
            scoreP2 = result
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.showString("P2 BEST")
        }

        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
