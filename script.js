const optionLists = document.querySelectorAll('.option-list');
const downloadButton = document.getElementById('downloadButton');
const randomizeButton = document.getElementById('randomizeButton');
const previewContainer = document.getElementById('previewContainer');

optionLists.forEach(list => {
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            // Entferne die 'selected'-Klasse von allen Bildern in der Liste
            list.querySelectorAll('img').forEach(img => img.classList.remove('selected'));

            // Füge die 'selected'-Klasse zum angeklickten Bild hinzu
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

function randomizeCharacter() {
    optionLists.forEach(list => {
        const images = list.querySelectorAll('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];

        list.querySelectorAll('img').forEach(img => img.classList.remove('selected'));
        selectedImage.classList.add('selected');

        const layerId = selectedImage.dataset.layer;
        const imageSrc = selectedImage.dataset.image;
        const layerElement = document.getElementById(layerId);
        if (layerElement) {
            layerElement.src = imageSrc;
        }
    });
}

randomizeButton.addEventListener('click', randomizeCharacter);
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