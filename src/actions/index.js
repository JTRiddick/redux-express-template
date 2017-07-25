
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const INCREMENT = 'INCREMENT';
export const INCREMENT_WITH_AMOUNT = 'INCREMENT_WITH_AMOUNT';
export const DECREMENT = 'DECREMENT';
export const DECREMENT_WITH_AMOUNT = 'DECREMENT_WITH_AMOUNT';
export const SCRAMBLE = 'SCRAMBLE';


export const cardScramble = (cards,n) => {

  let iterations = n;
  // is returning a new object necessary for immutable state change in reducer?
  cards.forEach((card,i)=>{
    let rngI = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[rngI];
    cards[rngI] = temp;
  })
  if(n < 1){
     return({
      type: SCRAMBLE,
      newCards: cards
    });

  }else{
    iterations--;
    return cardScramble(cards,iterations);
  }

}
