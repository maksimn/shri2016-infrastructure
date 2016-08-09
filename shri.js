var SHRI = (function () {
    function shri() {

    }

    shri.prototype.createTeam = function (teamName) {
        return new Team(teamName);
    };

    shri.prototype.createStudent = function (studName) {
        return new Student(studName);
    };

    function Team(name) {
        this.name = name;
    }

    function Student(name) {
        this.name = name;
    }

    return shri;
}());

module.exports = SHRI;