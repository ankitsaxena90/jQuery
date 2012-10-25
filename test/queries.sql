
(i) 
mysql> select u.name,r.following_id from relationships r left outer join users u on r.user_id = u.id;
+-------+--------------+
| name  | following_id |
+-------+--------------+
| Akhil |            2 |
| Akhil |            3 |
| Akhil |            5 |
| Akhil |            9 |
| Akhil |           10 |
| John  |            7 |
| Ryan  |            6 |
| Kapil |            1 |
| Kapil |            2 |
| Kapil |           10 |
| Ankur |            1 |
| Ankur |            2 |
| Ankur |            3 |
| Ankur |            4 |
| Ankur |            5 |
| Ankur |            6 |
| Ankur |            7 |
| Ankur |            8 |
| Ankur |           10 |
+-------+--------------+
19 rows in set (0.00 sec)






(iii)
mysql> select u.name, t.content, t.created_at  from tweets t join users u on t.user_id = u.id;
+-------+---------------------------------------------------+---------------------+
| name  | content                                           | created_at          |
+-------+---------------------------------------------------+---------------------+
| Akhil | My first ever tweet.                              | 2012-08-07 12:52:11 |
| Manik | Test tweet.                                       | 2012-08-07 12:52:38 |
| Manik | Hello there                                       | 2012-08-07 12:52:46 |
| Akhil | lorem ipsum                                       | 2012-08-07 12:53:01 |
| Suman | Lets test this...                                 | 2012-08-07 12:53:18 |
| Kapil | I am at vinsol                                    | 2012-08-07 12:53:59 |
| Ankur | Nokis is a nice mobile company                    | 2012-08-07 12:54:20 |
| John  | Its Nokia not Nokis                               | 2012-08-07 12:54:36 |
| Ankur | Thanks for letting me know                        | 2012-08-07 12:54:51 |
| Manik | Stop playing twitter twitter, focus on your job   | 2012-08-07 12:55:46 |
| Ryan  | Ops.. you caught us                               | 2012-08-07 12:57:15 |
| Ryan  | Btw, what is the score                            | 2012-08-07 12:57:27 |
| Akhil | Its raining                                       | 2012-08-07 12:57:43 |
| Rahul | really?                                           | 2012-08-07 12:57:56 |
| Sunil | I think we now have enough deta to write queries. | 2012-08-07 12:58:48 |
+-------+---------------------------------------------------+---------------------+
15 rows in set (0.00 sec)





(iv)
mysql> select u.name, count(t.user_id) as total_tweets from tweets t, users u where u.id = t.user_id group by u.name;
+-------+--------------+
| name  | total_tweets |
+-------+--------------+
| Akhil |            3 |
| Ankur |            2 |
| John  |            1 |
| Kapil |            1 |
| Manik |            3 |
| Rahul |            1 |
| Ryan  |            2 |
| Suman |            1 |
| Sunil |            1 |
+-------+--------------+
9 rows in set (0.00 sec)





(v)
mysql> select u.name from users u left join tweets t on t.user_id = u.id where t.user_id is null;
+------+
| name |
+------+
| Amit |
+------+
1 row in set (0.01 sec)



(vi) 
mysql> select distinct t.user_id, u.name from tweets t, users u where u.id = t.user_id and timediff(curtime(), created_at) < 60;
Empty set (0.00 sec)


