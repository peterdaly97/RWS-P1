/* global p1C00205483, describe, it, expect, should */

describe('Input()', function () {
  'use strict';

  it('Input exists', function () {
    expect(Input).to.be.a('function');

  });

  it('Add keyboard handler', function () {
    var input = new Input
    input.addKeyHandler("newHandler")
    var handlers = input.keyHandlers
    expect(handlers.length).to.equal(1);
  });

  it('Add Update Loop', function () {
    var input = new Input
    input.addUpdateLoop("newHandler", 33)
    var handlers = input.loops
    expect(handlers.length).to.equal(1);
  });

  it('Checking that array 1 is contained within array 2', function () {
    var input = new Input
    var arr1 = [[0, 3], [14, 28], [25, 1],[33, -17]]
    var arr2 = [25, 1]
    var index = input.includes(arr1, arr2);
    expect(index).to.equal(2);
  });

  it('Checking that hold value gets correcty set', function () {
    var input = new Input
    var holdValue = 20;
    input.setHoldValue(holdValue);
    expect(holdValue).to.equal(input.holdValue);
  });
});
