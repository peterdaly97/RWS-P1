

class Input {
  constructor() {
    this.keys = [];
    this.x = 0;
    this.y = 0;
    this.mouseDirection = null;
    this.gamepads = [];
    this.keyHandlers = [];

    var that = this;

    window.addEventListener("keydown", this.keyDownHandler.bind(null, that));
    window.addEventListener("keyup", this.keyUpHandler.bind(null, that));

    window.addEventListener("mousemove", this.mousePos.bind(null, that));

    window.addEventListener("gamepadconnected",
    this.controllerConnect.bind(null, that, true));
    window.addEventListener("gamepaddisconnected",
    this.controllerConnect.bind(null, that, false));
  }

  addKeyHandler(name) {
    this.keyHandlers.push(name);
  }

  buttonPressed(b) {
    if (typeof(b) == "object") {
      return b.pressed;
    }
    return b == 1.0;
  }

  update() {
    this.gamepads = navigator.getGamepads();
    if (!this.gamepads) {
      return;
    }
    var pad;
    for(pad of this.gamepads) {
      if(pad) {
        if(pad.buttons[0].pressed) {
          console.log("A");
        }
        if(pad.buttons[1].pressed) {
          console.log("B");
        }
        if(pad.buttons[2].pressed) {
          console.log("X");
        }
        if(pad.buttons[3].pressed) {
          console.log("Y");
        }
        if(pad.buttons[4].pressed) {
          console.log("LB");
        }
        if(pad.buttons[5].pressed) {
          console.log("RB");
        }
        if(pad.buttons[6].pressed) {
          console.log("LT");
        }
        if(pad.buttons[7].pressed) {
          console.log("RT");
        }
        if(pad.buttons[8].pressed) {
          console.log("Back");
        }
        if(pad.buttons[9].pressed) {
          console.log("Start");
        }
        if(pad.buttons[10].pressed) {
          console.log("Left Thumbstick");
        }
        if(pad.buttons[11].pressed) {
          console.log("Right Thumbstick");
        }
        if(pad.buttons[12].pressed) {
          console.log("Up");
        }
        if(pad.buttons[13].pressed) {
          console.log("Down");
        }
        if(pad.buttons[14].pressed) {
          console.log("Left");
        }
        if(pad.buttons[15].pressed) {
          console.log("Right");
        }
      }
    }
  }



  controllerConnect (that, connecting, e) {
    var gamepad = event.gamepad;

    if (connecting) {
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gamepad.index, gamepad.id,
      gamepad.buttons.length, gamepad.axes.length);
      that.gamepads[gamepad.index] = gamepad;
    } else {
      console.log("Gamepad disconnected at index %d: %s. %d buttons, %d axes.",
      gamepad.index, gamepad.id,
      gamepad.buttons.length, gamepad.axes.length);
      delete that.gamepads[gamepad.index];
    }

  }

  keyDownHandler (that, e) {
    if(!that.keys.includes(e.key)) {
      that.keys.push(e.key);
    }
    that.keyHandlers.forEach(function(element) {
      element(that.keys);
    });
  }

  keyUpHandler (that, e) {
    var index = that.keys.indexOf(e.key);
    if (index > -1) {
      that.keys.splice(index, 1);
    }
  }

  mousePos (that, e)
  {
    if(e.clientX > that.x && e.clientY < that.y) {
      that.mouseDirection = "North-East";
    }
    else if(e.clientX < that.x && e.clientY < that.y) {
      that.mouseDirection = "North-West";
    }
    else if(e.clientX > that.x && e.clientY > that.y) {
      that.mouseDirection = "South-East";
    }
    else if(e.clientX < that.x && e.clientY > that.y) {
      that.mouseDirection = "South-West";
    }
    that.x = e.clientX;
    that.y = e.clientY;
    getMouse(e, that.mouseDirection);
  }

}
