const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const qrcodeDiv = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
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
        ctx.fillRect(0, 0, canvas.width, canvas.height)
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

        qrcodeDiv.style.display = "block"
        downloadBtn.style.display = "block"

        document.getElementById('downloadBtn').addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'qrcode.png';
            link.click();
        });
    } else {
        alert('Please enter some text');
    }
});
