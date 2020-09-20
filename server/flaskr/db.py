
import mysql.connector
import sys
import boto3
import os

import click
from flask import current_app, g
from flask.cli import with_appcontext
import flaskr.database_interface as interface

def get_db_controler():
  controler = interface.DatabaseControler()
  db = controler.connection

  if 'db' not in g:
    g.db = db
    g.controler = controler

  return g.db


def close_db(e=None):
  controler = g.pop('controler', None)

  if controler is not None:
    controler.close()


def init_app(app):
  app.teardown_appcontext(close_db)

