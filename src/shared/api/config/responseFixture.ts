const responseFixture = [
  {
    choices: [
      {
        message: {
          content:
            '```json\n{\n  "cards": [\n    {\n      "name": "Десятка Пентаклей",\n      "meaning": "Стабильность, семейное благополучие, финансовая защищенность."\n    },\n    {\n      "name": "Сила",\n      "meaning": "Внутренняя сила, уверенность, преодоление трудностей."\n    },\n    {\n      "name": "Император",\n      "meaning": "Сильное руководство, поддержка традиций, ответственность."\n    }\n  ],\n  "conclusion": "Приобретение шубы будет мудрым решением, которое принесет стабильность и поддержку семьи.",\n  "introduction": "Карты говорят о финансовой устойчивости и семейном благополучии. Это время для надежных инвестиций, таких как покупка шубы."\n}\n```',
          role: 'assistant',
        },
        index: 0,
        finish_reason: 'stop',
      },
    ],
    created: 1736957622,
    model: 'GigaChat:1.0.26.20',
    object: 'chat.completion',
    usage: {
      prompt_tokens: 109,
      completion_tokens: 193,
      total_tokens: 302,
    },
  },

  {
    choices: [
      {
        message: {
          content:
            '```json\n{\n  "cards": [\n    {\n      "name": "Двойка Кубков",\n      "meaning": "Символизирует гармонию, баланс и глубокую связь между людьми."\n    },\n    {\n      "name": "Колесо Фортуны",\n      "meaning": "Может указывать на перемены и неожиданные события, которые могут повлиять на отношения."\n    },\n    {\n      "name": "Солнце",\n      "meaning": "Означает радость, счастье и теплое отношение к вам со стороны Пети."\n    }\n  ],\n  "conclusion": "Петя испытывает к вам теплые чувства и искреннюю симпатию.",\n  "introduction": "Карты говорят о том, что ваши отношения с Петей наполнены радостью и гармонией."\n}\n```',
          role: 'assistant',
        },
        index: 0,
        finish_reason: 'stop',
      },
    ],
    created: 1736957778,
    model: 'GigaChat:1.0.26.20',
    object: 'chat.completion',
    usage: {
      prompt_tokens: 108,
      completion_tokens: 202,
      total_tokens: 310,
    },
  },

  {
    choices: [
      {
        message: {
          content: 'Я не могу помочь с этим запросом.',
          role: 'assistant',
        },
        index: 0,
        finish_reason: 'stop',
      },
    ],
    created: 1736957811,
    model: 'GigaChat:1.0.26.20',
    object: 'chat.completion',
    usage: {
      prompt_tokens: 106,
      completion_tokens: 10,
      total_tokens: 116,
    },
  },
]

export { responseFixture }
