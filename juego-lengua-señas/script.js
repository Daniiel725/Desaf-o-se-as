// BASE DE DATOS DE LECCIONES
const lessonsData = {
  vowels: [
    { symbol: "A", title: "Seña A", desc: "Puño cerrado con el pulgar apoyado a un lado.", sign: "✊ Puño Cerrado", motion: "⤾ Mano firme sin giro" },
    { symbol: "E", title: "Seña E", desc: "Dedos doblados tocando las yemas con el pulgar.", sign: "✊ Dedos Doblados", motion: "⤾ Mano firme frontal" },
    { symbol: "I", title: "Seña I", desc: "Puño cerrado y dedo meñique levantado.", sign: "☝️ Meñique Arriba", motion: "⤾ Mano firme levantada" },
    { symbol: "O", title: "Seña O", desc: "Forma un círculo uniendo yemas con el pulgar.", sign: "👌 Forma de 'O'", motion: "⤾ Círculo estático" },
    { symbol: "U", title: "Seña U", desc: "Índice y medio juntos hacia arriba.", sign: "✌️ Índice y Medio", motion: "⤾ Dedos rectos" }
  ],
  numbers: [
    { symbol: "1", title: "Número 1", desc: "Palma hacia adentro con el índice arriba.", sign: "☝️ Dedo Índice", motion: "⤾ Mano quieta" },
    { symbol: "2", title: "Número 2", desc: "Índice y medio en forma de 'V'.", sign: "✌️ Dedos en V", motion: "⤾ Mano quieta" },
    { symbol: "3", title: "Número 3", desc: "Pulgar, índice y medio levantados.", sign: "🤟 Pulgar, Índice, Medio", motion: "⤾ Mano quieta" },
    { symbol: "4", title: "Número 4", desc: "Cuatro dedos juntos ocultando el pulgar.", sign: "🖐️ Cuatro Dedos", motion: "⤾ Mano quieta" },
    { symbol: "5", title: "Número 5", desc: "Mano completamente abierta.", sign: "🖐️ Mano Abierta", motion: "⤾ Mano quieta" },
    { symbol: "6", title: "Número 6", desc: "Pulgar toca yema de meñique.", sign: "👌 Pulgar a Meñique", motion: "⤾ Pulgar hacia dentro" },
    { symbol: "7", title: "Número 7", desc: "Pulgar toca yema de anular.", sign: "👌 Pulgar a Anular", motion: "⤾ Pulgar hacia dentro" },
    { symbol: "8", title: "Número 8", desc: "Pulgar toca yema de dedo medio.", sign: "👌 Pulgar a Medio", motion: "⤾ Pulgar hacia dentro" },
    { symbol: "9", title: "Número 9", desc: "Pulgar toca yema de índice.", sign: "👌 Pulgar a Índice", motion: "⤾ Pulgar hacia dentro" },
    { symbol: "10", title: "Número 10", desc: "Puño cerrado con pulgar hacia arriba agitándolo.", sign: "👍 Puño con Pulgar", motion: "➔ ↔ Agitar suavemente" }
  ],
  consonants: []
};

// COLA DEL ABECEDARIO COMPLETO
let lockedConsonantsQueue = [
  { symbol: "B", title: "Letra B", desc: "Cuatro dedos levantados con el pulgar doblado sobre la palma.", sign: "🖐️ Palma Abierta Recta", motion: "⤾ Mano estática" },
  { symbol: "C", title: "Letra C", desc: "Forma una curva en C con los dedos y el pulgar.", sign: "🤏 Mano Curva C", motion: "⤾ Sostener curva" },
  { symbol: "D", title: "Letra D", desc: "Índice arriba, demás dedos tocando el pulgar formando un círculo.", sign: "☝️ Dedo Índice Arriba", motion: "⤾ Mano estática" },
  { symbol: "F", title: "Letra F", desc: "Índice y pulgar unidos en círculo, tres dedos levantados.", sign: "👌 Tres Dedos Arriba", motion: "⤾ Mano firme" },
  { symbol: "G", title: "Letra G", desc: "Índice y pulgar horizontales señalando hacia el lado.", sign: "👉 Índice Apuntando Lado", motion: "➔ Movimiento lateral" },
  { symbol: "H", title: "Letra H", desc: "Índice y medio extendidos horizontalmente hacia el lado.", sign: "✌️ Dos Dedos de Lado", motion: "➔ Desplazar lateral" },
  { symbol: "J", title: "Letra J", desc: "Dedo meñique dibuja una curva 'J' en el aire.", sign: "☝️ Meñique Dibujando", motion: "➔ ⤵️ Trazar curva" },
  { symbol: "K", title: "Letra K", desc: "Índice arriba, medio al frente y pulgar en el medio.", sign: "✌️ Dedos en V Inclinada", motion: "➔ Movimiento suave" },
  { symbol: "L", title: "Letra L", desc: "Dedo índice y pulgar extendidos formando una 'L'.", sign: "👆 Forma de L", motion: "⤾ Mano fija 90°" },
  { symbol: "M", title: "Letra M", desc: "Tres dedos apoyados sobre el pulgar mirando abajo.", sign: "🖐 Tres Dedos Abajo", motion: "➔ Dirección abajo" },
  { symbol: "N", title: "Letra N", desc: "Dos dedos apoyados sobre el pulgar mirando abajo.", sign: "✌️ Dos Dedos Abajo", motion: "➔ Dirección abajo" },
  { symbol: "Ñ", title: "Letra Ñ", desc: "Forma de la N balanceando la mano levemente de lado a lado.", sign: "✌️ Dos Dedos Agitando", motion: "➔ ↔ Balanceo lateral" },
  { symbol: "P", title: "Letra P", desc: "Como la K apuntando hacia el suelo.", sign: "✌️ Forma P Hacia Abajo", motion: "➔ Inclinación abajo" },
  { symbol: "Q", title: "Letra Q", desc: "Índice y pulgar apuntando hacia abajo separadamente.", sign: "👇 Gancho Abajo", motion: "➔ Inclinado" },
  { symbol: "R", title: "Letra R", desc: "Índice y medio cruzados hacia arriba.", sign: "🤞 Dedos Cruzados", motion: "⤾ Mano al frente" },
  { symbol: "S", title: "Letra S", desc: "Puño cerrado con el pulgar cruzado al frente de los dedos.", sign: "✊ Puño Frontal", motion: "➔ Vibración leve" },
  { symbol: "T", title: "Letra T", desc: "Pulgar metido entre el índice y el dedo medio.", sign: "✊ Puño Oculto", motion: "⤾ Mano fija" },
  { symbol: "V", title: "Letra V", desc: "Índice y medio separados en forma de 'V'.", sign: "✌️ Forma de V", motion: "⤾ Estático" },
  { symbol: "W", title: "Letra W", desc: "Índice, medio y anular levantados separadamente.", sign: "🤟 Tres Dedos Arriba", motion: "⤾ Estático" },
  { symbol: "X", title: "Letra X", desc: "Dedo índice encorvado en forma de gancho.", sign: "☝️ Gancho Índice", motion: "➔ Mover hacia atrás" },
  { symbol: "Y", title: "Letra Y", desc: "Pulgar y meñique extendidos, demás dedos doblados.", sign: "🤙 Pulgar y Meñique", motion: "⤾ Mano quieta" },
  { symbol: "Z", title: "Letra Z", desc: "Dedo índice traza una 'Z' en el aire.", sign: "☝️ Índice Trazador", motion: "➔ ⚡ Trazar Z" }
];

const initialLockedQueue = [...lockedConsonantsQueue];

const realWordsList = [
  "EL", "LA", "SOL", "LUZ", "MAR", "PAZ", "VER", "RIO", "OLA", "LEY", 
  "FE", "DIA", "ORO", "PAN", "GAS", "RED", "VOZ", "DOS", "MAS", "SUR", 
  "VAN", "TIA", "TIO", "MAMA", "PAPA", "LUNA", "AMOR", "CASA", "MESA", "FLOR", 
  "VIDA", "ALMA", "SILO", "MULA", "LOMA", "RAMA", "RANA", "ROSA", "RUTA", "SALA",
  "BOCA", "MANO", "NUBE", "PINO", "PATO", "ROPA", "BANO", "COPA", "VINO", "NIDO",
  "LORA", "SAPO", "VAPOR", "RAMO", "TAPA", "LIMA", "MOTO", "PERO", "COLA", "PELO"
];

const achievements = {
  first_win: { title: "Primer Paso", desc: "Acierta tu primera pregunta", unlocked: false, icon: "✦" },
  seq_master: { title: "Especialista", desc: "Completa un desafío de secuencia", unlocked: false, icon: "⚡" },
  streak_3: { title: "Superviviente", desc: "Logra racha de 3 en el minijuego", unlocked: false, icon: "🖤" },
  new_letter: { title: "Políglota", desc: "Desbloquea una nueva consonante", unlocked: false, icon: "📖" }
};

// ESTADO GLOBAL
let exp = 0;
let maxExp = 1000;
let tokens = 20; 
let stage = 1;
let lives = 5;
let currentTab = "vowels";
let questionsAnsweredCount = 0;
let activeShield = false;
let dictionarySingleAccess = false;
let dictionaryWarningShown = false;
let clockUpgradesCount = 0;

let comboCount = 0; 
let lastMaxCombo = 1;
let lossStreak = 0;

let difficulty = "easy";
let practiceMode = false;
let normalStreakCount = 0;
let gameStarted = false;

const errorTracker = {};
const timerSpeeds = { easy: 1.2, normal: 2.2, hard: 3.8 };

// REFERENCIAS DOM
const mobileFrame = document.getElementById("mobile-frame");
const mainMenuContainer = document.getElementById("main-menu-view");
const optionsViewContainer = document.getElementById("options-view");
const gameView = document.getElementById("game-view");
const learnView = document.getElementById("learn-view");
const minigameView = document.getElementById("minigame-view");

const gameHeader = document.getElementById("game-header");
const gameFooter = document.getElementById("game-footer");

const btnPlay = document.getElementById("btn-play");
const btnContinue = document.getElementById("btn-continue");
const btnOptions = document.getElementById("btn-options");
const btnBackHome = document.getElementById("btn-back-home");
const btnBackGame = document.getElementById("btn-back-game");
const btnHeaderSettings = document.getElementById("btn-header-settings");

const newGameModal = document.getElementById("new-game-modal");
const closeNewGameModal = document.getElementById("close-new-game-modal");

const navGame = document.getElementById("nav-game");
const navLearn = document.getElementById("nav-learn");
const navMini = document.getElementById("nav-mini");
const btnToggleView = document.getElementById("btn-toggle-view");
const headerTitle = document.getElementById("header-title");
const livesContainer = document.getElementById("lives-container");
const comboDisplay = document.getElementById("combo-display");

const reviewCard = document.getElementById("review-card");
const reviewText = document.getElementById("review-text");

// MODAL GAME OVER
const gameoverModal = document.getElementById("gameover-modal");
const gameoverStage = document.getElementById("gameover-stage");
const gameoverExp = document.getElementById("gameover-exp");
const gameoverRestartBtn = document.getElementById("gameover-restart-btn");

function triggerVisualFlash(type) {
  mobileFrame.classList.remove("flash-correct", "flash-incorrect");
  void mobileFrame.offsetWidth;
  mobileFrame.classList.add(type === 'correct' ? "flash-correct" : "flash-incorrect");
  setTimeout(() => {
    mobileFrame.classList.remove("flash-correct", "flash-incorrect");
  }, 400);
}

// ACTUALIZAR TEXTO Y ESTADO DEL BOTÓN DEL DICCIONARIO CON CANDADO CLARO
function updateNavDictionaryState() {
  if (dictionarySingleAccess) {
    navLearn.textContent = "📖";
    navLearn.style.opacity = "1";
    navLearn.style.borderColor = "var(--black-solid)";
  } else {
    navLearn.textContent = "📖";
    navLearn.style.opacity = "0.75";
  }
}

// SISTEMA DE GUARDADO Y CARGA
function saveGame() {
  const gameState = {
    exp,
    maxExp,
    tokens,
    stage,
    lives,
    difficulty,
    practiceMode,
    dictionarySingleAccess,
    dictionaryWarningShown,
    clockUpgradesCount,
    unlockedConsonants: lessonsData.consonants,
    lockedConsonantsQueue,
    achievements,
    gameStarted: true
  };
  localStorage.setItem("doodle_sign_save", JSON.stringify(gameState));
  updateNavDictionaryState();
}

function loadGame() {
  const saved = localStorage.getItem("doodle_sign_save");
  if (!saved) return false;
  try {
    const data = JSON.parse(saved);
    exp = data.exp;
    maxExp = data.maxExp;
    tokens = data.tokens;
    stage = data.stage;
    lives = data.lives;
    difficulty = data.difficulty || "easy";
    practiceMode = data.practiceMode || false;
    dictionarySingleAccess = data.dictionarySingleAccess || false;
    dictionaryWarningShown = data.dictionaryWarningShown || false;
    clockUpgradesCount = data.clockUpgradesCount || 0;
    lessonsData.consonants = data.unlockedConsonants || [];
    lockedConsonantsQueue = data.lockedConsonantsQueue || [...initialLockedQueue];
    gameStarted = true;
    
    document.querySelectorAll(".diff-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-diff") === difficulty);
    });

    const togglePractice = document.getElementById("toggle-practice");
    if (togglePractice) {
      togglePractice.checked = practiceMode;
    }
    
    updateNavDictionaryState();
    return true;
  } catch(e) {
    return false;
  }
}

function checkSavedGame() {
  const saved = localStorage.getItem("doodle_sign_save");
  if (btnContinue) {
    if (saved) {
      btnContinue.classList.remove("hidden");
    } else {
      btnContinue.classList.add("hidden");
    }
  }
}

function updateDifficultyButtonsState() {
  const diffBtns = document.querySelectorAll(".diff-btn");
  diffBtns.forEach(btn => {
    btn.disabled = gameStarted;
    btn.style.opacity = gameStarted ? "0.5" : "1";
    btn.style.cursor = gameStarted ? "not-allowed" : "pointer";
  });
}

function unlockAchievement(id) {
  if (achievements[id] && !achievements[id].unlocked) {
    achievements[id].unlocked = true;
    renderAchievements();
  }
}

function renderAchievements() {
  const container = document.getElementById("achievements-list");
  if (!container) return;
  container.innerHTML = "";
  
  Object.keys(achievements).forEach(key => {
    const ach = achievements[key];
    const card = document.createElement("div");
    card.className = `achievement-card ${ach.unlocked ? 'unlocked' : ''}`;
    card.innerHTML = `<span>${ach.icon}</span><div><p>${ach.title}</p><small style="font-size:0.65rem;">${ach.desc}</small></div>`;
    container.appendChild(card);
  });
}

// INICIAR PARTIDA NUEVA
if (btnPlay) {
  btnPlay.addEventListener("click", () => {
    if (newGameModal) {
      newGameModal.classList.remove("hidden");
    } else {
      startNewGame("easy");
    }
  });
}

if (closeNewGameModal) {
  closeNewGameModal.addEventListener("click", () => newGameModal.classList.add("hidden"));
}

document.querySelectorAll(".start-diff-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedDiff = btn.getAttribute("data-diff");
    if (newGameModal) newGameModal.classList.add("hidden");
    startNewGame(selectedDiff);
  });
});

function startNewGame(chosenDiff) {
  difficulty = chosenDiff;
  exp = 0;
  maxExp = 1000;
  stage = 1;
  lives = 5;
  comboCount = 0;
  lossStreak = 0;
  dictionarySingleAccess = false;
  dictionaryWarningShown = false;
  clockUpgradesCount = 0;
  gameStarted = true;

  document.querySelectorAll(".diff-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-diff") === difficulty);
  });

  mainMenuContainer.classList.add("hidden");
  gameHeader.classList.remove("hidden");
  gameFooter.classList.remove("hidden");

  saveGame();
  showView("game");
}

if (btnContinue) {
  btnContinue.addEventListener("click", () => {
    if (loadGame()) {
      mainMenuContainer.classList.add("hidden");
      gameHeader.classList.remove("hidden");
      gameFooter.classList.remove("hidden");
      showView("game");
    }
  });
}

btnOptions.addEventListener("click", () => {
  mainMenuContainer.classList.add("hidden");
  optionsViewContainer.classList.remove("hidden");
  updateDifficultyButtonsState();
  renderAchievements();
});

btnHeaderSettings.addEventListener("click", () => {
  showView("options");
  updateDifficultyButtonsState();
});

btnBackGame.addEventListener("click", () => {
  optionsViewContainer.classList.add("hidden");
  gameHeader.classList.remove("hidden");
  gameFooter.classList.remove("hidden");
  showView("game");
});

btnBackHome.addEventListener("click", () => {
  optionsViewContainer.classList.add("hidden");
  gameHeader.classList.add("hidden");
  gameFooter.classList.add("hidden");
  gameView.classList.add("hidden");
  learnView.classList.add("hidden");
  minigameView.classList.add("hidden");
  mainMenuContainer.classList.remove("hidden");
  checkSavedGame();
});

document.querySelectorAll(".diff-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (gameStarted) return; 
    document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    difficulty = btn.getAttribute("data-diff");
  });
});

// MODO PRUEBA / ENSAYO CON PIN 252503
const togglePractice = document.getElementById("toggle-practice");
const solveBtn = document.getElementById("solve-btn");

if (togglePractice) {
  togglePractice.addEventListener("change", (e) => {
    if (e.target.checked) {
      const code = prompt("Introduce el PIN para activar el Modo Ensayo:");
      if (code === "252503") {
        practiceMode = true;
        alert("✦ ¡Modo Ensayo activado!");
      } else {
        alert("❌ CÓDIGO INCORRECTO.");
        e.target.checked = false;
        practiceMode = false;
      }
    } else {
      practiceMode = false;
    }

    updateLivesDisplay();
    if (practiceMode && !gameView.classList.contains("hidden")) {
      solveBtn.classList.remove("hidden");
    } else {
      solveBtn.classList.add("hidden");
    }
    saveGame();
  });
}

function updateLivesDisplay() {
  if (practiceMode) {
    livesContainer.textContent = "⬡ ENSAYO";
  } else {
    livesContainer.textContent = "✦".repeat(lives) + " ✧".repeat(5 - lives);
  }
}

function updateComboDisplay() {
  if (comboCount > 1) {
    comboDisplay.textContent = `COMBO x${comboCount} 🔥`;
    comboDisplay.style.background = "var(--black-solid)";
    comboDisplay.classList.remove("hidden");
  } else if (stage >= 5 && lossStreak > 1) {
    comboDisplay.textContent = `RACHA DERROTA x${lossStreak} ⚠`;
    comboDisplay.style.background = "#8b0000";
    comboDisplay.classList.remove("hidden");
  } else {
    comboDisplay.classList.add("hidden");
  }
}

function showView(view) {
  clearInterval(miniTimerInterval);

  if (!learnView.classList.contains("hidden") && view !== "learn") {
    if (dictionarySingleAccess) {
      dictionarySingleAccess = false;
      saveGame();
    }
  }

  // SI INTENTA ENTRAR AL DICCIONARIO SIN COMPRARLO: BLOQUEO ESTRICTO CON CANDADO
  if (view === "learn" && !dictionarySingleAccess) {
    triggerVisualFlash("incorrect");
    if (!dictionaryWarningShown) {
      alert("🔒 El Diccionario está bloqueado con candado. Cómpralo en la Tienda.");
      dictionaryWarningShown = true;
      saveGame();
    }
    return; // SE MANTIENE EN LA VISTA ACTUAL, NUNCA CAMBIA DE LETRA NI DAÑA EL JUEGO
  }

  gameView.classList.add("hidden");
  learnView.classList.add("hidden");
  minigameView.classList.add("hidden");
  optionsViewContainer.classList.add("hidden");

  navGame.classList.remove("active");
  navLearn.classList.remove("active");
  navMini.classList.remove("active");

  if (view === "game") {
    gameView.classList.remove("hidden");
    navGame.classList.add("active");
    headerTitle.textContent = `ESCENARIO ${stage}`;
    if (practiceMode) solveBtn.classList.remove("hidden");
    else solveBtn.classList.add("hidden");
    loadQuestion();
  } else if (view === "learn") {
    learnView.classList.remove("hidden");
    navLearn.classList.add("active");
    headerTitle.textContent = "DICCIONARIO";
    renderLearnGrid();
  } else if (view === "mini") {
    minigameView.classList.remove("hidden");
    navMini.classList.add("active");
    headerTitle.textContent = "SECUENCIA";
    startMinigameSequence();
  } else if (view === "options") {
    optionsViewContainer.classList.remove("hidden");
    updateDifficultyButtonsState();
    renderAchievements();
  }
  updateNavDictionaryState();
}

navGame.addEventListener("click", () => showView("game"));
navLearn.addEventListener("click", () => showView("learn"));
navMini.addEventListener("click", () => showView("mini"));

// PESTAÑAS DICCIONARIO
const learnGrid = document.getElementById("learn-grid");
const detailSymbol = document.getElementById("detail-symbol");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-desc");
const detailMotion = document.getElementById("detail-motion");

const tabVowels = document.getElementById("tab-vowels");
const tabNumbers = document.getElementById("tab-numbers");
const tabConsonants = document.getElementById("tab-consonants");

tabVowels.addEventListener("click", () => { currentTab = "vowels"; setTabActive(tabVowels); renderLearnGrid(); });
tabNumbers.addEventListener("click", () => { currentTab = "numbers"; setTabActive(tabNumbers); renderLearnGrid(); });
tabConsonants.addEventListener("click", () => { currentTab = "consonants"; setTabActive(tabConsonants); renderLearnGrid(); });

function setTabActive(activeBtn) {
  [tabVowels, tabNumbers, tabConsonants].forEach(b => b.classList.remove("active"));
  activeBtn.classList.add("active");
}

function renderLearnGrid() {
  learnGrid.innerHTML = "";
  const items = lessonsData[currentTab];

  if (items.length === 0) {
    learnGrid.innerHTML = "<p style='grid-column: span 5; font-size:0.8rem; text-align:center;'>Sigue jugando para descubrir letras.</p>";
    detailSymbol.textContent = "?";
    detailTitle.textContent = "Sin letras aún";
    detailDesc.textContent = "Avanza en el juego para descubrir consonantes.";
    detailMotion.textContent = "";
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("learn-item");
    if (index === 0) card.classList.add("selected");
    card.textContent = item.symbol;

    card.addEventListener("click", () => {
      document.querySelectorAll(".learn-item").forEach(el => el.classList.remove("selected"));
      card.classList.add("selected");
      selectLessonItem(item);
    });

    learnGrid.appendChild(card);
  });

  if (items.length > 0) selectLessonItem(items[0]);
}

function selectLessonItem(item) {
  detailSymbol.textContent = item.symbol;
  detailTitle.textContent = item.title;
  detailDesc.textContent = item.desc;
  detailMotion.textContent = item.motion ? item.motion : "⤾ Movimiento: Mano quieta";
}

// MODO JUEGO Y PROGRESIÓN DE NIVEL
const targetSymbol = document.getElementById("target-symbol");
const questionTitle = document.getElementById("question-title");
const stageName = document.getElementById("stage-name");
const scoreNum = document.getElementById("score-num");
const progressFill = document.getElementById("progress-fill");
const expCurrent = document.getElementById("exp-current");
const expMax = document.getElementById("exp-max");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
let currentQuestion = null;

const unlockModal = document.getElementById("unlock-modal");
const unlockSymbol = document.getElementById("unlock-symbol");
const unlockTitle = document.getElementById("unlock-title");
const unlockDesc = document.getElementById("unlock-desc");
const unlockMotion = document.getElementById("unlock-motion");
const unlockCloseBtn = document.getElementById("unlock-close-btn");

function updateStats() {
  scoreNum.textContent = exp;
  stageName.textContent = `ESCENARIO ${stage}`;
  expCurrent.textContent = `${exp} exp`;
  expMax.textContent = `${maxExp} exp`;

  let percentage = (exp / maxExp) * 100;
  progressFill.style.width = `${Math.min(percentage, 100)}%`;

  if (exp >= maxExp) {
    stage += 1;
    exp = 0;
    maxExp += 600;
    
    const levelBonus = 30 + (stage * 8);
    tokens += levelBonus;
    
    if (stage % 3 === 0) {
      forceConsonantUnlock();
    }

    headerTitle.textContent = `ESCENARIO ${stage}`;
  }

  updateLivesDisplay();
  updateComboDisplay();
  updateShopUI();
  saveGame();
}

function triggerGameOver() {
  gameoverStage.textContent = stage;
  gameoverExp.textContent = exp;
  gameoverModal.classList.remove("hidden");

  const totalUnlocked = lessonsData.consonants;
  const keepCount = Math.floor(totalUnlocked.length / 4);
  const keptConsonants = totalUnlocked.slice(0, keepCount);

  lessonsData.consonants = keptConsonants;
  
  const keptSymbols = keptConsonants.map(c => c.symbol);
  lockedConsonantsQueue = initialLockedQueue.filter(c => !keptSymbols.includes(c.symbol));

  gameStarted = false;
  dictionarySingleAccess = false;
  dictionaryWarningShown = false;
  clockUpgradesCount = 0;
  localStorage.removeItem("doodle_sign_save");
  checkSavedGame();
}

gameoverRestartBtn.addEventListener("click", () => {
  gameoverModal.classList.add("hidden");
  lives = 5;
  exp = 0;
  comboCount = 0;
  lossStreak = 0;
  lastMaxCombo = 1;
  stage = 1;
  maxExp = 1000;
  dictionarySingleAccess = false;
  dictionaryWarningShown = false;
  clockUpgradesCount = 0;
  gameStarted = true;
  headerTitle.textContent = `ESCENARIO ${stage}`;
  updateStats();
  loadQuestion();
});

function forceConsonantUnlock() {
  if (lockedConsonantsQueue.length === 0) return;

  const randomIndex = Math.floor(Math.random() * lockedConsonantsQueue.length);
  const newConsonant = lockedConsonantsQueue.splice(randomIndex, 1)[0];
  lessonsData.consonants.push(newConsonant);

  unlockSymbol.textContent = newConsonant.symbol;
  unlockTitle.textContent = newConsonant.title;
  unlockDesc.textContent = newConsonant.desc;
  unlockMotion.textContent = newConsonant.motion;
  unlockModal.classList.remove("hidden");
  triggerVisualFlash("correct");
  unlockAchievement("new_letter");
}

unlockCloseBtn.addEventListener("click", () => unlockModal.classList.add("hidden"));

function getAllUnlockedLessons() {
  return [...lessonsData.vowels, ...lessonsData.numbers, ...lessonsData.consonants];
}

function loadQuestion() {
  if (!practiceMode && lives <= 0) {
    triggerGameOver();
    return;
  }

  nextBtn.classList.add("hidden");
  optionsContainer.style.display = "grid";
  optionsContainer.innerHTML = "";
  reviewCard.classList.add("hidden");

  const availableLessons = getAllUnlockedLessons();
  const randomIndex = Math.floor(Math.random() * availableLessons.length);
  currentQuestion = availableLessons[randomIndex];

  targetSymbol.textContent = currentQuestion.symbol;
  questionTitle.textContent = `SÍMBOLO: ${currentQuestion.symbol}`;

  if (errorTracker[currentQuestion.symbol] >= 2) {
    reviewText.textContent = `Has fallado varias veces la "${currentQuestion.symbol}". Técnica: ${currentQuestion.desc}`;
    reviewCard.classList.remove("hidden");
  }

  const options = [...availableLessons].sort(() => Math.random() - 0.5).slice(0, 4);
  if (!options.some(o => o.symbol === currentQuestion.symbol)) options[0] = currentQuestion;
  options.sort(() => Math.random() - 0.5);

  options.forEach(item => {
    const btn = document.createElement("button");
    btn.classList.add("doodle-btn");
    btn.setAttribute("data-sign", item.sign);
    btn.textContent = item.sign;
    btn.style.pointerEvents = "auto";
    btn.addEventListener("click", () => checkAnswer(item, btn));
    optionsContainer.appendChild(btn);
  });
}

solveBtn.addEventListener("click", () => {
  if (!practiceMode || !currentQuestion) return;
  const allBtns = Array.from(optionsContainer.querySelectorAll(".doodle-btn"));
  const correctBtn = allBtns.find(b => b.getAttribute("data-sign") === currentQuestion.sign || b.textContent.trim() === currentQuestion.sign.trim());
  if (correctBtn && correctBtn.style.pointerEvents !== "none") {
    checkAnswer(currentQuestion, correctBtn);
  }
});

function checkAnswer(selected, btnElement) {
  const allBtns = optionsContainer.querySelectorAll(".doodle-btn");
  allBtns.forEach(b => b.style.pointerEvents = "none");

  if (selected.symbol === currentQuestion.symbol) {
    btnElement.classList.add("correct");
    triggerVisualFlash("correct");
    
    lossStreak = 0;
    comboCount = Math.min(5, comboCount + 1);
    if (comboCount > lastMaxCombo) lastMaxCombo = comboCount;

    const gainedExp = 200 * comboCount;
    exp += gainedExp;

    tokens += (4 * comboCount);

    questionsAnsweredCount++;
    unlockAchievement("first_win");

    if (errorTracker[currentQuestion.symbol]) errorTracker[currentQuestion.symbol] = 0;

    if (!practiceMode) {
      if (difficulty === "easy") {
        if (lives < 5) lives += 1;
      } else if (difficulty === "normal") {
        normalStreakCount++;
        if (normalStreakCount >= 2) {
          if (lives < 5) lives += 1;
          normalStreakCount = 0;
        }
      }
    }
  } else {
    btnElement.classList.add("incorrect");
    triggerVisualFlash("incorrect");
    
    comboCount = 0; 
    lossStreak += 1; 
    normalStreakCount = 0;

    errorTracker[currentQuestion.symbol] = (errorTracker[currentQuestion.symbol] || 0) + 1;

    if (!practiceMode) {
      if (activeShield) {
        activeShield = false;
      } else {
        lives -= 1;
      }
    }

    let penalty = 50;
    if (stage >= 5) {
      penalty = 50 * lossStreak;
    }

    exp = Math.max(0, exp - penalty);
  }

  updateStats();
  optionsContainer.style.display = "none";

  if (!practiceMode && lives <= 0) {
    setTimeout(triggerGameOver, 500);
  } else {
    nextBtn.classList.remove("hidden");
  }
}

nextBtn.addEventListener("click", loadQuestion);

// TIENDA
const btnOpenShop = document.getElementById("btn-open-shop");
const shopModal = document.getElementById("shop-modal");
const shopCloseBtn = document.getElementById("shop-close-btn");

function getPrices() {
  return {
    dict: 8 + (stage * 2),     
    hint: 12 + (stage * 3),     
    time: 6 + (stage * 1),      
    shield: 25 + (stage * 5),   
    combo: 30 + (stage * 6)     
  };
}

function updateShopUI() {
  const p = getPrices();
  
  const mainTokensEl = document.getElementById("main-tokens");
  const shopTokensEl = document.getElementById("shop-tokens");
  if (mainTokensEl) mainTokensEl.textContent = tokens;
  if (shopTokensEl) shopTokensEl.textContent = tokens;
  
  const bHint = document.getElementById("buy-hint");
  const bTime = document.getElementById("buy-time");
  const bShield = document.getElementById("buy-shield");
  const bCombo = document.getElementById("buy-combo");
  const bDict = document.getElementById("buy-dict");

  if (bHint) bHint.textContent = `${p.hint} 🪙`;
  if (bTime) bTime.textContent = `${p.time} 🪙 (Nivel ${clockUpgradesCount})`;
  if (bShield) bShield.textContent = `${p.shield} 🪙`;
  if (bCombo) bCombo.textContent = `${p.combo} 🪙`;
  if (bDict) bDict.textContent = `${p.dict} 🪙`;
}

if (btnOpenShop) {
  btnOpenShop.addEventListener("click", () => {
    updateShopUI();
    shopModal.classList.remove("hidden");
  });
}

if (shopCloseBtn) {
  shopCloseBtn.addEventListener("click", () => shopModal.classList.add("hidden"));
}

document.addEventListener("click", (e) => {
  const btnDict = e.target.closest("#buy-dict");
  const btnCombo = e.target.closest("#buy-combo");
  const btnShield = e.target.closest("#buy-shield");
  const btnHint = e.target.closest("#buy-hint");
  const btnTime = e.target.closest("#buy-time");
  const prices = getPrices();

  // COMPRA DE ACCESO AL DICCIONARIO
  if (btnDict) {
    if (tokens >= prices.dict) {
      tokens -= prices.dict;
      dictionarySingleAccess = true;
      updateShopUI();
      saveGame();
      triggerVisualFlash("correct");
      shopModal.classList.add("hidden");
      showView("learn");
    } else {
      triggerVisualFlash("incorrect");
    }
  }

  // PISTA INSTANTÁNEA
  if (btnHint) {
    if (tokens >= prices.hint) {
      tokens -= prices.hint;
      updateShopUI();
      saveGame();
      const allBtns = Array.from(optionsContainer.querySelectorAll(".doodle-btn"));
      let removed = 0;
      allBtns.forEach(b => {
        if (b.getAttribute("data-sign") !== currentQuestion.sign && removed < 2) {
          b.style.visibility = "hidden";
          removed++;
        }
      });
      triggerVisualFlash("correct");
      shopModal.classList.add("hidden");
    } else {
      triggerVisualFlash("incorrect");
    }
  }

  // RELOJ EXTRA PERMANENTE
  if (btnTime) {
    if (tokens >= prices.time) {
      tokens -= prices.time;
      clockUpgradesCount += 1;
      updateShopUI();
      saveGame();
      triggerVisualFlash("correct");
    } else {
      triggerVisualFlash("incorrect");
    }
  }

  // ESCUDO DOODLE
  if (btnShield) {
    if (tokens >= prices.shield) {
      tokens -= prices.shield;
      activeShield = true;
      updateShopUI();
      saveGame();
      triggerVisualFlash("correct");
    } else {
      triggerVisualFlash("incorrect");
    }
  }

  // RESTAURAR RACHA
  if (btnCombo) {
    if (tokens >= prices.combo) {
      if (lastMaxCombo > 1) {
        tokens -= prices.combo;
        comboCount = lastMaxCombo;
        lossStreak = 0;
        updateStats();
        updateShopUI();
        triggerVisualFlash("correct");
      }
    } else {
      triggerVisualFlash("incorrect");
    }
  }
});

// MINIJUEGO SECUENCIA
const sequenceDisplay = document.getElementById("sequence-display");
const miniTimerFill = document.getElementById("mini-timer-fill");
const miniOptionsContainer = document.getElementById("mini-options-container");
const miniNextBtn = document.getElementById("mini-next-btn");
const miniStreakEl = document.getElementById("mini-streak");

let targetSequence = [];
let currentStep = 0;
let miniTimerInterval = null;
let miniTimeLeft = 100;
let minigameWinStreak = 0;

function startMinigameSequence() {
  clearInterval(miniTimerInterval);
  miniNextBtn.classList.add("hidden");
  miniOptionsContainer.style.display = "grid";
  miniOptionsContainer.innerHTML = "";
  sequenceDisplay.innerHTML = "";
  currentStep = 0;
  miniTimerFill.classList.remove("timer-warning");

  miniStreakEl.textContent = `${minigameWinStreak}/3`;

  const availableLessons = getAllUnlockedLessons();
  const unlockedSymbols = availableLessons.map(l => l.symbol);

  const matchingWords = realWordsList.filter(word => 
    word.split("").every(char => unlockedSymbols.includes(char))
  );

  if (matchingWords.length > 0 && Math.random() > 0.15) {
    const randomWord = matchingWords[Math.floor(Math.random() * matchingWords.length)];
    targetSequence = randomWord.split("").map(char => 
      availableLessons.find(l => l.symbol === char)
    );
  } else {
    const seqLength = Math.random() > 0.5 ? 3 : 4;
    targetSequence = [...availableLessons].sort(() => Math.random() - 0.5).slice(0, seqLength);
  }

  targetSequence.forEach(item => {
    const box = document.createElement("div");
    box.classList.add("seq-item");
    box.textContent = item.symbol;
    sequenceDisplay.appendChild(box);
  });

  const options = [...targetSequence].sort(() => Math.random() - 0.5);

  options.forEach(item => {
    const btn = document.createElement("button");
    btn.classList.add("doodle-btn");
    btn.textContent = item.sign;
    btn.addEventListener("click", () => checkSequenceStep(item, btn));
    miniOptionsContainer.appendChild(btn);
  });

  miniTimeLeft = 100;
  miniTimerFill.style.width = "100%";
  
  const baseMult = timerSpeeds[difficulty] || 1.8;

  miniTimerInterval = setInterval(() => {
    let speed = baseMult + (stage * 0.55);

    if (clockUpgradesCount > 0) {
      speed = speed * Math.pow(0.75, clockUpgradesCount);
    }

    miniTimeLeft -= speed;
    miniTimerFill.style.width = `${Math.max(miniTimeLeft, 0)}%`;

    if (miniTimeLeft <= 30) {
      miniTimerFill.classList.add("timer-warning");
    }

    if (miniTimeLeft <= 0) {
      clearInterval(miniTimerInterval);
      handleSequenceFail();
    }
  }, 100);
}

function checkSequenceStep(selectedItem, btnElement) {
  const expectedItem = targetSequence[currentStep];

  if (selectedItem.symbol === expectedItem.symbol) {
    triggerVisualFlash("correct");
    btnElement.style.visibility = "hidden";
    sequenceDisplay.children[currentStep].classList.add("completed");
    currentStep++;

    if (currentStep === targetSequence.length) {
      clearInterval(miniTimerInterval);
      exp += 350;
      tokens += 15;
      minigameWinStreak += 1;
      unlockAchievement("seq_master");

      if (minigameWinStreak >= 3) {
        if (!practiceMode && lives < 5) lives += 1;
        minigameWinStreak = 0;
        unlockAchievement("streak_3");
      }

      miniStreakEl.textContent = `${minigameWinStreak}/3`;
      updateStats();
      miniOptionsContainer.style.display = "none";
      miniNextBtn.classList.remove("hidden");
    }
  } else {
    clearInterval(miniTimerInterval);
    btnElement.classList.add("incorrect");
    handleSequenceFail();
  }
}

function handleSequenceFail() {
  triggerVisualFlash("incorrect");
  minigameWinStreak = 0;
  miniStreakEl.textContent = `${minigameWinStreak}/3`;
  
  if (!practiceMode) {
    if (activeShield) {
      activeShield = false;
    } else {
      lives -= 1;
    }
  }

  updateStats();
  const allBtns = miniOptionsContainer.querySelectorAll(".doodle-btn");
  allBtns.forEach(b => b.style.pointerEvents = "none");

  if (!practiceMode && lives <= 0) {
    setTimeout(triggerGameOver, 500);
  } else {
    miniNextBtn.classList.remove("hidden");
  }
}

miniNextBtn.addEventListener("click", startMinigameSequence);

// INICIALIZACIÓN
checkSavedGame();
updateStats();