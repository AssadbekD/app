# Используем Python 3.9
FROM python:3.9-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы приложения
COPY app.py /app
COPY requirements.txt /app

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Указываем порт, который будет слушать Flask
EXPOSE 5000

# Запускаем приложение
CMD ["python", "app.py"]
