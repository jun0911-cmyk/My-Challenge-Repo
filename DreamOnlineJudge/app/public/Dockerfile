FROM python:3.8-slim
RUN apt update
COPY . /app
COPY flag.txt /app/flag
WORKDIR /app
RUN pip3 install -r requirements.txt
EXPOSE 8000
CMD ["python3", "server.py"]