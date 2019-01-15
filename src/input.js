/*
 * Peter Daly
 * Component to allow for easier processing of user input
 * Days worked on: 30/10/18 - 14/1/18
 *
 */

class Input {
  constructor() {
    this.keys = [];
    this.x = 0;
    this.y = 0;
    this.mouseDirection = null;
    this.gamepads = [];
    this.keyHandlers = [];
    this.buttonsPressed = [];
    this.connected = false;

    this.loops = [];
    this.holdValue = 0;
    this.holdTimer = 0;

    this.history = [];

    this.binds = {};

    var that = this;

    window.addEventListener("keydown", this.keyDownHandler.bind(null, that));
    window.addEventListener("keyup", this.keyUpHandler.bind(null, that));

    window.addEventListener("mousemove", this.mousePos.bind(null, that));

    window.addEventListener("gamepadconnected",
    this.controllerConnect.bind(null, that, true));
    window.addEventListener("gamepaddisconnected",
    this.controllerConnect.bind(null, that, false));
  }

  addUpdateLoop(name, loop) {
    this.loops.push(name);
    setInterval(name, loop);
  }

  addKeyHandler(name) {
    this.keyHandlers.push(name);
  }

  setHoldValue(val) {
    this.holdValue = val;
  }

  update() {
    this.gamepads = navigator.getGamepads();
    if (!this.gamepads) {
      this.connected = false;
      return;
    }
    var pad;
    var pair;
    for(pad of this.gamepads) {
      if(pad) {
        for(var i = 0; i < 16; i++) {
          pair = [pad.index, i];
          if(pad.buttons[i].pressed > 0.9 && this.includes(this.buttonsPressed, pair) == -1) {
            this.buttonsPressed.push([pad.index, i]);
          }
          else {
            var index = this.includes(this.buttonsPressed, pair);
            if (index > -1) {
              this.buttonsPressed.splice(index, 1);
            }
          }
        }
      }

    }
      return this.buttonsPressed;
  }

  includes(arr1, arr2) {
    var index = 0;
    var retIndex = -1;
    arr1.forEach(function(element) {
      if(element[0] == arr2[0] && element[1] == arr2[1]) {
        retIndex = index;
      }
      index++;
    });

    return retIndex;
  }

  controllerConnect (that, connecting, e) {
    var gamepad = event.gamepad;

    if (connecting) {
      that.connected = true;
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gamepad.index, gamepad.id,
      gamepad.buttons.length, gamepad.axes.length);
    } else {
      console.log("Gamepad disconnected at index %d: %s. %d buttons, %d axes.",
      gamepad.index, gamepad.id,
      gamepad.buttons.length, gamepad.axes.length);
    }

  }

  keyDownHandler (that, e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }

    that.holdTimer++;
    if(!that.keys.includes(e.key)) {
      that.keys.push(e.key);
    }
    console.log(e.key);
    for(var key in that.binds) {
      if(key === e.key) {
        var func = that.binds[key];
        func();
      }
    }
    that.keyHandlers.forEach(function(element) {
      if(that.holdTimer > that.holdValue) {
        that.holdTimer = 0;
        that.history.push(that.keys.slice());
        element(that.keys);
      }
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

  bind(func, key) {
    this.binds[key] = func;
  }

}
