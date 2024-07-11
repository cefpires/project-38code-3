let distance = 0
led.enable(false)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.clear()
basic.forever(function () {
    lcd1602.clear()
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    lcd1602.putNumber(
    distance,
    0,
    0
    )
    lcd1602.putString(
    "cm",
    4,
    0
    )
    basic.pause(200)
})
