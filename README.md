# Проект Timeline (срок выполнения 1,5 - 2 дня)

Вы можете опробовать проект по [ссылке](https://timeline-project-pi.vercel.app/)

Этот проект представляет собой веб-приложение для визуализации исторических событий через интерактивную временную шкалу. В проекте используется React и различные библиотеки для обеспечения увлекательного пользовательского опыта.

### Каталоги и файлы

- **dist/**: Директория, в которой будут генерироваться файлы для продакшн-сборки.
- **node_modules/**: Директория, содержащая зависимости проекта.
- **src/**: Исходные файлы проекта.
  - **assets/**: Директория для статических ресурсов, таких как изображения, шрифты и т.д.
  - **components/**: Компоненты React.
  - **constants/**: Константы и статические данные.
  - **pages/**: Компоненты страниц.
  - **styles/**: Глобальные стили.

### Конфигурационные файлы

- **.gitignore**: Определяет файлы и каталоги, которые должны игнорироваться Git.
- **package-lock.json**: Описывает точное дерево зависимостей, которое было сгенерировано.
- **package.json**: Список зависимостей проекта и скриптов.
- **tsconfig.json**: Конфигурационный файл TypeScript.
- **webpack.config.js**: Конфигурационный файл для Webpack.

## Установка и настройка

1. **Клонировать репозиторий:**

   ```sh
   git clone https://github.com/WoobotGJR/timeline-project.git
   cd timeline-project
   ```

2. **Установить зависимости:**

   ```sh
   npm install
   ```

3. **Запустить сервер разработки:**

   ```sh
   npm start
   ```

4. **Собрать проект для продакшна:**
   ```sh
   npm run build
   ```

## Использование

Этот проект предоставляет визуализацию временной шкалы исторических событий. Переходите между различными категориями событий с помощью предоставленных элементов управления.

### Пример структуры данных

Пример структуры данных, используемой для рендеринга событий временной шкалы:

```ts
export const renderData = [
  {
    title: 'Наука',
    details: [
      {
        year: '2008',
        info: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      // More details...
    ],
  },
  // More categories...
];
```

## Обзор компонентов

### `CustomSwiper`

Этот компонент интегрирует Swiper.js для создания пользовательского слайдера.

### `TimelineNavigation`

Управляет навигацией между различными разделами временной шкалы.

### `TimelineYears`

Отображает года на временной шкале.

### `ArrowButton`

Повторно используемый компонент кнопки со стрелкой, используемый для навигации.

## Стили

Стили написаны на SCSS и находятся в директории `styles`. Стили, специфичные для компонентов, расположены внутри директорий компонентов.
