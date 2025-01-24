const optionLists = document.querySelectorAll('.option-list');
const downloadButton = document.getElementById('downloadButton');
const randomizeButton = document.getElementById('randomizeButton');
const previewContainer = document.getElementById('previewContainer');

// Zufällige Auswahl für jeden Layer
function randomizeCharacter() {
    const layers = ['layer1', 'layer2', 'layer3', 'layer4', 'layer5', 'layer6'];

    layers.forEach(layer => {
        const layerElement = document.getElementById(layer);
        const folder = layer.slice(0, 6);
        const randomIndex = Math.floor(Math.random() * 10) + 1; // Simulierte Anzahl von Assets
        layerElement.src = `${folder}/${layer}${randomIndex}.png`;
    });
}

// Event-Listener für den Randomize-Button
randomizeButton.addEventListener('click', randomizeCharacter);

// Event-Listener für den Download-Button
downloadButton.addEventListener('click', () => {
    html2canvas(previewContainer).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'character.png';
        link.click();
    }).catch(error => console.error("Error generating canvas:", error));
});
