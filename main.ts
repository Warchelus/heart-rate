controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timerUp == false) {
        info.changeScoreBy(1)
    }
})
let timerUp = false
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d f d d f d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d f d d f d d . . . . 
    . . . . d d d f f d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(25, 60)
game.splash("Press buttons for 6 seconds!")
pause(6000)
mySprite.say(":)")
timerUp = true
