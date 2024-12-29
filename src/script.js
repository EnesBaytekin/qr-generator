const textInput = document.getElementById('textInput');
const qrcodeDiv = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

let debounceTimer;
const debounceDelay = 500;

function generateQRCode(text) {
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const cellSize = 8;
    const qrSize = qr.getModuleCount();

    canvas.width  = (qrSize+2)*cellSize;
    canvas.height = canvas.width;

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    for (let row=0; row<qrSize; ++row) {
        for (let col=0; col<qrSize; ++col) {
            if (qr.isDark(row, col)) {
                ctx.fillRect(cellSize+col*cellSize, cellSize+row*cellSize, cellSize, cellSize);
            }
        }
    }

    qrcodeDiv.innerHTML = ''; 
    qrcodeDiv.appendChild(canvas);
    qrcodeDiv.style.display = "block";
    downloadBtn.style.display = "block";
}

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        if (text) {
            generateQRCode(text);
        } else {
            qrcodeDiv.style.display = "none";
            downloadBtn.style.display = "none";
        }
    }, debounceDelay); 
});

downloadBtn.addEventListener('click', () => {
    const canvas = qrcodeDiv.querySelector('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
});
