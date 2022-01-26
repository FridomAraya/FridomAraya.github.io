/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
$(document).ready(function () {

    var count = 0;//count variable for left and right positioning
    var arr = []; //array used for storing the filled position for shuffling
    var EMPTY_SQUARE = {};//Object which stores and updates the empty div let and top
    EMPTY_SQUARE.leftx = "300px";//initial left and top positions respectively
    EMPTY_SQUARE.toppx = "300px";


//function for setting the position and css for the filled squares
    $('#puzzlearea div').each(function ()
    {
        var filledSquares = {};
        var x = ((count % 4) * 100);
        var y = (Math.floor(count / 4) * 100);

        $(this).addClass('puzzlepiece');
        var leftpx = x + 'px';
        var toppx = y + 'px';
        filledSquares.leftpx = leftpx;
        filledSquares.toppx = toppx;
        arr.push(filledSquares);
        $(this).css({"left": leftpx, "top": toppx, "backgroundImage": 'url("images/backgrounds.jpg")', "backgroundPosition": -x + 'px ' + (-y) + 'px'});
        count++;
    });

  });

