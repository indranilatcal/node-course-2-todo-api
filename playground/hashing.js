const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10).then((salt) => {
    bcrypt.hash(password, salt).then((hash) => console.log(hash));
});

var hashedPassword = '$2a$10$LBz6x5gmWISqsXGKms18d.9P.hrh..k42pvLE4LT6mLG0xwtgTqPu';

bcrypt.compare(password, hashedPassword)
    .then((res) => console.log(res));