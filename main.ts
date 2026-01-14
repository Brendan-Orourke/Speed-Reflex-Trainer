/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Jan 2026
 * This program Records Your reaction time and records 2 different players best 
*/

let playerMode = 1
let currentPlayer = 1
let scoreP1 = 9999
let scoreP2 = 9999
let startTime = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

// Setup
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.showString("P1")

// Switch Player by Shaking Microbit between 1 and 2 
input.onGesture(Gesture.Shake, function () {
    input.onGesture(Gesture.Shake, function () {
        currentPlayer = (currentPlayer == 1) ? 2 : 1
    })

    // Start game press Button B
    input.onButtonPressed(Button.B, function () {
        basic.clearScreen()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(randint(1000, 3000))
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        startTime = control.millis()
    })

    // Results Button A
    input.onButtonPressed(Button.A, function () {
        if (startTime > 0) {
            let result = control.millis() - startTime
            startTime = 0
            basic.showNumber(result)

            // Check High Score for Player 1
            if (playerMode == 1 && result < scoreP1) {
                scoreP1 = result
                strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
                basic.showString("Player 1 BEST!")
            }

            // Check High Score for Player 2
            if (playerMode == 2 && result < scoreP2) {
                scoreP2 = result
                strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
                basic.showString("Player 2 BEST!")
            }

            basic.pause(1000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    })
})