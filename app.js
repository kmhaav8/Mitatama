const analyzeBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

const significanceText = document.querySelector(".card.highlight strong");
const significanceDesc = document.querySelector(".card.highlight p");

const whatHappened = document.querySelector("#result .card:nth-of-type(2) p");
const impact = document.querySelector("#result .card:nth-of-type(3)");
const risksList = document.querySelector("#result .card:nth-of-type(4) ul");
const opportunities = document.querySelector("#result .card:nth-of-type(5) p");
const actionCard = document.querySelector("#result .card.action p");

function mockAnalysis(input) {
  // Yksinkertainen "älykäs" logiikka
  if (input.toLowerCase().includes("suomi") || input.toLowerCase().includes("luottoluok")) {
    return {
      significance: "2 / 5 – Heikko merkitys",
      significanceDesc: "Yksittäinen muutos ei vielä vaikuta pitkän aikavälin strategiaan.",
      what: "Suomen talouteen liittyvä uutinen herättää huomiota, mutta ei viittaa äkilliseen kriisiin.",
      stocks: "Lievästi negatiivinen, mutta vaikutus rajautuu pääosin kotimarkkinaan.",
      crypto: "Neutraali. Kryptomarkkinat eivät reagoi suoraan yksittäisen maan luottoluokitukseen.",
      risks: [
        "Julkisen talouden paineet voivat jatkua",
        "Kotimainen kasvu voi pysyä heikkona"
      ],
      opportunities: "Korostaa hajautuksen merkitystä pitkällä aikavälillä.",
      action: "Seuraa tilannetta. Yksittäinen uutinen ei vaadi toimenpiteitä."
    };
  }

  // Default-vastaus
  return {
    significance: "3 / 5 – Huomionarvoinen",
    significanceDesc: "Asia kannattaa tiedostaa, mutta ei ylireagoida.",
    what: "Uutinen liittyy markkinoiden yleiseen kehitykseen.",
    stocks: "Neutraali pitkällä aikavälillä.",
    crypto: "Epäsuora vaikutus mahdollinen markkinasentimentin kautta.",
    risks: [
      "Lyhytaikainen epävarmuus",
    ],
    opportunities: "Mahdollisuus arvioida omaa strategiaa rauhassa.",
    action: "Ei toimenpiteitä. Pysy suunnitelmassa."
  };
}

analyzeBtn.addEventListener("click", () => {
  const input = document.getElementById("inputText").value.trim();
  if (!input) {
    alert("Kirjoita ensin aihe tai uutinen.");
    return;
  }

  const analysis = mockAnalysis(input);

  significanceText.textContent = `Merkittävyys: ${analysis.significance}`;
  significanceDesc.textContent = analysis.significanceDesc;

  whatHappened.textContent = analysis.what;

  impact.innerHTML = `
    <h3>🎯 Vaikutus sijoittajalle</h3>
    <p><strong>Osakkeet / rahastot:</strong> ${analysis.stocks}</p>
    <p><strong>Kryptot:</strong> ${analysis.crypto}</p>
  `;

  risksList.innerHTML = "";
  analysis.risks.forEach(risk => {
    const li = document.createElement("li");
    li.textContent = risk;
    risksList.appendChild(li);
  });

  opportunities.textContent = analysis.opportunities;
  actionCard.textContent = analysis.action;

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
  document.getElementById("inputText").value = "";
  result.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
