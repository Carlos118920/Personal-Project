
CREATE TABLE courses (id SERIAL PRIMARY KEY, image VARCHAR(200), location VARCHAR(50), type VARCHAR(50), ImmersiveOrAfterHours VARCHAR(50), appDeadLine date, dateStart date, dateEnd date, price VARCHAR(50));

INSERT INTO courses (image, location, type, ImmersiveOrAfterHours, appDeadLine, dateStart, dateEnd, price)
VALUES
('https://s3.amazonaws.com/devmountain/www/img/camp-4-small.jpg', 'Provo, UT', 'Web Dev', 'Immersive', '2017-02-10', '2017-03-10', '2017-06-10', '10,900'),
('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSHvXG3YbkEHK33wrvqD9uEYbUI-0oFyq4sWAcOk-Gy6k0LMjO8A', 'Salt Lake City, UT', 'UX/UI', 'Immersive', '2017-03-10', '2017-04-10', '2017-07-10', '10,900'),
('https://www.dallasinnovates.com/wp-content/uploads/2016/09/butler-970.jpg', 'Dallas, TX', 'Web Dev', 'After Hours', '2017-04-10', '2017-05-10', '2017-08-10', '4,900'),
('https://s3.amazonaws.com/devmountain/www/img/camp-4-small.jpg', 'Provo, UT', 'IOS', 'After Hours', '2017-05-10', '2017-06-10', '2017-09-10', '4,900'),
('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSHvXG3YbkEHK33wrvqD9uEYbUI-0oFyq4sWAcOk-Gy6k0LMjO8A', 'Salt Lake City, UT', 'Web Dev', 'Immersive', '2017-02-10', '2017-03-10', '2017-6-10', '10,900'),
('https://s3.amazonaws.com/devmountain/www/img/camp-4-small.jpg', 'Provo, UT', 'IOS', 'After Hours', '2017-05-10', '2017-06-10', '2017-09-10', '4,900')





CREATE TABLE application (id SERIAL PRIMARY KEY, courseId integer , why VARCHAR(150), how VARCHAR(150), housing VARCHAR(50), financing VARCHAR(50));

INSERT INTO application (courseId, why, how, housing, financing)
VALUES
(2, 'I REEEEEAAALLLY like to code!', 'Good internet marketing', true, false)
