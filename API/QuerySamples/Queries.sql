/*
Boilerplate ideas for SQL queries for API use
*/

/*
User Auth Check, assume variable "username", "password"

Would then ensure a 1 is returned
*/
SELECT COUNT(*)
FROM Users
WHERE name="username" AND password="password"

/*
Get Most Recent Posts
??? smtn with counts here maybe
TODO: Finish
*/
SELECT TOP 50 *
FROM Posts
LEFT JOIN LikeEvents ON Posts.post_id=LikeEvents.post_id
ORDER BY col_name ASC

/*
Insert new User
*/
INSERT INTO Users
VALUES (username, password)

/*
Insert new Post
*/
INSERT INTO Posts
VALUES (post_content, NOW(), post_user, post_category, 0)

/*
Like post
TODO: Finish
*/
DECLARE likeCount INTEGER;

SELECT TOP 1 liked_count
INTO likeCount
FROM Posts
Where post_id = postid

likeCount += 1

UPDATE Posts
SET liked_count=likeCount
WHERE post_id=postid

INSERT INTO LikeEvents
VALUES (user_id, post_id)