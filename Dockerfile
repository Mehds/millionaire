FROM python:3.8-slim-buster
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
ENV FLASK_APP=index
RUN pip install python-dotenv
EXPOSE 5000/tcp
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
