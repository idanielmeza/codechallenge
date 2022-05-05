const Explorers = require('../models/Explorers');

describe('Unit testing Explorer class',()=>{
    test('1) should return all explorers',()=>{
        const explorers = Explorers.getAllExplorers();
        expect(explorers).toEqual(require('../explorers.json'));
    })
    test('2) should return all explorers with certification',()=>{
        const explorers = Explorers.haveCertification();
        expect(explorers[0]).toMatch('@');
    })

    test('3) should return all explorers with credits greater than or equal to the given credits',()=>{
        const explorers = Explorers.minCredits(100);
        expect(explorers[0].credits).toBeGreaterThanOrEqual(100);

        const explorers2 = Explorers.minCredits(600);
        expect(explorers2[0].credits).toBeGreaterThanOrEqual(600);
    })

})
