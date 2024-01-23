controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Top, sprites.dungeon.purpleSwitchUp)) {
        story.printCharacterText("*Click*")
        levr = true
    }
    if (thePlayer_fish.tileKindAt(TileDirection.Top, sprites.dungeon.chestClosed)) {
        if (!(axe)) {
            story.printCharacterText("An Axe!")
            axe = true
        }
    }
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        tiles.setCurrentTilemap(tilemap`level1`)
        thePlayer_fish.setPosition(60, 60)
    }
    if (thePlayer_fish.tileKindAt(TileDirection.Left, sprites.dungeon.purpleOuterWest1)) {
        if (axe) {
            story.printCharacterText("*CRACK*")
            tiles.setCurrentTilemap(tilemap`level28`)
        }
    }
})
let axe = false
let levr = false
let thePlayer_fish: Sprite = null
thePlayer_fish = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(thePlayer_fish)
tiles.setCurrentTilemap(tilemap`level1`)
let currentRoom = 0
let inRoom = true
let mapImage = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
let currentLocationColumn = 1
let currentLocationRow = 0
game.onUpdate(function () {
    if (!(levr)) {
        if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.floorDarkDiamond)) {
            tiles.placeOnRandomTile(thePlayer_fish, sprites.dungeon.floorDarkDiamond)
        }
    } else {
        if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.floorDarkDiamond)) {
            tiles.setCurrentTilemap(tilemap`level10`)
            thePlayer_fish.setPosition(60, 60)
        }
    }
})
game.onUpdate(function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark1)) {
        tiles.setCurrentTilemap(tilemap`level15`)
        thePlayer_fish.setPosition(60, 60)
    }
})
game.onUpdate(function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.stairLarge)) {
        tiles.setCurrentTilemap(tilemap`level1`)
        thePlayer_fish.setPosition(60, 60)
    }
})
game.onUpdate(function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark4)) {
        tiles.setCurrentTilemap(tilemap`level6`)
        thePlayer_fish.setPosition(60, 60)
    }
})
game.onUpdate(function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.stairNorth)) {
        tiles.setCurrentTilemap(tilemap`level12`)
        thePlayer_fish.setPosition(60, 60)
    }
})
game.onUpdate(function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.stairSouth)) {
        tiles.setCurrentTilemap(tilemap`level10`)
        thePlayer_fish.setPosition(60, 60)
    }
})
/**
 * No Code for You00..
 */
game.onUpdate(function () {
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.stairEast)) {
        tiles.setCurrentTilemap(tilemap`level14`)
        thePlayer_fish.setPosition(60, 60)
    }
    if (thePlayer_fish.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenWest)) {
        tiles.setCurrentTilemap(tilemap`level14`)
        thePlayer_fish.setPosition(60, 60)
        controller.moveSprite(thePlayer_fish, 0, 0)
        story.printCharacterText("You Escaped!")
        game.gameOver(true)
    }
})
