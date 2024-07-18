// TODO: 2. Create a module that exports a function to calculate the area of a circle and import it into another file.

const PI = Math.PI;
function calculateArea(radius) {
    return PI * radius * radius;
}

export {calculateArea};