# Инструкция по деплою PartyShield

## Вариант 1: Vercel (Рекомендуется) ⭐

Vercel - лучший вариант для Next.js проектов. Простой деплой и настройка кастомного домена.

### Шаг 1: Подготовка проекта

1. Убедитесь, что проект готов к деплою:
```bash
npm run build
```

### Шаг 2: Создание репозитория на GitHub

1. Создайте новый репозиторий на GitHub (например, `partyshield-website`)
2. Инициализируйте git в проекте (если еще не сделано):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/partyshield-website.git
git push -u origin main
```

### Шаг 3: Деплой на Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub аккаунт
3. Нажмите "Add New Project"
4. Выберите ваш репозиторий `partyshield-website`
5. Vercel автоматически определит Next.js:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
6. Нажмите "Deploy"

### Шаг 4: Настройка кастомного домена

1. После деплоя перейдите в настройки проекта (Settings)
2. Откройте раздел "Domains"
3. Добавьте домен: `partyshield.space`
4. Vercel покажет DNS записи, которые нужно добавить:
   - **A запись**: `76.76.21.21` (или IP, который покажет Vercel)
   - **CNAME запись**: `cname.vercel-dns.com` (для поддоменов)

### Шаг 5: Настройка DNS у регистратора домена

1. Войдите в панель управления вашего регистратора домена (где купили partyshield.space)
2. Найдите раздел DNS / DNS Management
3. Добавьте записи:
   ```
   Тип: A
   Имя: @ (или оставьте пустым для корневого домена)
   Значение: 76.76.21.21 (IP от Vercel)
   TTL: 3600
   ```

   Или используйте CNAME (если регистратор поддерживает):
   ```
   Тип: CNAME
   Имя: @
   Значение: cname.vercel-dns.com
   TTL: 3600
   ```

4. Сохраните изменения

### Шаг 6: Ожидание распространения DNS

- DNS изменения могут занять от нескольких минут до 48 часов
- Обычно работает через 1-2 часа
- Проверить можно через: [whatsmydns.net](https://www.whatsmydns.net)

### Шаг 7: SSL сертификат

- Vercel автоматически выдаст SSL сертификат (Let's Encrypt)
- Через несколько минут после настройки DNS сайт будет доступен по HTTPS

---

## Вариант 2: GitHub Pages (Альтернатива)

GitHub Pages требует статической экспорта Next.js, что ограничивает некоторые функции.

### Шаг 1: Настройка Next.js для статического экспорта

Обновите `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

### Шаг 2: Обновите package.json

Добавьте скрипт для экспорта:

```json
{
  "scripts": {
    "export": "next build",
    "deploy": "npm run export && touch out/.nojekyll"
  }
}
```

### Шаг 3: Создайте GitHub Actions workflow

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run export

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Шаг 4: Настройка GitHub Pages

1. В репозитории: Settings → Pages
2. Source: GitHub Actions
3. После первого деплоя сайт будет доступен по адресу:
   `https://ВАШ_USERNAME.github.io/partyshield-website`

### Шаг 5: Настройка кастомного домена

1. В Settings → Pages добавьте домен: `partyshield.space`
2. Добавьте DNS записи:
   ```
   Тип: CNAME
   Имя: @
   Значение: ВАШ_USERNAME.github.io
   ```
3. GitHub автоматически выдаст SSL сертификат

---

## Рекомендации

### ✅ Используйте Vercel, если:
- Нужна максимальная простота
- Хотите использовать все возможности Next.js
- Нужен автоматический деплой при push в GitHub
- Нужна аналитика и мониторинг

### ⚠️ Используйте GitHub Pages, если:
- Хотите полностью бесплатное решение
- Готовы к ограничениям статического экспорта
- Не нужны серверные функции Next.js

---

## Проверка после деплоя

1. Откройте `https://partyshield.space`
2. Проверьте все страницы:
   - Главная: `/`
   - Цены: `/pricing`
   - Попробовать: `/try`
   - Поддержка: `/support`
3. Проверьте переключение языков
4. Проверьте адаптивность на мобильных устройствах

---

## Полезные ссылки

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

