radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) <= 0) {
        led.unplot(2, 4)
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
        led.plot(2, 4)
    }
    if (input.acceleration(Dimension.X) >= 0) {
        led.unplot(0, 2)
        led.plot(4, 2)
    } else {
        led.unplot(4, 2)
        led.plot(0, 2)
    }
})
