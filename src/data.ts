import type ITask from "./context/task-context";

const cards: ITask[] = [
  {
    id: "1",
    heading: "Исправить ошибку при сохранении настроек пользователя",
    description:
      "При попытке сохранить измененные настройки пользователя происходит сбой приложения.",
    category: "Bug",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "2",
    heading: "Добавить темную тему",
    description:
      "Разработать и реализовать темную тему для пользовательского интерфейса.",
    category: "Feature",
    priority: "Medium",
    status: "To Do",
  },
  {
    id: "3",
    heading: "Обновить документацию API для аутентификации",
    description:
      "Актуализировать раздел документации, касающийся эндпоинтов аутентификации и авторизации.",
    category: "Documentation",
    priority: "Low",
    status: "Done",
  },
  {
    id: "4",
    heading: "Рефакторинг модуля обработки изображений",
    description:
      "Оптимизировать код и улучшить читаемость модуля, отвечающего за загрузку и обработку изображений.",
    category: "Refactor",
    priority: "Medium",
    status: "To Do",
  },
  {
    id: "5",
    heading: "Написать юнит-тесты для компонента корзины",
    description:
      "Разработать набор юнит-тестов для компонента корзины покупок, чтобы обеспечить его корректную работу.",
    category: "Test",
    priority: "High",
    status: "In Progress",
  },
];

export default cards;
