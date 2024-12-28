const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const qrCodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        qrCodeContainer.innerHTML = '';
        QRCode.toCanvas(text, { width: 200 }, (err, canvas) => {
            if (err) {
                console.error(err);
                alert('Failed to generate QR code');
                return;
            }
            qrCodeContainer.appendChild(canvas);
        });
    } else {
        alert('Please enter some text');
    }
});
