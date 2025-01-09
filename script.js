import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";

let walletAddress = null;

// Funktion zur Verbindung der Wallet
const connectWallet = async () => {
  const wallet = window.solana;

  if (wallet && wallet.isPhantom) {
    try {
      const response = await wallet.connect();
      walletAddress = response.publicKey.toString();
      alert(`Wallet verbunden: ${walletAddress}`);
      document.getElementById("walletStatus").innerText = `Wallet: ${walletAddress}`;
    } catch (err) {
      console.error("Wallet-Verbindung fehlgeschlagen:", err);
    }
  } else {
    alert("Installiere die Phantom Wallet, um fortzufahren.");
  }
};

// Token-Transfer für den Spin
const sendFricTokens = async (amount) => {
  if (!walletAddress) {
    alert("Bitte verbinde zuerst deine Wallet!");
    return false;
  }

  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const fromPubkey = new PublicKey(walletAddress);
  const toPubkey = new PublicKey(6Y16GQTbeUSQga6McvkzX8JM96GUD8HYX155PmdwgBun); // Ersetze mit der Projekt-Wallet-Adresse

  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    const { signature } = await window.solana.signAndSendTransaction(transaction);
    await connection.confirmTransaction(signature);
    alert(`Zahlung erfolgreich! Transaktion: ${signature}`);
    return true;
  } catch (err) {
    console.error("Fehler beim Token-Transfer:", err);
    alert("Die Transaktion ist fehlgeschlagen.");
    return false;
  }
};

// Globale Variable für den aktuellen Rank
let currentRank = null;

// Funktionen für Charakter und Attribute
async function randomizeCharacter() {
  const costInFric = 1; // Kosten pro Spin in Fric-Token

  // Wenn der aktuelle Rank < 500 ist, zeige eine Bestätigungsabfrage
  if (currentRank !== null && currentRank < 500) {
    const confirmReset = confirm(
      `You have a high rank of ${currentRank}. Are you sure you want to randomize and lose this rank?`
    );
    if (!confirmReset) {
      return;
    }
  }

  // Token-Transfer durchführen
  const paymentSuccess = await sendFricTokens(costInFric);
  if (!paymentSuccess) return; // Abbrechen, falls die Zahlung fehlschlägt

  const selectedAssets = {};
  for (const layer in layers) {
    const assets = layers[layer];
    const weightedAssets = assets.flatMap((asset) =>
      Array(rarityWeights[asset.rarity]).fill(asset)
    );
    selectedAssets[layer] = weightedAssets[Math.floor(Math.random() * weightedAssets.length)];
    document.getElementById(layer).src = selectedAssets[layer].src;
  }

  const rank = getRank(selectedAssets);
  currentRank = rank; // Speichere den neuen Rank in der globalen Variable
  updateAttributes(selectedAssets, rank);
}

// Berechnung aller Kombinationen
function getRank(selectedAssets) {
  // Die Kombinationen bleiben unverändert
  return 1; // Beispiel, implementiere hier das Rank-System
}

function updateAttributes(assets, rank) {
  const attributesContainer = document.querySelector(".attributes");
  attributesContainer.innerHTML = Object.entries(assets)
    .map(
      ([layer, asset]) =>
        `<div class="attribute">
          <div class="name">${layer}</div>
          <div class="value">${asset.src.replace(".png", "")}</div>
          <div class="rarity">${asset.rarity.toUpperCase()}</div>
        </div>`
    )
    .join("");

  const scoreSection = document.querySelector(".score-section");
  scoreSection.innerHTML = `<div>Rank: ${rank}</div>`;
}

// Wallet-Button-Event hinzufügen
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("randomizeButton").addEventListener("click", randomizeCharacter);
