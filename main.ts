let Wetness = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    Wetness = pins.analogReadPin(AnalogPin.P0)
})
basic.forever(function () {
    if (Wetness <= 500) {
        while (Wetness <= 500) {
            basic.showIcon(IconNames.Sword)
            music.playMelody("C C5 C D C C5 C D ", 300)
        }
    } else if (Wetness >= 100) {
        basic.showIcon(IconNames.Sword)
        music.playMelody("C C5 C D C C5 C D ", 300)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
