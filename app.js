const dimensions = {
  energy: {
    title: "Энергия и восстановление",
    low: "истощение",
    high: "живой ресурс",
    highText: "Вы умеете поддерживать рабочий ритм и возвращаться в ресурс без долгого провала.",
    midText: "Ресурс есть, но он зависит от режима, людей вокруг и количества незавершенных дел.",
    lowText: "Сейчас энергия может утекать быстрее, чем восстанавливаться. Важно начать с сна, тела и разгрузки обязательств."
  },
  discipline: {
    title: "Дисциплина и доведение до конца",
    low: "импульс",
    high: "система",
    highText: "Вы способны превращать идеи в регулярные действия и выдерживать длинную дистанцию.",
    midText: "Вы можете быть очень продуктивны рывками, но система пока держится не всегда.",
    lowText: "Вам нужны более короткие циклы, понятные правила и меньше параллельных обещаний."
  },
  thinking: {
    title: "Мышление и решения",
    low: "реактивность",
    high: "ясность",
    highText: "Вы склонны разбираться в причинах, видеть связи и принимать решения не только на эмоциях.",
    midText: "Вы умеете думать глубоко, но в давлении можете переключаться на быстрые реакции.",
    lowText: "Сейчас решения могут чаще рождаться из срочности. Помогут паузы, записи и проверка фактов."
  },
  risk: {
    title: "Риск и смелость",
    low: "осторожность",
    high: "эксперимент",
    highText: "Вы готовы пробовать, ошибаться и выходить в неизвестность, когда видите смысл.",
    midText: "Вы балансируете между осторожностью и желанием попробовать, но иногда долго собираете уверенность.",
    lowText: "Вы защищаете себя от потерь. Это ценно, но росту могут помочь маленькие безопасные эксперименты."
  },
  money: {
    title: "Деньги и ценность",
    low: "зажим",
    high: "уверенная ценность",
    highText: "Вы лучше среднего чувствуете связь между пользой, ценой и личной ответственностью за доход.",
    midText: "У вас есть здоровые денежные установки, но могут оставаться зоны стыда, страха или недооценки себя.",
    lowText: "Деньги могут вызывать напряжение. Стоит отделить личную ценность от цены продукта или труда."
  },
  leadership: {
    title: "Лидерство и влияние",
    low: "одиночка",
    high: "ведущий",
    highText: "Вы можете брать ответственность, задавать направление и собирать людей вокруг задачи.",
    midText: "Лидерский потенциал есть, но вы можете включать его выборочно или только в знакомой среде.",
    lowText: "Вам может быть проще делать самому, чем вести других. Это снижает конфликт, но ограничивает масштаб."
  },
  communication: {
    title: "Коммуникация и границы",
    low: "закрытость",
    high: "ясный контакт",
    highText: "Вы способны говорить прямо, слышать другого и сохранять границы без лишней жесткости.",
    midText: "Контакт дается вам, но сложные разговоры могут забирать много сил или откладываться.",
    lowText: "Коммуникация может быть зоной утечки энергии. Начните с простых формулировок просьб и отказов."
  },
  emotion: {
    title: "Эмоциональная устойчивость",
    low: "перегруз",
    high: "саморегуляция",
    highText: "Вы замечаете свои состояния и обычно не позволяете эмоциям полностью управлять действиями.",
    midText: "Вы многое понимаете о себе, но при усталости можете проваливаться в резкие реакции.",
    lowText: "Эмоции могут быстро захватывать управление. Нужны опоры: тело, режим, поддержка, дневник состояний."
  },
  values: {
    title: "Ценности и смысл",
    low: "внешний шум",
    high: "внутренний компас",
    highText: "Вы лучше многих понимаете, зачем вам ваши цели, и можете сверять решения с личным смыслом.",
    midText: "Ваши ценности проявляются, но иногда теряются под ожиданиями, сравнением и срочностью.",
    lowText: "Может быть ощущение, что жизнь задается извне. Помогут вопросы: что мое, что не мое, ради чего я это делаю."
  },
  entrepreneurship: {
    title: "Предпринимательский потенциал",
    low: "исполнитель",
    high: "создатель",
    highText: "Вы видите возможности, думаете через пользу и способны превращать неопределенность в проект.",
    midText: "Предпринимательская жилка есть, но ей нужны фокус, рынок и привычка проверять гипотезы.",
    lowText: "Вам может быть комфортнее в понятной роли. Предпринимательство стоит начинать с маленьких проверок спроса."
  }
};

const questions = [
  { area: "energy", positive: true, text: "Я обычно просыпаюсь с ощущением, что у меня есть силы на день." },
  { area: "energy", positive: false, text: "После обычного рабочего дня я часто чувствую себя полностью выжатым." },
  { area: "energy", positive: true, text: "Я понимаю, какие занятия меня восстанавливают." },
  { area: "energy", positive: false, text: "Я часто продолжаю работать, хотя тело уже просит остановиться." },
  { area: "energy", positive: true, text: "Мне удается регулярно заботиться о сне, еде и движении." },
  { area: "energy", positive: false, text: "Я легко теряю силы, когда вокруг много чужих ожиданий." },
  { area: "energy", positive: true, text: "Я могу заметить усталость до того, как она превращается в срыв." },
  { area: "energy", positive: false, text: "Даже отдыхая, я часто чувствую внутреннее напряжение." },
  { area: "energy", positive: true, text: "У меня есть хотя бы один стабильный ритуал восстановления." },
  { area: "energy", positive: false, text: "Я часто беру на себя больше, чем реально могу выдержать." },

  { area: "discipline", positive: true, text: "Если я решил что-то делать, я обычно довожу это до понятного результата." },
  { area: "discipline", positive: false, text: "Я часто начинаю с энтузиазмом, но быстро бросаю." },
  { area: "discipline", positive: true, text: "Мне помогают списки, календарь или простая система задач." },
  { area: "discipline", positive: false, text: "Я часто откладываю важное до момента, когда уже горит." },
  { area: "discipline", positive: true, text: "Я могу делать нужное даже без вдохновения." },
  { area: "discipline", positive: false, text: "Мне сложно выбрать один приоритет и не распыляться." },
  { area: "discipline", positive: true, text: "Я умею разбивать большую цель на маленькие шаги." },
  { area: "discipline", positive: false, text: "Незавершенные дела часто висят у меня неделями." },
  { area: "discipline", positive: true, text: "Я стараюсь измерять прогресс фактами, а не настроением." },
  { area: "discipline", positive: false, text: "Мне трудно держать обещания самому себе." },

  { area: "thinking", positive: true, text: "Перед важным решением я стараюсь понять не только эмоции, но и факты." },
  { area: "thinking", positive: false, text: "В стрессе я часто принимаю решения слишком быстро." },
  { area: "thinking", positive: true, text: "Я люблю разбирать причины, а не только последствия." },
  { area: "thinking", positive: false, text: "Мне сложно признать, что моя первая версия могла быть неверной." },
  { area: "thinking", positive: true, text: "Я могу поменять мнение, если вижу сильные аргументы." },
  { area: "thinking", positive: false, text: "Я часто путаю срочное с важным." },
  { area: "thinking", positive: true, text: "Мне интересно смотреть на проблему с нескольких сторон." },
  { area: "thinking", positive: false, text: "Когда много неопределенности, я чаще замираю, чем структурирую ситуацию." },
  { area: "thinking", positive: true, text: "Я умею задавать себе неудобные, но честные вопросы." },
  { area: "thinking", positive: false, text: "Мне трудно отделить чужое мнение от своей оценки ситуации." },

  { area: "risk", positive: true, text: "Я готов пробовать новое, даже если результат не гарантирован." },
  { area: "risk", positive: false, text: "Страх ошибки часто останавливает меня до первого шага." },
  { area: "risk", positive: true, text: "Я воспринимаю маленькие неудачи как данные для следующей попытки." },
  { area: "risk", positive: false, text: "Мне нужно слишком много уверенности, чтобы начать." },
  { area: "risk", positive: true, text: "Я могу действовать, когда есть не вся информация, но есть направление." },
  { area: "risk", positive: false, text: "Я часто выбираю знакомое, даже если оно давно тесно." },
  { area: "risk", positive: true, text: "Мне легче расти через эксперименты, чем через идеальный план." },
  { area: "risk", positive: false, text: "Критика или отказ могут надолго выбить меня из действия." },
  { area: "risk", positive: true, text: "Я умею рисковать небольшими ставками, не разрушая базовую стабильность." },
  { area: "risk", positive: false, text: "Я часто жду внешнего разрешения, чтобы сделать смелый шаг." },

  { area: "money", positive: true, text: "Мне в целом нормально говорить о цене своей работы или продукта." },
  { area: "money", positive: false, text: "Когда нужно назвать цену, я часто занижаю ее." },
  { area: "money", positive: true, text: "Я понимаю, какую ценность создаю для других." },
  { area: "money", positive: false, text: "Деньги часто вызывают у меня стыд, тревогу или напряжение." },
  { area: "money", positive: true, text: "Я могу спокойно обсуждать оплату, условия и обязательства." },
  { area: "money", positive: false, text: "Мне сложно просить оплату вовремя или напоминать о долге." },
  { area: "money", positive: true, text: "Я стараюсь считать доходы, расходы и реальную прибыль." },
  { area: "money", positive: false, text: "Я иногда связываю свою человеческую ценность с количеством денег." },
  { area: "money", positive: true, text: "Я готов учиться продавать без ощущения, что обманываю людей." },
  { area: "money", positive: false, text: "Я часто избегаю финансовых решений, пока они не становятся срочными." },

  { area: "leadership", positive: true, text: "В неопределенной ситуации я могу взять на себя инициативу." },
  { area: "leadership", positive: false, text: "Мне проще сделать самому, чем объяснить и делегировать." },
  { area: "leadership", positive: true, text: "Люди иногда обращаются ко мне за направлением или решением." },
  { area: "leadership", positive: false, text: "Я боюсь разочаровать людей, поэтому избегаю роли ведущего." },
  { area: "leadership", positive: true, text: "Я могу говорить о сложном прямо, если это важно для дела." },
  { area: "leadership", positive: false, text: "Конфликт часто заставляет меня отступить, даже если я прав." },
  { area: "leadership", positive: true, text: "Мне интересно строить команды, процессы или сообщества." },
  { area: "leadership", positive: false, text: "Ответственность за других часто кажется мне слишком тяжелой." },
  { area: "leadership", positive: true, text: "Я могу признавать ошибку, не теряя авторитет внутри себя." },
  { area: "leadership", positive: false, text: "Мне сложно просить людей о результате, если я боюсь показаться жестким." },

  { area: "communication", positive: true, text: "Я могу сказать «нет» без долгого чувства вины." },
  { area: "communication", positive: false, text: "Я часто соглашаюсь, хотя внутри не хочу." },
  { area: "communication", positive: true, text: "Я стараюсь уточнять, что человек имел в виду, прежде чем спорить." },
  { area: "communication", positive: false, text: "Мне проще молчать, чем честно объяснить свое недовольство." },
  { area: "communication", positive: true, text: "Я могу просить о помощи достаточно прямо." },
  { area: "communication", positive: false, text: "После сложного разговора я долго прокручиваю его в голове." },
  { area: "communication", positive: true, text: "Я умею признавать чужую точку зрения, не отказываясь от своей." },
  { area: "communication", positive: false, text: "Мне сложно обозначать правила, сроки и ожидания заранее." },
  { area: "communication", positive: true, text: "Я могу давать обратную связь без желания унизить человека." },
  { area: "communication", positive: false, text: "Я часто надеюсь, что другие сами догадаются, что мне нужно." },

  { area: "emotion", positive: true, text: "Я обычно понимаю, какую эмоцию сейчас испытываю." },
  { area: "emotion", positive: false, text: "Мои реакции иногда сильнее ситуации." },
  { area: "emotion", positive: true, text: "Я могу сделать паузу перед ответом, если меня задели." },
  { area: "emotion", positive: false, text: "Если что-то пошло не так, я быстро начинаю винить себя или других." },
  { area: "emotion", positive: true, text: "Мне удается возвращаться в норму после неприятного разговора." },
  { area: "emotion", positive: false, text: "Я часто подавляю эмоции, пока они не прорываются резко." },
  { area: "emotion", positive: true, text: "Я знаю свои триггеры и стараюсь учитывать их." },
  { area: "emotion", positive: false, text: "Тревога может парализовать меня даже при понятной задаче." },
  { area: "emotion", positive: true, text: "Я могу просить поддержку, когда мне правда тяжело." },
  { area: "emotion", positive: false, text: "Мне трудно отличить реальную опасность от внутреннего страха." },

  { area: "values", positive: true, text: "Я понимаю, какие вещи для меня нельзя предавать ради выгоды." },
  { area: "values", positive: false, text: "Я часто живу по ожиданиям других людей." },
  { area: "values", positive: true, text: "У меня есть ощущение, ради чего я стараюсь." },
  { area: "values", positive: false, text: "Сравнение с другими легко сбивает меня с собственного пути." },
  { area: "values", positive: true, text: "Я могу отказаться от возможности, если она противоречит моим принципам." },
  { area: "values", positive: false, text: "Мне сложно понять, чего хочу именно я, а не окружение." },
  { area: "values", positive: true, text: "Я регулярно замечаю, что для меня стало важным, а что потеряло смысл." },
  { area: "values", positive: false, text: "Я часто гонюсь за целями, которые не дают внутреннего удовлетворения." },
  { area: "values", positive: true, text: "Мне важно, чтобы дело приносило не только деньги, но и смысл." },
  { area: "values", positive: false, text: "Я могу долго терпеть среду, которая явно мне не подходит." },

  { area: "entrepreneurship", positive: true, text: "Я часто замечаю проблемы, за решение которых люди могли бы платить." },
  { area: "entrepreneurship", positive: false, text: "Мне сложно представить, что я могу сам создать источник дохода." },
  { area: "entrepreneurship", positive: true, text: "Мне интересно проверять идеи на реальных людях, а не только думать о них." },
  { area: "entrepreneurship", positive: false, text: "Я долго дорабатываю идею, прежде чем показать ее кому-то." },
  { area: "entrepreneurship", positive: true, text: "Я могу слышать отказ клиента без ощущения личного провала." },
  { area: "entrepreneurship", positive: false, text: "Мне трудно продавать то, что еще не идеально." },
  { area: "entrepreneurship", positive: true, text: "Я думаю не только о продукте, но и о каналах, клиентах и повторяемости." },
  { area: "entrepreneurship", positive: false, text: "Мне комфортнее выполнять понятные задачи, чем самому искать возможности." },
  { area: "entrepreneurship", positive: true, text: "Я готов быстро менять гипотезу, если рынок отвечает молчанием." },
  { area: "entrepreneurship", positive: false, text: "Неопределенность в деньгах и планах быстро лишает меня желания пробовать." }
];

let current = 0;
let answers = [];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const questionNumber = document.querySelector("#question-number");
const questionText = document.querySelector("#question-text");
const questionArea = document.querySelector("#question-area");
const progressBar = document.querySelector("#progress-bar");
const backButton = document.querySelector("#back-button");
const spectrumList = document.querySelector("#spectrum-list");
const insights = document.querySelector("#insights");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#restart-button").addEventListener("click", resetQuiz);
document.querySelector("#again-button").addEventListener("click", resetQuiz);
document.querySelector("#copy-button").addEventListener("click", copyResult);
backButton.addEventListener("click", goBack);

document.querySelectorAll(".answer").forEach((button) => {
  button.addEventListener("click", () => answerQuestion(button.dataset.answer === "yes"));
});

function startQuiz() {
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
}

function resetQuiz() {
  current = 0;
  answers = [];
  startQuiz();
}

function renderQuestion() {
  const question = questions[current];
  questionNumber.textContent = String(current + 1);
  questionText.textContent = question.text;
  questionArea.textContent = dimensions[question.area].title;
  progressBar.style.width = `${(current / questions.length) * 100}%`;
  backButton.disabled = current === 0;
}

function answerQuestion(value) {
  answers[current] = value;
  current += 1;

  if (current >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function goBack() {
  if (current === 0) return;
  current -= 1;
  renderQuestion();
}

function showResult() {
  const result = calculateResult();
  localStorage.setItem("human-spectrum-result", JSON.stringify(result));
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressBar.style.width = "100%";

  const sorted = [...result.spectrums].sort((a, b) => b.score - a.score);
  const top = sorted.slice(0, 2);
  const low = [...sorted].reverse().slice(0, 2);

  resultTitle.textContent = buildTitle(top);
  resultSummary.textContent = buildSummary(top, low, result.average);

  spectrumList.innerHTML = result.spectrums.map(renderSpectrum).join("");
  insights.innerHTML = [
    renderInsight("Сильная опора", `${top[0].title}: ${top[0].text}`),
    renderInsight("Зона роста", `${low[0].title}: ${low[0].text}`),
    renderInsight("Первый шаг", buildNextStep(low[0].key))
  ].join("");
}

function calculateResult() {
  const raw = Object.fromEntries(Object.keys(dimensions).map((key) => [key, { points: 0, total: 0 }]));

  questions.forEach((question, index) => {
    const answer = answers[index];
    const isPoint = answer === question.positive;
    raw[question.area].points += isPoint ? 1 : 0;
    raw[question.area].total += 1;
  });

  const spectrums = Object.entries(raw).map(([key, value]) => {
    const score = Math.round((value.points / value.total) * 100);
    return {
      key,
      score,
      ...dimensions[key],
      text: pickText(dimensions[key], score)
    };
  });

  const average = Math.round(spectrums.reduce((sum, item) => sum + item.score, 0) / spectrums.length);
  return { average, spectrums, createdAt: new Date().toISOString() };
}

function pickText(dimension, score) {
  if (score >= 70) return dimension.highText;
  if (score >= 40) return dimension.midText;
  return dimension.lowText;
}

function buildTitle(top) {
  const pair = top.map((item) => item.title.toLowerCase()).join(" + ");
  return `Ваш ведущий рисунок: ${pair}`;
}

function buildSummary(top, low, average) {
  if (average >= 70) {
    return `Ваш профиль выглядит собранным и зрелым: особенно выделяются ${top[0].title.toLowerCase()} и ${top[1].title.toLowerCase()}. Следующий рост — не в том, чтобы давить сильнее, а в том, чтобы бережно подтянуть ${low[0].title.toLowerCase()}.`;
  }

  if (average >= 45) {
    return `У вас смешанный, живой профиль: есть сильные стороны, но часть энергии уходит на внутренние противоречия. Главная опора сейчас — ${top[0].title.toLowerCase()}, а самый быстрый прирост может дать работа со спектром «${low[0].title}».`;
  }

  return `Сейчас карта показывает не слабость, а перегруз или разрыв между желаниями и системой. Начинайте не с большого рывка, а с восстановления базы и одного малого шага в зоне «${low[0].title}».`;
}

function buildNextStep(key) {
  const steps = {
    energy: "На 7 дней выберите один обязательный ритуал восстановления: сон, прогулка, тишина или отключение от задач.",
    discipline: "Сформулируйте одну цель на неделю и каждый день делайте самый маленький измеримый шаг.",
    thinking: "Перед важным решением выпишите факты, страхи и варианты. Не держите все в голове.",
    risk: "Запустите безопасный эксперимент, где потеря ограничена временем или маленькой суммой.",
    money: "Перепишите свою цену через пользу для человека: что меняется у клиента после вашей работы.",
    leadership: "Выберите одну ситуацию, где вы не делаете все сами, а задаете направление и просите результат.",
    communication: "Подготовьте три простые фразы: просьба, отказ и уточнение ожиданий.",
    emotion: "Ведите короткий дневник состояний: событие, эмоция, реакция, что помогло.",
    values: "Выпишите пять вещей, ради которых вы готовы отказаться от лишней выгоды или чужого одобрения.",
    entrepreneurship: "Найдите трех людей с похожей проблемой и спросите, как они решают ее сейчас."
  };

  return steps[key];
}

function renderSpectrum(item) {
  return `
    <article class="spectrum-card">
      <div class="spectrum-title">
        <h3>${item.title}</h3>
        <span class="score">${item.score}%</span>
      </div>
      <div class="bar" aria-hidden="true"><div class="fill" style="width: ${item.score}%"></div></div>
      <div class="labels"><span>${item.low}</span><span>${item.high}</span></div>
      <p>${item.text}</p>
    </article>
  `;
}

function renderInsight(title, text) {
  return `
    <div class="insight">
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `;
}

async function copyResult() {
  const result = calculateResult();
  const lines = [
    "Моя карта человека:",
    ...result.spectrums.map((item) => `${item.title}: ${item.score}%`),
    "",
    resultSummary.textContent
  ];

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    document.querySelector("#copy-button").textContent = "Скопировано";
  } catch {
    document.querySelector("#copy-button").textContent = "Копирование недоступно";
  }
}
