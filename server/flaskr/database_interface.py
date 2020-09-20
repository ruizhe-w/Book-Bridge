import mysql.connector
import os

def connect_to_database():
    ENDPOINT="book-bridge-databse.cp2jpontfd1s.us-east-2.rds.amazonaws.com"
    PORT="3306"
    USR="admin"
    REGION="us-east-2a"
    DBNAME='keydatabase'
    os.environ['LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN'] = '1'

    #gets the credentials from .aws/credentials
    session = boto3.Session(profile_name='default')
    client = boto3.client('rds')

    token = client.generate_db_auth_token(DBHostname=ENDPOINT, Port=PORT, DBUsername=USR, Region=REGION)
    conn = None
    try:
        conn =  mysql.connector.connect(host=ENDPOINT, user=USR, passwd='12345678', port=PORT, database=DBNAME)
        '''
        cur = conn.cursor()
        cur.execute("""SELECT now()""")
        query_results = cur.fetchall()
        '''
    except Exception as e:
        print("Database connection failed due to {}".format(e))         
        exit() 

    return conn

class DatabaseControler:
  def __init__(self):
    self.connection = connect_to_database()

  def execute(commd):
    cursor = self.connection.cursor()
    cursor.execute(commd)

  def close():
    self.connection.close()

  def insert_user(self, row):
    insert_query = """INSERT INTO UserTable (User_ID, gender, major, name, userImage, credit) 
                           VALUES (%s, %s, %s, %s, %s, %s) """
    cursor = None
    flag = True
    try:
      cursor = self.connection.cursor()

      cursor.execute(insert_query, row)
      self.connection.commit()
    except:
      print("insert row failed")
      flag = False
    finally:
      if cursor is not None:
        cursor.close()

    return flag

  def insert_user_rows(self, rows):
    insert_query = """INSERT INTO UserTable (User_ID, gender, major, name, userImage, credit) 
                           VALUES (%s, %s, %s, %s, %s, %s) """

    cursor = None
    flag = True
    try:
      cursor = self.connection.cursor()

      cursor.executemany(insert_query, rows)
      self.connection.commit()
    except Exception as error:
      print("Failed to insert record into UserTable {}".format(error))
      flag = False
    finally:
      if cursor is not None:
        cursor.close()

    return flag
  
  def insert_book(self, row):
    insert_query = """INSERT INTO BookTable (ITEM_ID, ISBN, owner_ID, bookImage, bookName, bookDescription, bookPrice) 
                           VALUES (%s, %s, %s, %s, %s, %s, %s) """
    cursor = None
    flag = True
    try:
      cursor = self.connection.cursor()

      cursor.execute(insert_query, row)
      self.connection.commit()
    except:
      print("insert row failed")
      flag = False
    finally:
      if cursor is not None:
        cursor.close()
    
    return flag
  
  def insert_book_rows(self, rows):
    insert_query = """INSERT INTO BookTable (ITEM_ID, ISBN, owner_ID, bookImage, bookName, bookDescription, bookPrice) 
                           VALUES (%s, %s, %s, %s, %s, %s, %s) """

    cursor = None
    flag = True
    try:
      cursor = self.connection.cursor()

      cursor.executemany(insert_query, rows)
      self.connection.commit()
    except Exception as error:
      print("Failed to insert record into BookTable {}".format(error))
      flag = False
    finally:
      if cursor is not None:
        cursor.close()
      
    return flag

  def insert_interaction(self, row):
    insert_query = """INSERT INTO InteractionsTable (USER_ID, ITEM_ID, TIMESTAMP) 
                           VALUES (%s, %s, %s) """
    cursor = None
    flag = True
    try:
      cursor = self.connection.cursor()

      cursor.execute(insert_query, row)
      self.connection.commit()
    except Exception as error:
      print("Failed to insert record into InteractionsTable {}".format(error))
      flag = False
    finally:
      if cursor is not None:
        cursor.close()
      
    return flag
  
  def insert_interaction_rows(self, rows):
    insert_query = """INSERT INTO InteractionsTable (USER_ID, ITEM_ID, TIMESTAMP) 
                           VALUES (%s, %s, %s) """
    cursor = None
    flag = True
    try:
      cursor = self.connection.cursor()

      cursor.executemany(insert_query, rows)
      self.connection.commit()
    except Exception as error:
      print("Failed to insert record into InteractionsTable {}".format(error))
      flag = False
    finally:
      if cursor is not None:
        cursor.close()
    
    return flag

