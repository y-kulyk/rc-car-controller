let mg_y = 0
let mg_x = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    mg_x = input.acceleration(Dimension.X)
    serial.writeValue("mgx", mg_x)
    basic.pause(100)
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
    mg_y = input.acceleration(Dimension.Y)
    serial.writeValue("mgy", mg_y)
    serial.writeLine("Two values sent")
    basic.pause(100)
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
