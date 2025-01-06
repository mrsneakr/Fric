const optionLists = document.querySelectorAll('.option-list');
const scrollLeftButtons = document.querySelectorAll('.scroll-left');
const scrollRightButtons = document.querySelectorAll('.scroll-right');
const downloadButton = document.getElementById('downloadButton');
const randomizeButton = document.getElementById('randomizeButton');
const previewContainer = document.getElementById('previewContainer');

optionLists.forEach(list => {
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const layerId = event.target.dataset.layer;
            const imageSrc = event.target.dataset.image;
            const layerElement = document.getElementById(layerId);
            if (layerElement) {
                layerElement.src = imageSrc;
            }
        }
    });
});
scrollLeftButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetList = document.getElementById(targetId);
        targetList.scrollLeft -= 100;
    });
});

scrollRightButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetList = document.getElementById(targetId);
        targetList.scrollLeft += 100;
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

randomizeButton.addEventListener('click', () => {
    optionLists.forEach(list => {
        const images = list.querySelectorAll('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        const layerId = randomImage.dataset.layer;
        const imageSrc = randomImage.dataset.image;
        const layerElement = document.getElementById(layerId);
        if (layerElement) {
            layerElement.src = imageSrc;
        }
    });
});