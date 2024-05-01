var expect = require("chai").expect;
const request = require("request");
let url = 'http://localhost:3000/api/cats';
let cat = { path: '', title: '' }


describe('test GET api', function () {
    it('returns statusCode of 200', function (done) {
        request(url, function (a, b, c) {
            expect(b.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST api', function () {
    it('post cat to DB', function (done) {
        request.post({ url: url, form: cat }, function (_, res) {
            expect(res.body).to.equal("Cat post successful");
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test DELETE api', function () {
    it('delete a cat', function (done) {
        request.delete({ url: url, form: cat }, function (a, b, c) {
            done();
        });
    });
});