const optionLists = document.querySelectorAll('.option-list');
const downloadButton = document.getElementById('downloadButton');
const randomizeButton = document.getElementById('randomizeButton');
const previewContainer = document.getElementById('previewContainer');

// Definiere die verfügbaren Assets pro Layer
const assets = {
    layer1: ['layer1/bg1.png'],
    layer2: [
        'layer2/color1.png', 'layer2/color2.png', 'layer2/color3.png',
        'layer2/color4.png', 'layer2/color5.png', 'layer2/color6.png',
        'layer2/color7.png', 'layer2/color8.png', 'layer2/color9.png',
        'layer2/color10.png', 'layer2/color11.png'
    ],
    layer3: ['layer3/shape.png'],
    layer4: ['layer4/mouth1.png'],
    layer5: [
        'layer5/eye1.png', 'layer5/eye2.png', 'layer5/eye3.png',
        'layer5/eye4.png', 'layer5/eye5.png', 'layer5/eye6.png',
        'layer5/eye7.png', 'layer5/eye8.png', 'layer5/eye9.png',
        'layer5/eye10.png', 'layer5/eye11.png'
    ],
    layer6: [
        'layer6/design1_1.png', 'layer6/design1_2.png', 'layer6/design1_3.png',
        'layer6/design1_4.png', 'layer6/design1_5.png', 'layer6/design1_6.png',
        'layer6/design1_7.png', 'layer6/design1_8.png', 'layer6/design2_1.png',
        'layer6/design2_2.png', 'layer6/design2_3.png', 'layer6/design2_4.png',
        'layer6/design3_1.png', 'layer6/design3_2.png', 'layer6/design3_3.png',
        'layer6/design3_4.png', 'layer6/design3_5.png', 'layer6/design3_6.png',
        'layer6/design4.png', 'layer6/design5.png', 'layer6/design6_1.png',
        'layer6/design6_2.png', 'layer6/design6_3.png', 'layer6/design6_4.png',
        'layer6/design6_5.png', 'layer6/design7.png', 'layer6/design8.png',
        'layer6/design9_1.png', 'layer6/design9_2.png', 'layer6/design9_3.png',
        'layer6/design9_4.png', 'layer6/design9_5.png', 'layer6/design9_6.png',
        'layer6/design10.png', 'layer6/design11_1.png', 'layer6/design11_2.png',
        'layer6/design11_3.png', 'layer6/design11_4.png', 'layer6/design12_1.png',
        'layer6/design12_2.png', 'layer6/design12_3.png', 'layer6/design12_4.png',
        'layer6/design12_5.png', 'layer6/design13_1.png', 'layer6/design13_2.png',
        'layer6/design13_3.png', 'layer6/design13_4.png', 'layer6/design13_5.png',
        'layer6/design13_6.png', 'layer6/design13_7.png', 'layer6/design13_8.png',
        'layer6/design14_1.png', 'layer6/design14_2.png', 'layer6/design14_3.png',
        'layer6/design14_4.png', 'layer6/design14_5.png', 'layer6/design14_6.png',
        'layer6/design14_7.png', 'layer6/design14_8.png', 'layer6/design15.png',
        'layer6/design16.png', 'layer6/design17.png', 'layer6/design18_1.png',
        'layer6/design18_2.png', 'layer6/design18_3.png', 'layer6/design18_4.png',
        'layer6/design18_5.png', 'layer6/design18_6.png', 'layer6/design18_7.png',
        'layer6/design18_8.png', 'layer6/design19_1.png', 'layer6/design19_2.png',
        'layer6/design19_3.png', 'layer6/design19_4.png', 'layer6/design19_5.png',
        'layer6/design20_1.png', 'layer6/design20_2.png', 'layer6/design20_3.png',
        'layer6/design20_4.png'
    ]
};

// Funktion zum Zufällig-Auswählen eines Assets aus einem Layer
function getRandomAsset(layer) {
    const layerAssets = assets[layer];
    const randomIndex = Math.floor(Math.random() * layerAssets.length);
    return layerAssets[randomIndex];
}

// Funktion zum Aktualisieren der Vorschau mit zufälligen Assets
function randomizeCharacter() {
    Object.keys(assets).forEach(layer => {
        const randomAsset = getRandomAsset(layer);
        const layerElement = document.getElementById(layer);
        if (layerElement) {
            layerElement.src = randomAsset;
        }
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
