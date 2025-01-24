/* Allgemeine Styles */
body {
    background-color: #fff;
    color: #000;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    box-sizing: border-box;
}

/* Überschriften */
.main-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
}

/* Vorschau */
.preview-box {
    background-color: #f4f4f4;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

#previewContainer {
    width: 100%;
    height: 100%;
    position: relative;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
}

/* Eingabefeld */
#nameInput {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
}

/* Buttons */
.button-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

button {
    width: 48%;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid #000;
    border-radius: 5px;
    background-color: #689F38;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #4c7a2b;
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}

/* Mobile Anpassungen */
@media (max-width: 400px) {
    button {
        font-size: 0.9rem;
    }

    #nameInput {
        font-size: 0.9rem;
    }

    .main-title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 0.9rem;
    }
}
