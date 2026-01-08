/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Jan 2026
 * This program Records Your reaction time
*/
let reactionTime = 0
let startTime = 0
let highScore = 9999

let neopixelStrip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
basic.showIcon(IconNames.Asleep)

// Reaction Button 
input.onButtonPressed(Button.A, function () { })
if (startTime == 0) { }

// If somebody false starts
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo)) 
basic.showIcon(IconNames.No)
basic.pause(1000)
basic.clearScreen()

// Proper Hit

startTime = 0
basic.showNumber(reactionTime)

if (reactionTime < highScore) { }
highScore = reactionTime
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
basic.showString("HIGHSCORE!")
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
basic.pause(2000)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))

// Button B A new game
input.onButtonPressed(Button.B, function  () { } )
basic.clearScreen()
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))

// waiting for a random moment to activate
basic.pause(randint(1500,4500))

