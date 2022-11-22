"use strict";

import Shape from "./Shape.js";

const shapeDD = document.getElementById("shape-dd");
const colourDD = document.getElementById("colour-dd");
const createBtn = document.querySelector("input[type='button']");
const shapeInfo = document.getElementById("shape-info");
const shapeGrid = document.getElementById("shape-grid");

const shapes = [];

function createShape() {
    let length = shapes.length;
    let [name, colour] = shapes[length - 1].getInfo();
    let colourHex;

    switch(colour) {
        case "blue":
            colourHex = "#09f";
            break;
        case "green":
            colourHex = "#9f0";
            break;
        case "orange":
            colourHex = "#f90";
            break;
        case "pink":
            colourHex = "#f09"
            break;
        default:
            colourHex = "#90f";
    }

    let element = document.createElement("div");
    element.classList.add(name);
    element.style.backgroundColor = colourHex;

    element.addEventListener("click", function() {
        shapeInfo.innerText = `Unit ${length}: ${colour} ${name}`;
    });

    shapeGrid.appendChild(element);
}

createBtn.addEventListener("click", function() {
    if (shapes.length == 24) {
        shapeInfo.innerText = "You've hit the max number of shapes!";
        return;
    }

    shapes.push(new Shape(shapeDD.value, colourDD.value));
    createShape();
});