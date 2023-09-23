FROM python:3.8-slim
RUN apt update
COPY . /app
WORKDIR /app
RUN pip3 install flask
RUN pip3 install pandas
EXPOSE 8000
CMD ["python3", "server.py"]