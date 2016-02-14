let keyboardMaster = function () {
    this.keysDown = {};
}

window.addEventListener("keydown", function (event) {
    keyboardMaster.keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete keyboardMaster.keysDown[event.keyCode];
})

module.export = keyboardMaster;
