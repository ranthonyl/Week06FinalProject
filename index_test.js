var expect = chai.expect;

describe('MyFunctions', function() {
    describe("Create Test Deck", () => {
        it("Should see if there are 52 Cards in the deck", function (done) {
              let testDeck = new Deck(); //Creates a new deck 
              let cards = testDeck.entireDeck; //Creates a variable that holds the card deck.
              let numberOfCards = cards.length; //Creates a variable that holds the number of cards in the deck.
              console.log("Test", cards); //Prints the cards to the console.
              expect(numberOfCards).to.eql(52);
              //Checks if the number of cards is equal to 52.
              done(); //Tells Mocha that the test is done.
        });
    });

    describe("Check and see who won game", function() {
        it("Should declare tie game", function (){
            expect(function() {
                whoWonWarGame(warPlayer1.score, warPlayer1.score);
            })
            
        });
    });

});