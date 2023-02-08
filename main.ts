let Distances = 0
basic.forever(function () {
    Distances = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    whaleysans.showNumber(Distances)
    basic.showString("" + (Distances))
    if (Distances > 0 && Distances < 20) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(3000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
    basic.pause(100)
})
