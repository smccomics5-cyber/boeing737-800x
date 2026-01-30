input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C C5 B A B A C C5 ", 300), music.PlaybackMode.UntilDone)
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
})
