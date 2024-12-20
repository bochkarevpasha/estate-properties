# Описание проекта

## Контекст
Вам необходимо будет разработать приложение для управления списком объектов недвижимости, выставленных на продажу.

## Структура проекта
Проект состоит из Backend сервера, реализующего API для нашего Frontend приложения. Frontend приложение предлагается развернуть самостоятельно используя Vue3. 

- **applications/frontend**: frontend приложение, вы будете работать с этим проектом
- **applications/server**: простой backend сервер для нашего приложения

## Запуск проекта и системные требования
Для работы с проектом рекомендуется иметь Node.js версии не ниже 18 и pnpm версии не ниже 8.6

### Запуск сервера
```shell
pnpm start:server
```
После запуска сервера, вам будет доступно api по адресу http://localhost:3000/estates с тремя query параметрами:
```
type GetEstatesParams = {
  city?: string;
  type?: string;
  search?: string;
};
```

### Форматирование
```shell
pnpm format
```

> **_NOTE:_** В корневом package.json файле специально не добавлялся скрипт для запуска frontend приложения.
> В ходе работы над проектом, мы предлагаем вам использовать наиболее удобный для вас вариант запуска и сборки.

# Задание

> **_NOTE:_** В ходе выполнения задания, нам не важен внешний вид приложения, так что рекомендуем не тратить много времени
> на написание стилей в проекте, из CSS стилей важнее всего разметка элементов на странице, а не их внешний вид.

## Шаг 1. Инициализация проекта
На этом шаге вам нужно инициализировать проект.

> **_NOTE:_** Пожалуйста, НЕ добавляйте в проект никаких библиотек компонентов. Все компоненты мы будем создавать сами,
> с минимальной стилизацией (нам важно увидеть, как вы будете строить компоненты архитектурно и как будете использовать их в дальнейшем).

**На что важно обратить внимание:**
- Подумайте, как вы будете осуществлять сборку проекта
- Добавьте все необходимые для работы инструменты
- Подумайте о структуре проекта

**Что не нужно делать:**
- Добавлять библиотеки компонентов (см пояснение выше)

## Шаг 2. Настройка API клиента
Дальше, мы предлагаем заняться установкой зависимостей и конфигурацией клиента для работы с API.

**На что важно обратить внимание:**
- Подумайте, где вы будете хранить всю логику взаимодействия с backend
- Выберите подходящую библиотеку для работы с api
- Добавить клиент в проект

> **_NOTE:_** Очень хорошо если вы на этом шаге также добавите кодогенерацию для API вызовов

## Шаг 3. Добавление страницы списка объявлений и запрос данных
Теперь мы можем переходить к добавлению бизнес-логики в проект. Нам нужно добавить страницу со списком всех объектов.

**Что нужно сделать** 
- Добавить страницу списка объектов, доступную по адресу (`/estates`)
- Сделать так, чтобы эта страница отображалась при открытии приложения (пожалуйста, сделайте это без изменения адреса страницы)
- Добавить запрос на получение списка объектов с backend (`estates query`)
- Добавить вызов получения данных при открытии страницы списка объектов

> **_NOTE:_** Мы советуем не думать об отображении данных прямо сейчас, а сделать это на следующем шаге, после того, 
> как получение данных будет готово

## Шаг 4. Отображение таблицы объектов
Теперь, нам нужно отобразить полученные данные в виде таблицы.

**Что нужно сделать** 
- Отобразить данные в виде таблицы, со след. колонками
  - Адрес
  - Город
  - Тип (_варианты значений: Квартира, Дом, Коммерческая недвижимость_)
  - Цена

**На что обратить внимание**
- Нам не так важен внешний вид таблицы, как ее структура, поэтому, мы предлагаем не тратить много времени на написание стилей
- Постраничное отображение записей опущено специально, для простоты.

## Шаг 5. Фильтрация по городу
После добавления таблицы, нам нужно добавить возможность фильтрации и поиска (поиск реализован для частичного совпадения адреса)

**Что нужно сделать** 
- Добавить фильтрацию объектов по городу (фильтрация работает по принципу полного совпадения)
  - В колонке "Город" добавить кнопку фильтрации (будет отображена в каждой строке)
    - Внешний вид кнопки остается на ваше усмотрение, например, можно использовать иконку или emoji (⚙️)
  - По клику на кнопку, нам нужно выполнить новый запрос на backend, используя выбранное значение в качестве фильтра (см `estates query`)
  - Обновить данные на странице
  - Добавить кнопку очистки фильтров (достаточно добавить простую кнопку очистить, разместив ее над таблицей)

## Шаг 6. Поиск по адресу
Последним шагом, выполним поиск по адресу

**Что нужно сделать** 
- Добавить текстовый Input над таблицей, рядом с кнопкой очистки
- При вводе текста в Input, нужно сделать запрос на backend, используя это значение в качестве параметра `search` в запросе `estates`
- Если при вводе в строку поиска, на странице уже есть выбранные фильтры, их надо очистить
- Обновить данные на странице 
- Очистка поиска по нажатию кнопку очистки фильтров
  - Обновить логику кнопки, чтобы происходила очистка не только фильтров, но и поиска
- Выделить найденное совпадение адреса цветом:
  - Поиск по адресу работает по частичному совпадению (напр. поисковый запрос **"ос"** вернет _**"Московское шоссе"**_ и _**"1-я Останкинская улица"**_)
  - Мы хотим подсветить для пользователя найденное совпадение, выделив их желтым цветом (в примере выше выделение будет работать по принципу: "М**ос**ковское шоссе", "1-я **Ос**танкинская улица"")
  - Поиск не учитывает заглавные буквы (например, "1-я Останкинская улица" из примера выше)ё
  - Для выделения букв используйте background желтого цвета

