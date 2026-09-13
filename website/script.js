const gestures = [
  { id: 1, combo: "1", label: "Finger 1", message: "Nanaage Sahaayaa Beeku", icon: "☝️" },
  { id: 2, combo: "2", label: "Finger 2", message: "Nanaage Neeru Beeku", icon: "✌️" },
  { id: 3, combo: "3", label: "Finger 3", message: "Nanaage Ootaa Beeku", icon: "🤟" },
  { id: 4, combo: "4", label: "Finger 4", message: "Nanaage NoovuAagide", icon: "☝️" },
  { id: 5, combo: "5", label: "Finger 5", message: "Dhayaaavittu Nillisi", icon: "🖐️" },
  { id: 6, combo: "1 + 2", label: "Finger 1 + Finger 2", message: "Dhayaaavittu Vaidhyaranna Karesi", icon: "🤞" },
  { id: 7, combo: "1 + 3", label: "Finger 1 + Finger 3", message: "Haaudhu", icon: "🤟" },
  { id: 8, combo: "2 + 4", label: "Finger 2 + Finger 4", message: "Beeda", icon: "✌️" },
  { id: 9, combo: "1 + 4", label: "Finger 1 + Finger 4", message: "Namaaskaara", icon: "🙏" },
  { id: 10, combo: "2 + 3", label: "Finger 2 + Finger 3", message: "Nanaage HasivuAagidhey", icon: "🤲" },
  { id: 11, combo: "3 + 4", label: "Finger 3 + Finger 4", message: "Nanaage DhaahaaAagidhey", icon: "💧" },
  { id: 12, combo: "1 + 2 + 3", label: "Finger 1 + Finger 2 + Finger 3", message: "Dhanyavaadhagalu", icon: "🙏" },
  { id: 13, combo: "1 + 2 + 4", label: "Finger 1 + Finger 2 + Finger 4", message: "Vidhaayaa", icon: "👋" },
  { id: 14, combo: "1 + 3 + 4", label: "Finger 1 + Finger 3 + Finger 4", message: "Dhayaaavittu Eega Banni", icon: "👋" },
  { id: 15, combo: "2 + 3 + 4", label: "Finger 2 + Finger 3 + Finger 4", message: "Dhayaaavittu Nannanna Showchaalayakke Karedukondu Hoagee", icon: "🚻" }
];

const select = document.getElementById("gestureSelect");
const grid = document.getElementById("gestureGrid");
const costTable = document.getElementById("costTable");
const previewIcon = document.getElementById("previewIcon");
const previewGesture = document.getElementById("previewGesture");
const previewCombo = document.getElementById("previewCombo");
const previewMessage = document.getElementById("previewMessage");
const speakButton = document.getElementById("speakButton");
const speechStatus = document.getElementById("speechStatus");

const costs = [
  ["ESP32 Development Board", "1", "₹600"],
  ["Flex Sensors", "5", "₹1,750"],
  ["HC-05 Bluetooth Module", "1", "₹300"],
  ["Li-ion Battery", "1", "₹250"],
  ["ON/OFF Switch", "1", "₹50"],
  ["Breadboard", "1", "₹150"],
  ["Connecting Wires", "1 set", "₹150"],
  ["Glove", "1", "₹200"],
  ["Resistors & miscellaneous", "1 set", "₹100"],
  ["Prototype assembly & accessories", "1", "₹450"]
];

function updatePreview(index) {
  const g = gestures[index];
  previewIcon.textContent = g.icon;
  previewGesture.textContent = g.label;
  previewCombo.textContent = g.combo;
  previewMessage.textContent = g.message;
  speechStatus.textContent = "";
}

gestures.forEach((g, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = `${String(g.id).padStart(2, "0")} — ${g.label}`;
  select.appendChild(option);

  const card = document.createElement("article");
  card.className = "gesture-card";
  card.innerHTML = `
    <div class="gesture-number">${String(g.id).padStart(2, "0")}</div>
    <div class="gesture-icon">${g.icon}</div>
    <h3>${g.label}</h3>
    <div class="combo">${g.combo}</div>
    <p>${g.message}</p>
    <button type="button" data-index="${index}">Use in translator</button>
  `;
  grid.appendChild(card);
});

costs.forEach(([name, qty, cost]) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${name}</td><td>${qty}</td><td>${cost}</td>`;
  costTable.appendChild(row);
});

select.addEventListener("change", () => updatePreview(Number(select.value)));

grid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  const index = Number(button.dataset.index);
  select.value = String(index);
  updatePreview(index);
  document.getElementById("translator").scrollIntoView({ behavior: "smooth" });
});

speakButton.addEventListener("click", () => {
  const g = gestures[Number(select.value)];
  if (!("speechSynthesis" in window)) {
    speechStatus.textContent = "Speech synthesis is not supported by this browser.";
    return;
  }
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(g.message);
  speech.lang = "en-IN";
  speech.rate = 0.9;
  window.speechSynthesis.speak(speech);
  speechStatus.textContent = `Speaking: ${g.message}`;
});

updatePreview(0);
