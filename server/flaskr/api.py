
import boto3

from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, make_response
)
from werkzeug.exceptions import abort

from flaskr.db import get_db_controler

bp = Blueprint('recommendation', __name__)

@bp.route('/recommendation', methods=('GET', 'POST'))
def get_book_recommendation():
  if request.method == 'POST':
    user_ID = request.form('User_Id')

    p = boto3.client('personalize-runtime')

    response = p.get_recommendations(
      campaignArn = 'arn:aws:personalize:us-east-2:529652464554:campaign/generated-data-campaign',
      userId = user_ID)

    return make_response(response['itemList'])

  p = boto3.client('personalize-runtime')

  response = p.get_recommendations(
     campaignArn = 'arn:aws:personalize:us-east-2:529652464554:campaign/generated-data-campaign',
      userId = '9993994435782955')

  return make_response(response['itemList'])

@bp.route('/book_posted_by', methods=('GET', 'POST'))
def get_books_posted_by_user():
  if request.method == 'POST':
    user_ID = request.form('User_Id')

    db = get_db()
    cursor = db.cursor()

    cursor.execute(
      "SELECT * FROM BookTable WHERE owner_ID = {}".format(user_ID)
    )

    result = cursor.fetchall()

    return make_response(result)
  
  raise Exception()


@bp.route('/get_image', methods=('GET', 'POST'))
def get_image():
  if request.method == 'POST':
    user_ID = request.form('User_Id')

    db = get_db()

    cursor = db.cursor()

    cursor.execute(
      "SELECT userImage from UserTable where USER_ID = {}".format(user_ID)
    )

    result = cursor.fetchall()

    return make_response(result)

  raise Exception()