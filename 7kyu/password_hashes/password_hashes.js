let crypto = require('crypto');

passHash = (password) => {
    return crypto.createHash('md5').update(password).digest('hex');
}

const tests = [
    ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
    ['abc123', 'e99a18c428cb38d5f260853678922e03']
]


for (let i = 0; i < tests.length; i+=1) {
     console.log(passHash(tests[i][0]));
}