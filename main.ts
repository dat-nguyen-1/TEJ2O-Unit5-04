/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program uses the RobotBit's Neopixels to create a traffic light.
*/

// Assign Neopixel colours as constants.
const BLACK: NeoPixelColors = NeoPixelColors.Black
const RED: NeoPixelColors = NeoPixelColors.Red
const YELLOW: NeoPixelColors = NeoPixelColors.Yellow
const GREEN: NeoPixelColors = NeoPixelColors.Gree

// Initialize display.
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Initialize Neopixel strip.
const neopixelStrip: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

neopixelStrip.setPixelColor(0, BLACK)
neopixelStrip.setPixelColor(1, BLACK)
neopixelStrip.setPixelColor(2, BLACK)
neopixelStrip.setPixelColor(3, BLACK)
neopixelStrip.show()

// Handle input from button A.
input.onButtonPressed(Button.A, function() {
    // Turn 3rd Neopixel Green for 1 second.
    neopixelStrip.setPixelColor(2, GREEN)
    neopixelStrip.show()
    basic.pause(1000)
    neopixelStrip.setPixelColor(2, BLACK)

    // Turn 2nd Neopixel Yellow for 1 second.
    neopixelStrip.setPixelColor(1, YELLOW)
    neopixelStrip.show()
    basic.pause(1000)
    neopixelStrip.setPixelColor(1, BLACK)

    // Turn 1st Neopixel Red for 1 second.
    neopixelStrip.setPixelColor(0, RED)
    neopixelStrip.show()
    basic.pause(1000)
    neopixelStrip.setPixelColor(0, BLACK)
    neopixelStrip.show()
})
