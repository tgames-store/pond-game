function drawContinueMenu() {
    sizeMenu()
  
  
    // background
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, $canv.width, $canv.height)
    drawMenuLogo()
    drawContinueButton()
    drawSoundControl()
  }
  
function drawContinueButton(hitting) {
  var button = GAME.MENU.button
  // button
  ctx.lineWidth = 4
  ctx.strokeStyle = '#444'
  roundRect(ctx, button.x, button.y, button.width, button.height, 20)
  ctx.fillStyle= hitting ? '#222' : '#1a1a1a'
  ctx.fill()
  ctx.stroke()
  var width = ASSETS.continue.width
  var height = ASSETS.continue.height
  var scale = scaleSize(width, height, button.width - 5, button.height - 5)
  width *= scale
  height *= scale
  var x = button.x + button.width/2 - width/2
  var y = button.y + button.height/2 - height/2
  ctx.drawImage(ASSETS.continue, x, y, width, height)
}