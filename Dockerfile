# pull official base image
FROM python:3.10-slim

RUN apt-get update && \
    apt-get install -y python3-dev build-essential && \
    rm -rf /var/lib/apt/lists/*

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV VIRTUAL_ENV /opt/venv

# pip requirements
RUN pip install --upgrade pip && \
    pip install virtualenv && \
    virtualenv $VIRTUAL_ENV

ENV PATH="$VIRTUAL_ENV/bin:$PATH"

WORKDIR /srv/app

ADD ./requirements.txt /srv/app/requirements.txt
RUN pip install -r requirements.txt

COPY . /srv/app
