import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// если вы добавляете новый перевод, пожалуйста, используйте PartialLocaleType вместо LocaleType

const isApp = !!getClientConfig()?.isApp;
const ru: LocaleType = {
  WIP: "Скоро...",
  Error: {
    Unauthorized: isApp
      ? "Неверный ключ API, пожалуйста, проверьте его на странице [Настройки](/#/settings)."
      : "Несанкционированный доступ, пожалуйста, введите код доступа на странице [auth](/#/auth) или введите ваш ключ API OpenAI.",
  },
  Auth: {
    Title: "Необходим код доступа",
    Tips: "Пожалуйста, введите код доступа ниже",
    SubTips: "Или введите ваш ключ API OpenAI",
    Input: "код доступа",
    Confirm: "Подтвердить",
    Later: "Позже",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} сообщений`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} сообщений`,
    EditMessage: {
      Title: "Редактировать все сообщения",
      Topic: {
        Title: "Тема",
        SubTitle: "Изменить текущую тему",
      },
    },
    Actions: {
      ChatList: "Перейти к списку чатов",
      CompressedHistory: "Сжатая история предыдущих сообщений",
      Export: "Экспортировать все сообщения в формате Markdown",
      Copy: "Копировать",
      Stop: "Остановить",
      Retry: "Повторить",
      Pin: "Закрепить",
      PinToastContent: "Закреплено 1 сообщение для контекстных подсказок",
      PinToastAction: "Просмотр",
      Delete: "Удалить",
      Edit: "Редактировать",
    },
    Commands: {
      new: "Начать новый чат",
      newm: "Начать новый чат с маской",
      next: "Следующий чат",
      prev: "Предыдущий чат",
      clear: "Очистить контекст",
      del: "Удалить чат",
    },
    InputActions: {
      Stop: "Остановить",
      ToBottom: "К последнему",
      Theme: {
        auto: "Авто",
        light: "Светлая тема",
        dark: "Темная тема",
      },
      Prompt: "Подсказки",
      Masks: "Маски",
      Clear: "Очистить контекст",
      Settings: "Настройки",
      EnablePlugins: "Включить плагины",
      DisablePlugins: "Отключить плагины",
    },
    Rename: "Переименовать чат",
    Typing: "Печатает...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} для отправки`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для переноса строки";
      }
      return inputHints + ", / для поиска подсказок, : для использования команд";
    },
    Send: "Отправить",
    Config: {
      Reset: "Сбросить настройки",
      SaveAs: "Сохранить как маску",
    },
    IsContext: "Контекстная подсказка",
  },
  Export: {
    Title: "Экспорт сообщений",
    Copy: "Копировать все",
    Download: "Скачать",
    MessageFromYou: "Сообщение от вас",
    MessageFromChatGPT: "Сообщение от ChatGPT",
    Share: "Поделиться в ShareGPT",
    Format: {
      Title: "Формат экспорта",
      SubTitle: "Markdown или изображение PNG",
    },
    IncludeContext: {
      Title: "Включая контекст",
      SubTitle: "Экспортировать контекстные подсказки в маске или нет",
    },
    Steps: {
      Select: "Выбрать",
      Preview: "Предварительный просмотр",
    },
    Image: {
      Toast: "Захват изображения...",
      Modal: "Удерживайте нажатой кнопку или щелкните правой кнопкой мыши, чтобы сохранить изображение",
    },
  },
  Select: {
    Search: "Поиск",
    All: "Выбрать все",
    Latest: "Выбрать последние",
    Clear: "Очистить",
  },
  Memory: {
    Title: "Память",
    EmptyContent: "Пока ничего нет.",
    Send: "Отправить память",
    Copy: "Копировать память",
    Reset: "Сбросить сессию",
    ResetConfirm:
      "Сброс приведет к удалению текущей истории переписки и исторической памяти. Вы уверены, что хотите сбросить?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Подтвердите удаление выбранного разговора?",
    DeleteToast: "Чат удален",
    Revert: "Отменить",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Все настройки",
    Danger: {
      Reset: {
        Title: "Сбросить все настройки",
        SubTitle: "Сбросить все настройки на значения по умолчанию",
        Action: "Сбросить",
        Confirm: "Подтвердите сброс всех настроек на значения по умолчанию?",
      },
      Clear: {
        Title: "Очистить все данные",
        SubTitle: "Очистить все сообщения и настройки",
        Action: "Очистить",
        Confirm: "Подтвердите очистку всех сообщений и настроек?",
      },
    },
    Lang: {
      Name: "Language", // ВНИМАНИЕ: если вы хотите добавить новый перевод, пожалуйста, не переводите это значение, оставьте его как `Language`
      All: "Все языки",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер шрифта",
      SubTitle: "Настроить размер шрифта в чате",
    },
    InjectSystemPrompts: {
      Title: "Вставить системные подсказки",
      SubTitle: "Вставить глобальную системную подсказку для каждого запроса",
    },
    InputTemplate: {
      Title: "Шаблон ввода",
      SubTitle: "Последнее сообщение будет заполнено этим шаблоном",
    },

    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последняя версия",
      CheckUpdate: "Проверить обновление",
      IsChecking: "Проверка обновлений...",
      FoundUpdate: (x: string) => `Обнаружена новая версия: ${x}`,
      GoToUpdate: "Обновить",
    },
    SendKey: "Кнопки отправки",
    Theme: "Тема",
    TightBorder: "Узкая граница",
    SendPreviewBubble: {
      Title: "Предварительный просмотр сообщения",
      SubTitle: "Предварительный просмотр markdown в облачке",
    },
    AutoGenerateTitle: {
      Title: "Автоматическое создание заголовка",
      SubTitle: "Создавайте подходящий заголовок на основе содержимого разговора",
    },
    Sync: {
      CloudState: "Последнее обновление",
      NotSyncYet: "Еще не синхронизировано",
      Success: "Синхронизация успешна",
      Fail: "Синхронизация не удалась",

      Config: {
        Modal: {
          Title: "Синхронизация конфигурации",
          Check: "Проверить соединение",
        },
        SyncType: {
          Title: "Тип синхронизации",
          SubTitle: "Выберите предпочитаемую службу синхронизации",
        },
        Proxy: {
          Title: "Включить прокси CORS",
          SubTitle: "Включить прокси для обхода ограничений между источниками",
        },
        ProxyUrl: {
          Title: "Конечная точка прокси",
          SubTitle:
            "Применяется только к встроенному прокси CORS для этого проекта",
        },

        WebDav: {
          Endpoint: "Конечная точка WebDAV",
          UserName: "Имя пользователя",
          Password: "Пароль",
        },

        UpStash: {
          Endpoint: "URL Redis REST UpStash",
          UserName: "Имя резервной копии",
          Password: "Токен Redis REST UpStash",
        },
      },

      LocalState: "Локальные данные",
      Overview: (overview: any) => {
        return `${overview.chat} чатов, ${overview.message} сообщений, ${overview.prompt} подсказок, ${overview.mask} масок`;
      },
      ImportFailed: "Не удалось импортировать из файла",
    },
    Mask: {
      Splash: {
        Title: "Заставка маски",
        SubTitle: "Показывать заставку маски перед началом нового чата",
      },
      Builtin: {
        Title: "Скрыть встроенные маски",
        SubTitle: "Скрыть встроенные маски в списке масок",
      },
    },
    Prompt: {
      Disable: {
        Title: "Отключить автодополнение",
        SubTitle: "Введите /, чтобы вызвать автодополнение",
      },
      List: "Список подсказок",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} встроенных, ${custom} пользовательских`,
      Edit: "Редактировать",
      Modal: {
        Title: "Список подсказок",
        Add: "Добавить",
        Search: "Поиск подсказок",
      },
      EditModal: {
        Title: "Редактировать подсказку",
      },
    },
    HistoryCount: {
      Title: "Количество прикрепленных сообщений",
      SubTitle: "Количество отправленных сообщений, прикрепленных к каждому запросу",
    },
    CompressThreshold: {
      Title: "Порог сжатия истории",
      SubTitle:
        "Будет сжимать, если длина несжатых сообщений превышает это значение",
    },
    Token: {
      Title: "Ключ API",
      SubTitle: "Используйте свой ключ, чтобы игнорировать ограничение кода доступа",
      Placeholder: "Ключ API OpenAI",
    },
    Usage: {
      Title: "Баланс аккаунта",
      SubTitle(used: any, total: any) {
        return `Использовано в этом месяце ${used}, подписка ${total}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверить",
      NoAccess: "Введите ключ API, чтобы проверить баланс",
    },
    AccessCode: {
      Title: "Код доступа",
      SubTitle: "Включен контроль доступа",
      Placeholder: "Необходим код доступа",
    },
    Endpoint: {
      Title: "Конечная точка",
      SubTitle: "Пользовательская конечная точка должна начинаться с http(s)://",
    },
    CustomModel: {
      Title: "Пользовательские модели",
      SubTitle: "Добавить дополнительные варианты моделей, разделяя запятыми",
    },
    Model: "Модель",
    Temperature: {
      Title: "Температура",
      SubTitle: "Большее значение делает вывод более случайным",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Не изменяйте это значение вместе с температурой",
    },
    MaxTokens: {
      Title: "Максимальное количество токенов",
      SubTitle: "Максимальная длина входных и сгенерированных токенов",
    },
    PresencePenalty: {
      Title: "Штраф за присутствие",
      SubTitle:
        "Большее значение увеличивает вероятность обсуждения новых тем",
    },
    FrequencyPenalty: {
      Title: "Штраф за частоту",
      SubTitle:
        "Большее значение уменьшает вероятность повторения одной и той же фразы",
    },
    Plugin: {
      Enable: {
        Title: "Включить плагины",
        SubTitle: "Активация вызовов плагинов",
      },
      MaxIteration: {
        Title: "Максимальное количество итераций",
        SubTitle: "Максимальное количество итераций плагина",
      },
      ReturnIntermediateStep: {
        Title: "Возвращать промежуточные шаги",
        SubTitle: "Возвращать промежуточные шаги",
      },
    },
  },
  Store: {
    DefaultTopic: "Новый разговор",
    BotHello: "Здравствуйте! Чем я могу вам помочь сегодня?",
    Error: "Что-то пошло не так, пожалуйста, попробуйте позже.",
    Prompt: {
      History: (content: string) =>
        "Это краткое содержание истории чата в качестве резюме: " + content,
      Topic:
        "Пожалуйста, создайте заголовок из четырех-пяти слов, кратко описывающий наш разговор без вводных слов, знаков препинания, кавычек, точек, символов или дополнительного текста. Удалите кавычки.",
      Summarize:
        "Кратко опишите обсуждение в 200 словах или меньше для использования в будущем контексте.",
    },
  },
  Copy: {
    Success: "Скопировано в буфер обмена",
    Failed: "Не удалось скопировать, пожалуйста, предоставьте разрешение на доступ к буферу обмена",
  },
  Download: {
    Success: "Содержимое загружено в вашу директорию.",
    Failed: "Не удалось загрузить.",
  },
  Context: {
    Toast: (x: any) => `С ${x} контекстными подсказками`,
    Edit: "Текущие настройки чата",
    Add: "Добавить подсказку",
    Clear: "Очистить контекст",
    Revert: "Вернуть",
  },
  Plugin: {
    Name: "Плагин",
    Page: {
      Title: "Шаблон плагина",
      SubTitle: (count: number) => `${count} шаблонов плагинов`,
      Search: "Поиск шаблонов",
      Create: "Создать",
    },
    Item: {
      View: "Просмотр",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердите удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактировать шаблон плагина ${readonly ? "(только для чтения)" : ""}`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
  },
  FineTuned: {
    Sysmessage: "Вы - помощник, который",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон подсказки",
      SubTitle: (count: number) => `${count} шаблонов подсказок`,
      Search: "Поиск шаблонов",
      Create: "Создать",
    },
    Item: {
      Info: (count: number) => `${count} подсказок`,
      Chat: "Чат",
      View: "Просмотр",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердите удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактировать шаблон подсказки ${readonly ? "(только для чтения)" : ""}`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
    Config: {
      Avatar: "Аватар бота",
      Name: "Имя бота",
      Sync: {
        Title: "Использовать глобальную конфигурацию",
        SubTitle: "Использовать глобальную конфигурацию в этом чате",
        Confirm: "Подтвердите замену пользовательской конфигурации глобальной конфигурацией?",
      },
      HideContext: {
        Title: "Скрыть контекстные подсказки",
        SubTitle: "Не показывать контекстные подсказки в чате",
      },
      Share: {
        Title: "Поделиться этой маской",
        SubTitle: "Создать ссылку на эту маску",
        Action: "Скопировать ссылку",
      },
    },
  },
  NewChat: {
    Return: "Вернуться",
    Skip: "Пустой",
    Title: "Выберите маску",
    SubTitle: "Используйте шаблон чата",
    More: "Больше",
    NotShow: "Не показывать снова",
    ConfirmNoShow: "Отключить страницу? Вы можете включить его позже в настройках.",
  },

  UI: {
    Confirm: "Подтвердить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Create: "Создать",
    Edit: "Редактировать",
    Export: "Экспорт",
    Import: "Импорт",
    Sync: "Синхронизация",
    Config: "Конфигурация",
  },
  Exporter: {
    Model: "Модель",
    Messages: "Сообщения",
    Topic: "Тема",
    Time: "Время",
  },

  URLCommand: {
    Code: "Обнаружен код доступа из URL, подтвердите применение?",
    Settings: "Обнаружены настройки из URL, подтвердите применение?",
  },
};

export default ru;
