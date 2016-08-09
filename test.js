var assert = require('assert');
const SHRI = require('./shri.js');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('SHRI', function () {
    describe('#createTeam', function () {
        it('value of name property of Team object must be the same as argument of SHRI.createTeam() method', function () {
            var shri = new SHRI();
            var team = shri.createTeam('A');
            assert.equal('A', team.name);
        });
    });
});

describe('SHRI', function () {
    describe('#createStudent', function () {
        it('value of name property of Student object must be the same as argument of SHRI.createStudent() method', function () {
            var shri = new SHRI();
            var stud = shri.createStudent('a');
            assert.equal('a', stud.name);
        });
    });
});