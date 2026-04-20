const createSQL = `
DROP TABLE IF EXISTS ${process.env.DB_TABLE_NAME};

CREATE TABLE IF NOT EXISTS ${process.env.DB_TABLE_NAME} (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_name VARCHAR(30),
    content VARCHAR(255)
);
`;

const insertSQL = `
INSERT INTO ${process.env.DB_TABLE_NAME} (user_name, content) VALUES
    ('The Joker', 'Why so serious?'),
    ('T Challa', 'Wakanda Forever!'),
    ('Dory', 'Just keep swimming'),
    ('Buzz Lightyear', 'To infinity and beyond!'),
    ('Captain America', 'Avengers... assemble.'),
    ('Gollum', 'My precious');
`;

module.exports = {
    createSQL,
    insertSQL,
};
