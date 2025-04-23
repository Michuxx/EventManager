# EventManager

Event Manager App in React and Python - Django

Serwer: Postgres 17

Jak włączyć aplikacje:

1. Musisz być w folderze "EventManager"

2. Uzyj komendy "pip install -r requirements.txt", by zainstalować potrzebne bilbioteki

3. wpisz "cd .\eventManagerBackend\", skopiuj plik ".env_dist" w to samo miejsce, zmień nazwę na ".env" oraz wypełnij tak, by była kompatybilna z twoim serwerem lokalnym postgres

4. utwórz migracje wpisując "python manage.py makemigrations", a potem "python manage.py migrate"

5. Utwórz superusera, by otworzyć admina na django poleceniem "python manage.py createsuperuser"
