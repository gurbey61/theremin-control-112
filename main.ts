input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    if (Power == 0) {
        Power = 1
    } else if (Power == 1) {
        Power = 2
    } else if (Power == 2) {
        Power = 3
    } else if (Power == 3) {
        Power = 4
    } else {
        Power = 0
    }
    if (Power == 1) {
        basic.showLeds(`
            . # # # #
            . # # # #
            . . # # .
            . . # # .
            . . # # .
            `)
    } else if (Power == 2) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            # # . . .
            # # . . .
            `)
    } else if (Power == 3) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . . .
            # # . . .
            # # . . .
            `)
    } else if (Power == 4) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            # # . # .
            # # . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let Pitch = 0
let PitchChange = 0
let Zaxis = 0
let Yaxis = 0
let Xaxis = 0
let Power = 0
radio.setGroup(1984)
Power = 0
basic.forever(function () {
    Xaxis = input.acceleration(Dimension.X) / 4.65
    Yaxis = input.acceleration(Dimension.Y) / 4.65
    Zaxis = input.acceleration(Dimension.Z) / 4.65
    PitchChange = Xaxis + (Yaxis + Zaxis)
    Pitch = 220 + PitchChange
    radio.sendNumber(Pitch)
})
