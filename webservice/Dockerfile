from python:3.6.4-slim-jessie
RUN pip install Flask
RUN pip install flask_cors
COPY server.py .
COPY blockchain.py .
EXPOSE 5000
CMD ["python", "./server.py"]