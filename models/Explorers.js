const Reader = require("./Reader");
class Explorers {
    static getAllExplorers() {
        return Reader.readJsonFile('./explorers.json');
    }

    static haveCertification() {
        const explorers = Explorers.getAllExplorers();
        return (explorers.map(explorer => explorer.haveCertification ? explorer.email : null)).filter(email => email !== null);
    }

    static minCredits(credits){
        const explorers = Explorers.getAllExplorers();
        return explorers.filter(explorer => explorer.credits >= credits);
    }


}

module.exports = Explorers;