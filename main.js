const [preview, output] = [
    document.getElementById('preview'),
    document.getElementById('output'),
    document.getElementById('capture'),
]

// Webcam Accsess
navigator.mediaDevices.getUserMedia({
    audio: true,
    video: {
        width: 500,
        height: 500,
    }
})
.then((stream) => {
    preview.srcObject = stream;
    preview.play();
    console.log(stream)
}).catch((err) => {
    console.log(err)
});

// Button
document.addEventListener('click', () => {
    // do Something
    const context = output.getContext("2d");

    output.width = 500;
    output.height = 500;

    context.drawImage(preview, 0,0, output.width, output.height)

    // const context = output.getContext('2d');
    
    // output.width = 500;
    // output.height = 500;

    // context.drawImage(preview, 0,0, output.height);
});