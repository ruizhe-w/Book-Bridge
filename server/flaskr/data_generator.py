import csv
import random
import database_interface as interface

random.seed(2)

gender = ['F','M','Other']
major = ['Physics','Math','ComputerSciences','Finance','Literature','Linguistics','History']
letters = 'qwertyuiopasdfghjklmnbvcxz'

def get_random_string(length):
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

def generate_user():
  rows = []
  userIDs = set()
  for i in range(1500):
    temp_ID = get_random_string(16)
    while temp_ID in userIDs:
      temp_ID = get_random_string(16)
    
    userIDs.add(temp_ID)
    temp_gender = random.choice(gender)
    temp_major = random.choice(major)
    temp_name = get_random_string(16)
    temp_userImage = 'noimage'
    temp_credit = 20.0

    row = (temp_ID, temp_gender, temp_major, temp_name, temp_userImage, temp_credit)
    rows.append(row)

  with open('./server/data/user.csv', 'w+', newline='') as csvfile:
    csvwriter = csv.writer(csvfile, delimiter=',')
    csvwriter.writerows(rows)

  return userIDs, rows


def generate_book(userIDs):
  rows = []
  bookIDs = set()

  for i in range(5000):
    temp_ID = ''.join([random.choice("0123456789") for i in range(16)])
    while temp_ID in bookIDs:
      temp_ID = ''.join([random.choice("0123456789") for i in range(16)])

    bookIDs.add(temp_ID)
    temp_ISBN = get_random_string(13)
    temp_owner_ID = random.sample(userIDs, 1)[0]
    temp_image = 'noimage'
    temp_bookName = 'noname'
    temp_book_description = 'nodescription'
    temp_book_price = round(random.uniform(15, 40), 2)

    row = (temp_ID, temp_ISBN, temp_owner_ID, temp_image, temp_bookName, temp_book_description, temp_book_price)
    rows.append(row)

  with open('./server/data/book.csv', 'w+', newline='') as csvfile:
    csvwriter = csv.writer(csvfile, delimiter=',')
    csvwriter.writerows(rows)
    
  return bookIDs, rows


def generate_interactions(userIDs, bookIDs):
  rows = []
  primary_keys = set()

  for i in range(1500):
    temp_userID = random.sample(userIDs, 1)[0]
    temp_bookID = random.sample(bookIDs, 1)[0]
    temp_time_stamp = int(''.join([random.choice("0123456789") for i in range(11)]))

    while (temp_userID, temp_bookID, temp_time_stamp) in primary_keys:
      temp_userID = random.sample(userIDs, 1)[0]
      temp_bookID = random.sample(bookIDs, 1)[0]
      temp_time_stamp = int(''.join([random.choice("0123456789") for i in range(11)]))

    primary_keys.add((temp_userID, temp_bookID, temp_time_stamp))

    row = (temp_userID, temp_bookID, temp_time_stamp)
    rows.append(row)

  with open('./server/data/interaction.csv', 'w+', newline='') as csvfile:
    csvwriter = csv.writer(csvfile, delimiter=',')
    csvwriter.writerows(rows)

    return primary_keys, rows

if __name__ == '__main__':
    userIDs, user_rows = generate_user()
    bookIDs, book_rows = generate_book(userIDs)

    interactions, interaction_rows = generate_interactions(userIDs, bookIDs)
    '''
    c = interface.DatabaseControler()
    c.insert_user_rows(user_rows)
    c.insert_book_rows(book_rows)
    c.insert_interaction_rows(interaction_rows)
    '''
