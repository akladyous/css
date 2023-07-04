function draw(width = 200, height = 200) {
    const canvas = document.querySelector('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')

    context.fillStyle = "rgba(256, 0, 0)"
    context.fillRect(10, 10, 50, 50)

    context.fillStyle = "rgba(0, 0, 200,.5)"
    context.fillRect(30, 30, 50, 50)
}
draw()
//
console.log(getEventListeners(document))
//
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        console.log('not visible');
    } else {
        console.log('is visible');
    }
});
// document.addEventListener("visibilitychange", function () {
//     if (document.visibilityState === 'visible') {
//         console.log('has focus');
//     } else {
//         console.log('lost focus');
//     }
// });




// var x = document.createElement('canvas')

// var canvas = document.querySelector('.canvas');
// var context = canvas.getContext("2d");
// // context.globalAlpha = 0.2;
// // context.fillStyle = "blue";
// context.fillStyle = "rgb(256, 0, 0";
// context.fillRect(10, 10, 50, 50)
// context.fillStyle = "rgb(0, 0, 200, .5)";
// context.fillRect(30, 30, 50, 50)
