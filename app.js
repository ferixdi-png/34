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

const qualityDefinitions = {
  energy: {
    title: "Энергия",
    low: "быстро садится",
    high: "много живого ресурса",
    weights: { energy: 0.85, emotion: 0.15 },
    lowText: "Силы могут уходить быстрее, чем вы успеваете их возвращать. Часто это не про лень, а про перегруз, лишние обязательства и привычку терпеть до последнего.",
    midText: "Ресурс есть, но он не всегда стабилен. Вы можете хорошо включаться, когда есть смысл, но режим, люди и незавершенные дела заметно влияют на тонус.",
    highText: "У вас есть живой запас энергии и способность возвращаться в рабочее состояние. Это сильная база: на ней можно строить дисциплину, проекты и отношения.",
    growth: "Качать через сон, движение, разгрузку лишнего и честный вопрос: что регулярно забирает силы, но не дает ценности."
  },
  selfControl: {
    title: "Самообладание",
    low: "реакции ведут",
    high: "держит центр",
    weights: { emotion: 0.65, thinking: 0.25, energy: 0.1 },
    lowText: "Эмоции могут быстро захватывать управление. В такие моменты вы можете сказать лишнее, закрыться или принять решение из боли.",
    midText: "Вы часто понимаете, что с вами происходит, но в усталости или давлении реакции все еще могут быть резкими.",
    highText: "Вы умеете выдерживать напряжение и не отдавать рулевое колесо первой эмоции. Это качество делает вас надежнее в сложных разговорах и решениях.",
    growth: "Качать через паузу перед ответом, дневник триггеров и простую привычку сначала называть состояние, а потом действовать."
  },
  discipline: {
    title: "Дисциплина",
    low: "держится на настроении",
    high: "есть система",
    weights: { discipline: 0.85, thinking: 0.15 },
    lowText: "Нужные дела могут зависеть от вдохновения, дедлайна или внешнего давления. Из-за этого вы можете знать, что важно, но откладывать до момента, когда уже горит.",
    midText: "Вы умеете собираться, но система пока не всегда держит вас в обычные дни. Рывки есть, устойчивости можно добавить.",
    highText: "Вы способны делать нужное без постоянной мотивации. Это редкая опора: она превращает идеи в реальную траекторию.",
    growth: "Качать через маленький ежедневный минимум, один главный приоритет и честное ограничение количества обещаний."
  },
  finishing: {
    title: "Доведение",
    low: "много начал",
    high: "закрывает циклы",
    weights: { discipline: 0.65, entrepreneurship: 0.2, risk: 0.15 },
    lowText: "Идей и стартов может быть больше, чем завершенных результатов. Это создает внутренний шум и ощущение, что вы постоянно что-то должны.",
    midText: "Вы можете доводить, когда есть понятный смысл и короткая дистанция. На длинных циклах может проседать фокус.",
    highText: "Вы умеете закрывать циклы и превращать намерение в результат. На вас можно опираться там, где другим хватает только энтузиазма.",
    growth: "Качать через правило: не начинать новое крупное дело, пока одно старое не доведено до видимой точки."
  },
  clarity: {
    title: "Ясность",
    low: "тонет в шуме",
    high: "видит суть",
    weights: { thinking: 0.8, emotion: 0.1, values: 0.1 },
    lowText: "В шуме, срочности или чужих мнениях вам может быть трудно быстро увидеть главное. Из-за этого решения откладываются или принимаются на эмоциях.",
    midText: "Вы умеете думать глубоко, но не всегда быстро отделяете важное от громкого. Нужна структура, чтобы мозг не тащил все сразу.",
    highText: "Вы хорошо видите причинно-следственные связи и умеете разбирать ситуацию без лишней драмы. Это качество помогает быть сильнее обстоятельств.",
    growth: "Качать через записи: факты отдельно, страхи отдельно, варианты отдельно."
  },
  selfHonesty: {
    title: "Честность с собой",
    low: "есть самообман",
    high: "смотрит прямо",
    weights: { thinking: 0.45, values: 0.35, emotion: 0.2 },
    lowText: "Иногда может быть проще объяснить себе ситуацию красиво, чем признать неприятную правду. Так боль откладывается, но не исчезает.",
    midText: "Вы часто чувствуете правду, но не всегда сразу готовы ее признать и превратить в действие.",
    highText: "Вы способны смотреть на себя без лишней защиты. Это не жесткость, а зрелость: видеть реальность и не разваливаться от нее.",
    growth: "Качать через вопрос: что я уже знаю, но не хочу признавать вслух."
  },
  courage: {
    title: "Смелость",
    low: "ждет разрешения",
    high: "идет в пробу",
    weights: { risk: 0.8, entrepreneurship: 0.15, leadership: 0.05 },
    lowText: "Страх ошибки, оценки или отказа может останавливать раньше первого шага. Внутри может быть много идей, которые остаются в голове.",
    midText: "Вы можете пробовать, когда риск понятен и есть опора. Но там, где нужно проявиться без гарантий, включается торможение.",
    highText: "Вы готовы выходить в неизвестность и пробовать, даже когда не все идеально. Это сильный двигатель роста.",
    growth: "Качать через маленькие публичные шаги: показать черновик, спросить цену, предложить идею, получить ответ."
  },
  flexibility: {
    title: "Гибкость",
    low: "держится за старое",
    high: "меняет подход",
    weights: { risk: 0.35, thinking: 0.35, entrepreneurship: 0.3 },
    lowText: "Когда старый подход не работает, может быть сложно быстро перестроиться. Иногда вы можете продолжать давить туда, где уже нужен другой способ.",
    midText: "Вы способны менять курс, но чаще после накопленного напряжения или очевидного сигнала.",
    highText: "Вы умеете не застревать в одной версии себя и одного плана. Это качество особенно важно для бизнеса, отношений и личного роста.",
    growth: "Качать через вопрос: какой самый маленький другой способ я могу проверить уже сейчас."
  },
  selfWorth: {
    title: "Самоценность",
    low: "доказывает право",
    high: "занимает место",
    weights: { money: 0.35, communication: 0.25, values: 0.25, emotion: 0.15 },
    lowText: "Может быть ощущение, что право на место, деньги или внимание нужно постоянно заслуживать. Тогда вы легко переобещаете, терпите лишнее или занижаете себя.",
    midText: "Вы уже чувствуете свою ценность, но в некоторых ситуациях все еще начинаете оправдываться или подстраиваться.",
    highText: "Вы лучше среднего чувствуете право быть собой, занимать место и брать свое без постоянного внутреннего суда.",
    growth: "Качать через практику: меньше объяснять свою ценность, больше спокойно обозначать условия."
  },
  moneyConfidence: {
    title: "Денежная уверенность",
    low: "зажим в цене",
    high: "спокойно про деньги",
    weights: { money: 0.85, entrepreneurship: 0.15 },
    lowText: "Деньги могут вызывать напряжение: назвать цену, напомнить об оплате, посчитать прибыль, не уйти в стыд. Это часто бьет не по доходу только, а по ощущению взрослости.",
    midText: "С деньгами уже есть контакт, но часть разговоров все еще может быть неловкой. Особенно там, где нужно просить, продавать или держать условия.",
    highText: "Вы умеете связывать ценность, цену и ответственность. Это дает спокойствие в работе, переговорах и собственных проектах.",
    growth: "Качать через регулярный учет, ясные условия до старта и фразу цены без оправдания после нее."
  },
  boundaries: {
    title: "Границы",
    low: "тащит чужое",
    high: "ясно говорит нет",
    weights: { communication: 0.7, leadership: 0.15, values: 0.15 },
    lowText: "Вы можете чувствовать, где вам неудобно, но не всегда говорить об этом вовремя. Из-за этого копится раздражение, усталость и желание резко закрыться.",
    midText: "Границы есть, но сложные разговоры могут откладываться. Иногда вы выбираете мир снаружи ценой напряжения внутри.",
    highText: "Вы умеете говорить нет, просить и обозначать правила без лишней жесткости. Это делает контакт чище и честнее.",
    growth: "Качать через короткие отказы, заранее проговоренные ожидания и право не объяснять каждое свое решение."
  },
  closeness: {
    title: "Близость",
    low: "держит дистанцию",
    high: "умеет доверять",
    weights: { communication: 0.35, emotion: 0.35, values: 0.15, energy: 0.15 },
    lowText: "Внутри может быть желание контакта, но при этом осторожность: не раскрыться лишний раз, не попросить, не показать слабость.",
    midText: "Вы можете быть теплым человеком, но близость требует безопасности. Если ее мало, вы можете уходить в контроль или дистанцию.",
    highText: "Вы умеете быть в контакте, доверять и оставаться собой рядом с другими. Это большая человеческая сила.",
    growth: "Качать через маленькую честность: говорить о нужде раньше, чем она превращается в претензию."
  },
  empathy: {
    title: "Эмпатия",
    low: "слабо считывает",
    high: "тонко чувствует",
    weights: { communication: 0.45, emotion: 0.25, values: 0.2, leadership: 0.1 },
    lowText: "В фокусе может быть задача, позиция или защита себя, а не состояние другого. Это не делает вас холодным, но контакт может терять нюансы.",
    midText: "Вы чувствуете людей, но не всегда понимаете, где эмпатия помогает, а где заставляет брать лишнее.",
    highText: "Вы хорошо считываете людей и можете понимать, что стоит за словами. Важно только не растворяться в чужих состояниях.",
    growth: "Качать через баланс: слышать другого, но каждый раз спрашивать себя, где моя ответственность заканчивается."
  },
  communication: {
    title: "Коммуникация",
    low: "много недосказанного",
    high: "ясный контакт",
    weights: { communication: 0.75, leadership: 0.15, thinking: 0.1 },
    lowText: "Многое может оставаться внутри: просьбы, недовольство, ожидания, цена, сроки. Потом это превращается в усталость или резкость.",
    midText: "Вы умеете общаться, но сложные разговоры могут забирать слишком много энергии.",
    highText: "Вы способны говорить прямо, слышать ответ и не превращать разговор в борьбу за правоту.",
    growth: "Качать через простую структуру: факт, что я чувствую, что мне нужно, какой следующий шаг."
  },
  resilience: {
    title: "Устойчивость",
    low: "долго выбивает",
    high: "быстро возвращается",
    weights: { emotion: 0.55, energy: 0.25, risk: 0.2 },
    lowText: "Отказ, критика или неприятный разговор могут выбивать надолго. В такие моменты жизнь сужается до одной болезненной точки.",
    midText: "Вы возвращаетесь, но не всегда быстро. Нужны опоры, чтобы один удар не забирал весь день или неделю.",
    highText: "Вы умеете проживать неприятное и возвращаться к действию. Это не отсутствие чувств, а способность не застревать.",
    growth: "Качать через восстановительный протокол: тело, запись фактов, разговор с опорным человеком, один маленький шаг."
  },
  innerCompass: {
    title: "Внутренний компас",
    low: "много чужого",
    high: "понимает свое",
    weights: { values: 0.8, thinking: 0.1, money: 0.1 },
    lowText: "Чужие ожидания, сравнение и внешняя картинка могут сбивать вас с себя. Тогда цели вроде есть, но внутри мало тепла.",
    midText: "Вы чувствуете свои ценности, но иногда теряете их в шуме срочности, денег или одобрения.",
    highText: "Вы понимаете, что для вас по-настоящему важно. Это дает не только смысл, но и фильтр для решений.",
    growth: "Качать через список: что мое, что навязано, ради чего я готов платить временем и силами."
  },
  ambition: {
    title: "Амбиция",
    low: "сдерживает себя",
    high: "разрешает больше",
    weights: { entrepreneurship: 0.35, leadership: 0.25, money: 0.2, risk: 0.2 },
    lowText: "Вы можете хотеть большего, но быстро уменьшать желание до безопасного размера. Иногда проще сказать себе “мне и так нормально”, чем признать настоящую высоту.",
    midText: "Амбиция есть, но она включается волнами. Ей нужны ясная цель, окружение и меньше страха оценки.",
    highText: "Вы разрешаете себе расти, занимать больше места и хотеть большего без стыда. Это мощный двигатель, если держать его в контакте с ценностями.",
    growth: "Качать через честную формулировку: чего я хочу на самом деле, если не уменьшать себя."
  },
  responsibility: {
    title: "Ответственность",
    low: "ждет снаружи",
    high: "берет влияние",
    weights: { discipline: 0.3, leadership: 0.3, thinking: 0.2, values: 0.2 },
    lowText: "Часть управления жизнью может уходить обстоятельствам, людям или настроению. Тогда внутри меньше ощущения, что вы реально влияете на ход событий.",
    midText: "Вы берете ответственность в важных местах, но можете уставать и ждать, что кто-то другой задаст рамку.",
    highText: "Вы воспринимаете себя как человека, который может влиять. Это взрослая позиция: не все контролировать, но свое брать.",
    growth: "Качать через вопрос: какой один кусок этой ситуации точно находится в моей зоне влияния."
  },
  leadership: {
    title: "Лидерство",
    low: "избегает вести",
    high: "задает направление",
    weights: { leadership: 0.8, communication: 0.1, risk: 0.1 },
    lowText: "Вам может быть проще быть сильным исполнителем или одиночкой, чем человеком, который ведет других и просит результат.",
    midText: "Лидерство проявляется, когда ситуация знакома или люди безопасны. В более напряженной среде вы можете отступать.",
    highText: "Вы способны задавать направление, брать ответственность и собирать людей вокруг задачи. Это качество масштабирует ваши идеи.",
    growth: "Качать через маленькое делегирование: не делать за человека, а ясно описать результат и срок."
  },
  creativity: {
    title: "Созидательность",
    low: "идеи остаются внутри",
    high: "создает в реальности",
    weights: { entrepreneurship: 0.75, risk: 0.15, thinking: 0.1 },
    lowText: "Вы можете видеть возможности, но долго держать их в голове. Главный тормоз — не отсутствие идей, а переход от мысли к проверке.",
    midText: "Созидательность есть, но ей нужны фокус, быстрые тесты и привычка показывать неидеальное.",
    highText: "Вы умеете превращать наблюдения и идеи в реальные шаги. Это предпринимательская и творческая сила одновременно.",
    growth: "Качать через правило 48 часов: любую идею быстро превратить в вопрос, прототип или разговор с реальным человеком."
  }
};

const qualitySignals = {
  energy: [0, 1, 2, 3, 4, 6, 8],
  selfControl: [20, 21, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  discipline: [10, 11, 12, 13, 14, 16, 18, 19],
  finishing: [10, 11, 14, 17, 18, 19, 91, 93],
  clarity: [20, 21, 22, 24, 25, 26, 27, 28],
  selfHonesty: [23, 28, 29, 80, 82, 85, 87],
  courage: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  flexibility: [24, 26, 30, 32, 34, 36, 92, 96, 98],
  selfWorth: [40, 41, 42, 43, 47, 60, 61, 80],
  moneyConfidence: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  boundaries: [54, 58, 60, 61, 64, 67, 69],
  closeness: [60, 62, 65, 66, 68, 70, 78],
  empathy: [52, 56, 62, 66, 68, 70, 78],
  communication: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  resilience: [1, 6, 7, 31, 37, 70, 71, 72, 74, 77, 79],
  innerCompass: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
  ambition: [50, 52, 56, 90, 92, 96, 98, 99],
  responsibility: [10, 14, 18, 20, 25, 50, 54, 58],
  leadership: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  creativity: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
};

let current = 0;
let answers = [];

const startScreen = document.querySelector("#start-screen");
const introScreen = document.querySelector("#intro-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const questionNumber = document.querySelector("#question-number");
const questionText = document.querySelector("#question-text");
const questionArea = document.querySelector("#question-area");
const progressBar = document.querySelector("#progress-bar");
const backButton = document.querySelector("#back-button");
const spectrumList = document.querySelector("#spectrum-list");
const qualityList = document.querySelector("#quality-list");
const insights = document.querySelector("#insights");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const deepPortrait = document.querySelector("#deep-portrait");

document.querySelector("#start-button").addEventListener("click", showIntro);
document.querySelector("#begin-quiz-button").addEventListener("click", startQuiz);
document.querySelector("#intro-back-button").addEventListener("click", showStart);
document.querySelector("#restart-button").addEventListener("click", resetQuiz);
document.querySelector("#again-button").addEventListener("click", resetQuiz);
document.querySelector("#copy-button").addEventListener("click", copyResult);
backButton.addEventListener("click", goBack);

document.querySelectorAll(".answer").forEach((button) => {
  button.addEventListener("click", () => answerQuestion(button.dataset.answer === "yes"));
});

function showIntro() {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");
}

function showStart() {
  introScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

function startQuiz() {
  startScreen.classList.add("hidden");
  introScreen.classList.add("hidden");
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
  questionArea.textContent = "отвечайте как в жизни";
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
  const qualityTop = [...result.qualities].sort((a, b) => b.score - a.score).slice(0, 4);
  const qualityLow = [...result.qualities].sort((a, b) => a.score - b.score).slice(0, 4);

  resultTitle.textContent = buildTitle(qualityTop);
  resultSummary.textContent = buildSummary(top, low, qualityTop, qualityLow, result.average);
  deepPortrait.innerHTML = buildDeepPortrait(top, low, qualityTop, qualityLow, result.average)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  qualityList.innerHTML = result.qualities.map(renderQuality).join("");
  spectrumList.innerHTML = result.spectrums.map(renderSpectrum).join("");
  insights.innerHTML = [
    renderInsight("Сильная опора", `${qualityTop[0].title}: ${qualityTop[0].text}`),
    renderInsight("Главная боль", `${qualityLow[0].title}: ${qualityLow[0].text}`),
    renderInsight("Первый шаг", qualityLow[0].growth)
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

  const qualities = Object.entries(qualityDefinitions).map(([key, quality]) => {
    const weightedScore = calculateWeightedScore(quality.weights, spectrums);
    const directScore = calculateDirectQualityScore(key);
    const score = Math.round(directScore * 0.7 + weightedScore * 0.3);
    return {
      key,
      score,
      ...quality,
      text: pickText(quality, score)
    };
  });

  const average = Math.round(spectrums.reduce((sum, item) => sum + item.score, 0) / spectrums.length);
  return { average, spectrums, qualities, createdAt: new Date().toISOString() };
}

function pickText(dimension, score) {
  if (score >= 70) return dimension.highText;
  if (score >= 40) return dimension.midText;
  return dimension.lowText;
}

function calculateWeightedScore(weights, spectrums) {
  const byKey = Object.fromEntries(spectrums.map((item) => [item.key, item.score]));
  const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  const score = Object.entries(weights).reduce((sum, [key, weight]) => {
    return sum + (byKey[key] || 0) * weight;
  }, 0);

  return Math.round(score / totalWeight);
}

function calculateDirectQualityScore(key) {
  const indexes = qualitySignals[key] || [];
  if (!indexes.length) return 0;

  const points = indexes.reduce((sum, index) => {
    const question = questions[index];
    const answer = answers[index];
    return sum + (answer === question.positive ? 1 : 0);
  }, 0);

  return Math.round((points / indexes.length) * 100);
}

function buildTitle(topQualities) {
  const pair = topQualities.slice(0, 2).map((item) => item.title.toLowerCase()).join(" + ");
  return `Ваш ведущий рисунок: ${pair}`;
}

function buildSummary(top, low, qualityTop, qualityLow, average) {
  if (average >= 70) {
    return `Профиль выглядит сильным и собранным: особенно проявлены ${qualityTop[0].title.toLowerCase()}, ${qualityTop[1].title.toLowerCase()} и ${qualityTop[2].title.toLowerCase()}. Рост сейчас не в том, чтобы давить еще сильнее, а в том, чтобы бережно подтянуть ${qualityLow[0].title.toLowerCase()} и ${qualityLow[1].title.toLowerCase()}.`;
  }

  if (average >= 45) {
    return `У вас живой, неоднородный профиль: есть сильные качества, но часть энергии уходит на внутренние противоречия. Главные опоры сейчас — ${qualityTop[0].title.toLowerCase()} и ${qualityTop[1].title.toLowerCase()}, а самый быстрый прирост дадут ${qualityLow[0].title.toLowerCase()} и ${qualityLow[1].title.toLowerCase()}.`;
  }

  return `Карта показывает не “слабого человека”, а перегруз, разрыв между желаниями и системой или период, где слишком много держится на внутреннем напряжении. Начинать стоит не с большого рывка, а с восстановления базы: ${top[0].title.toLowerCase()}, ${low[0].title.toLowerCase()} и одного малого шага в качестве «${qualityLow[0].title}».`;
}

function buildDeepPortrait(top, low, qualityTop, qualityLow, average) {
  const strengthNames = qualityTop.map((item) => item.title.toLowerCase()).join(", ");
  const painNames = qualityLow.map((item) => item.title.toLowerCase()).join(", ");
  const tone = average >= 70
    ? "В целом вы производите впечатление человека, у которого уже есть внутренняя сборка: вы не просто хотите, а умеете держать направление, видеть смысл и превращать часть решений в действие."
    : average >= 45
      ? "Ваша карта похожа на живого человека в движении: в ней есть сильные опоры, но рядом с ними видны места, где вы теряете силы, откладываете себя или слишком долго терпите напряжение."
      : "Сейчас карта больше говорит о накопленной усталости и внутреннем разрыве, чем о недостатке характера. Внутри может быть много желания, но система поддержки, ясность и устойчивость пока не всегда выдерживают нагрузку.";

  return [
    tone,
    `Самые сильные качества по ответам: ${strengthNames}. Это то, на что уже можно опираться. Эти стороны показывают, как вы обычно справляетесь, где у вас есть естественная сила и за счет чего вы можете расти без насилия над собой.`,
    `Самые чувствительные зоны: ${painNames}. Это не “плохие качества”, а места, где чаще всего утекают энергия, деньги, уверенность, контакт с людьми или ощущение контроля над жизнью.`,
    `Если смотреть глубже, ваш профиль держится на сочетании сфер «${top[0].title}» и «${top[1].title}». А напряжение чаще всего собирается вокруг «${low[0].title}» и «${low[1].title}». Именно там может появляться самосаботаж: откладывание, резкость, избегание разговора, занижение себя или попытка тащить все одному.`,
    `Главная задача сейчас — не стать другим человеком, а сильнее настроить уже имеющегося. Подтягивайте самые низкие качества маленькими повторяемыми действиями, а самые сильные используйте как рычаг: через них вам легче менять остальное.`
  ];
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

function renderQuality(item) {
  return `
    <article class="quality-card">
      <div class="quality-top">
        <div>
          <h4>${item.title}</h4>
          <span>${item.low} -> ${item.high}</span>
        </div>
        <strong>${item.score}%</strong>
      </div>
      <div class="bar" aria-hidden="true"><div class="fill" style="width: ${item.score}%"></div></div>
      <p>${item.text}</p>
      <p class="growth"><b>Как качать:</b> ${item.growth}</p>
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
    "",
    "20 качеств:",
    ...result.qualities.map((item) => `${item.title}: ${item.score}% — ${item.text}`),
    "",
    "Короткий вывод:",
    resultSummary.textContent,
    "",
    "Длинный вывод:",
    ...Array.from(deepPortrait.querySelectorAll("p")).map((item) => item.textContent)
  ];

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    document.querySelector("#copy-button").textContent = "Скопировано";
  } catch {
    document.querySelector("#copy-button").textContent = "Копирование недоступно";
  }
}
