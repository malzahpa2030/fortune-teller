let hi = 0
input.onGesture(Gesture.Shake, function () {
    hi = randint(1, 10)
    if (hi == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (hi == 2) {
        basic.showIcon(IconNames.No)
    } else if (hi == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (hi == 4) {
        basic.showIcon(IconNames.Sad)
    } else if (hi == 5) {
        basic.showIcon(IconNames.Fabulous)
    } else if (hi == 6) {
        basic.showIcon(IconNames.Asleep)
    } else if (hi == 7) {
        basic.showIcon(IconNames.Confused)
    } else if (hi == 8) {
        basic.showIcon(IconNames.Angry)
    } else if (hi == 9) {
        basic.showIcon(IconNames.Surprised)
    } else if (hi == 10) {
        basic.showLeds(`
            # # # # #
            # # . # #
            . . . . .
            # # # # #
            . # # # .
            `)
    }
})
