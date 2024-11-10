# Указываем начальный базовый образ
FROM node:16 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Этап продакшн
FROM nginx:alpine

# Удаляем стандартный конфиг Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем кастомный конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/dist /usr/share/nginx/html

# Expose порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]