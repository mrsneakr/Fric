const optionLists = document.querySelectorAll('.option-list');
const downloadButton = document.getElementById('downloadButton');
const randomizeButton = document.getElementById('randomizeButton');
const previewContainer = document.getElementById('previewContainer');

// Zufällige Auswahl für jeden Layer
function randomizeCharacter() {
    optionLists.forEach(list => {
        const images = list.querySelectorAll('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];

        // Entferne "selected"-Klasse und setze sie neu
        list.querySelectorAll('img').forEach(img => img.classList.remove('selected'));
        selectedImage.classList.add('selected');

        // Aktualisiere das Vorschaubild
        const layerId = selectedImage.dataset.layer;
        const imageSrc = selectedImage.dataset.image;
        const layerElement = document.getElementById(layerId);
        if (layerElement) {
            layerElement.src = imageSrc;
        }
    });
}

// Event-Listener für den Click auf Optionen
optionLists.forEach(list => {
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            list.querySelectorAll('img').forEach(img => img.classList.remove('selected'));
            event.target.classList.add('selected');

            const layerId = event.target.dataset.layer;
            const imageSrc = event.target.dataset.image;
            const layerElement = document.getElementById(layerId);
            if (layerElement) {
                layerElement.src = imageSrc;
            }
        }
    });
});

// Event-Listener für den Download-Button
downloadButton.addEventListener('click', () => {
    html2canvas(previewContainer).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'character.png';
        link.click();
    }).catch(error => {
        console.error("Fehler beim Erstellen des Canvas:", error);
    });
});

// Event-Listener für den Randomize-Button
randomizeButton.addEventListener('click', randomizeCharacter);
