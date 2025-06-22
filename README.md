# EventManager

Event Manager App in React and Python - Django

Serwer: Postgres 17

Jak włączyć aplikacje:

1. Upewnij się, że możesz włączać projekty z reacta. Jeśli nie to zrób wedle poradnika https://www.youtube.com/watch?v=av5fmpgEJSU

2. Musisz być w folderze "EventManager"

3. Uzyj komendy "pip install -r requirements.txt", by zainstalować potrzebne bilbioteki

4. wpisz "cd .\eventManagerBackend\", skopiuj plik ".env_dist" w to samo miejsce, zmień nazwę skopiowanego pliku na ".env" oraz wypełnij tak, by była kompatybilna z twoim serwerem lokalnym postgres

5. Utwórz w aplikacji PgAdmin4 bazę danych (musi się zgadzać z DB_NAME w pliku .env)

6. utwórz migracje wpisując "python manage.py migrate"

7. Gdyby migracja nie stworzyłą tabeli - usuń folder migrations, następnie wpisz "python manage.py makemigrations myapp", a potem "python manage.py migrate"

8. uruchom server wpisując "python manage.py runserver"

9. na osobnym terminalu, wejdz do folderu "eventManagerFrontend" i wpisz komendę "npm install"

10. uruchom Frontend komendą "npm run dev"
