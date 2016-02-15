let keysDown = {};

function KeyboardMaster() {
    this.keysDown = keysDown;
}

// window.addEventListener("keydown", function (event) {
//     debugger;
//     keysDown[event.keyCode] = true;
// });

// window.addEventListener("keyup", function (event) {
//     delete keysDown[event.keyCode];
// })

module.export = KeyboardMaster;
