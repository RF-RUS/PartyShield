# Деплой PartyShield на cp.sweb.ru

## Архитектура деплоя

PartyShield — статический сайт (Next.js `output: 'export'` + `trailingSlash: true`). Все страницы генерируются как директории с `index.html` (например, `pricing/index.html`). Apache автоматически отдаёт `index.html` при запросе `/pricing/`.

## Требования

- Node.js 20+ (для сборки)
- Доступ к cp.sweb.ru через FTP или файловый менеджер панели

## Шаг 1: Сборка

```bash
npm ci
npm run build
```

После сборки статические файлы появятся в папке `out/`.

## Шаг 2: Подготовка к загрузке

Из папки `out/` нужно загрузить **всё содержимое** (не саму папку `out/`, а её внутренности):

```
out/
├── index.html            → public_html/index.html
├── 404.html              → public_html/404.html
├── pricing/index.html    → public_html/pricing/index.html
├── try/index.html        → public_html/try/index.html
├── support/index.html    → public_html/support/index.html
├── privacy/index.html    → public_html/privacy/index.html
├── refer/index.html      → public_html/refer/index.html
├── _next/                → public_html/_next/
└── .htaccess             → public_html/.htaccess
```

## Шаг 3: Очистка public_html

Перед загрузкой новых файлов **удалите** всё содержимое `public_html`:

```bash
# ВНИМАНИЕ: это удалит всё в public_html!
rm -rf /home/m/mirbudmail/partyshield_space/public_html/*
```

Что **нельзя** удалять:
- Папку `.well-known/` — нужна для SSL-верификации
- Папку `cgi-bin/` — если она есть и используется хостингом

## Шаг 4: Загрузка

### Через FTP (FileZilla и т.д.)

1. Подключитесь к cp.sweb.ru по FTP
2. Перейдите в `/public_html/`
3. Удалите старое содержимое
4. Загрузите содержимое папки `out/`

### Через файловый менеджер панели

1. Откройте файловый менеджер в панели cp.sweb.ru
2. Перейдите в `public_html`
3. Удалите старые файлы
4. Загрузите содержимое `out/`

## Шаг 5: Проверка

1. Откройте `https://partyshield.space`
2. Проверьте все страницы: `/`, `/pricing/`, `/try/`, `/support/`, `/privacy/`, `/refer/`
3. Проверьте переключение языков (RU/EN)
4. Проверьте мобильную адаптивность
5. Проверьте SSL-сертификат

## Структура public_html после деплоя

```
public_html/
├── .htaccess
├── index.html
├── 404.html
├── pricing/
│   └── index.html
├── try/
│   └── index.html
├── support/
│   └── index.html
├── privacy/
│   └── index.html
├── refer/
│   └── index.html
└── _next/
    └── static/
```

## Частые ошибки

### Белый экран / 404
- Убедитесь, что файлы загружены в `public_html/`, а не в подпапку
- Проверьте, что `.htaccess` загружен
- Проверьте, что папки маршрутов содержат `index.html`

### Стили не загружаются
- Убедитесь, что папка `_next/` загружена полностью
- Проверьте права доступа (644 для файлов, 755 для папок)

### Язык не переключается
- Язык сохраняется в localStorage + cookie
- При первом посещении язык определяется автоматически (RU по умолчанию)
- Если переключатель не работает — очистите кэш браузера
