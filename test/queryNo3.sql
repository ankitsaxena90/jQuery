mysql> select distinct t.content, t.user_id from tweets t, users u where t.user_id IN (select following_id from relationships where user_id = 1 ) or t.user_id =1 ;
+-------------------------------------------------+---------+
| content                                         | user_id |
+-------------------------------------------------+---------+
| My first ever tweet.                            |       1 |
| Test tweet.                                     |       2 |
| Hello there                                     |       2 |
| lorem ipsum                                     |       1 |
| Lets test this...                               |      10 |
| I am at vinsol                                  |       5 |
| Nokis is a nice mobile company                  |       9 |
| Thanks for letting me know                      |       9 |
| Stop playing twitter twitter, focus on your job |       2 |
| Its raining                                     |       1 |
+-------------------------------------------------+---------+
10 rows in set (0.01 sec)

