var img = new Image();

img.src = "/andrew.png";

img.onload = function () {
    var canvas = document.createElement('canvas'); // create canvas
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; // fill screen
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas); // append to site

    ctx.drawImage(img, 0, 0);
    var imageData = ctx.getImageData(0, 0, img.width, img.height);


    console.log(imageData)


    var data = imageData.data;

    var newData = [];


    var headers = {
        useP: 0,
        quad1: 1, // top left
        quad2: 1, // top right
        quad3: 1, // bottom left
        quad4: 1 // bottom right
    }
    newData.push(headers.useP + headers.quad1 << 1 + headers.quad2 << 2 + headers.quad3 << 3 + headers.quad4 << 4);

    var nIndex = 1;


    if (headers.useP) { // palette
        var plen = 3;

        newData.push(Math.min(plen, 255), plen >> 8);

        nIndex += 2;

        // TODO

        newData[nIndex++] = 0;
        newData[nIndex++] = 0;
        newData[nIndex++] = 0;

        newData[nIndex++] = 255;
        newData[nIndex++] = 0;
        newData[nIndex++] = 0;

        newData[nIndex++] = 0;
        newData[nIndex++] = 255;
        newData[nIndex++] = 0;

        newData[nIndex++] = 0;
        newData[nIndex++] = 0;
        newData[nIndex++] = 255;

        newData[nIndex++] = 255;
        newData[nIndex++] = 255;
        newData[nIndex++] = 0;

        newData[nIndex++] = 0;
        newData[nIndex++] = 255;
        newData[nIndex++] = 255;

        newData[nIndex++] = 255;
        newData[nIndex++] = 0;
        newData[nIndex++] = 255;

        newData[nIndex++] = 255;
        newData[nIndex++] = 255;
        newData[nIndex++] = 255;


    }



    for (var i = 0; i < data.length; i += 4) {

        var R = data[i], // R
            G = data[i + 1], // G
            B = data[i + 2], // B
            A = data[i + 3] // alpha

        if (A === 0) { // remove transparent pixel color data
            newData[nIndex++] = 0;
            continue;
        }

        newData[nIndex++] = R; // true color
        newData[nIndex++] = G;
        newData[nIndex++] = B;
        newData[nIndex++] = A;

    }

    console.log(newData)


}
