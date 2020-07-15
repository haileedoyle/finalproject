CREATE DATABASE kelc;

CREATE TABLE content (id SERIAL PRIMARY KEY, name varchar(50), image varchar(700), description varchar(1000));

INSERT INTO content (name, image, description)
VALUES ('Dyed', 'https://i.imgur.com/x0Z9gQD.jpg', 'Pulp Riot Hair Color, painted onto client.');

INSERT INTO content (name, image, description)
VALUES ('Balayage, Money Piece, Babylights', 'https://i.imgur.com/fu87L2U.png', 'Everyone wants a balayage, but this is the trifecta.');

INSERT INTO content (name, image, description)
VALUES ('Bowl Cut', 'https://i.imgur.com/gmggxyp.png', 'A shaggy lil bowl cut for literally anyone.');

INSERT INTO content (name, image, description)
VALUES ('Balayage', 'https://i.imgur.com/VhP7wnJ.png', 'The most popular style right now.');

INSERT INTO content (name, image, description)
VALUES ('Mullet', 'https://i.imgur.com/G03Wjiy.png', `Mullet, anyone? It's never to late to mullet.`);

INSERT INTO content (name, image, description)
VALUES ('Color and Clean Cut', 'https://i.imgur.com/dUFf8mJ.png', 'Nothing better than being able to give your best friend a color touch up and tone.');
