/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Jan 2026
 * This program Records Your reaction time and records 2 different players best 
*/
let playerMode = 1
let scoreP1 = 9999
let scoreP2 = 9999
let startTime = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

 // Setup
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.showString("Player 1") // Start as Player 1

 // Switch Player by Shaking Microbit
input.onGesture(Gesture.Shake, function () {
    if (playerMode == 1) {
playerMode = 2
basic.showString("Player 2")
    } else {
playerMode = 1
basic.showString("Player 1")
}
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

 // Check High Score for the ACTIVE player
    if (playerMode == 1) {
    if (result < scoreP1) {
scoreP1 = result
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.showString("Player 1 BEST!")
}
} else {
    if (result < scoreP2) {
scoreP2 = result
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.showString("Player 2 BEST!")
}
}
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
})