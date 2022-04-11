//--------------------Variable Attributes in JSX-----------------
/* const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
  }; 
   
  const panda = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
  );
   
  const owl = (
    <img 
      src={pics.owl} 
      alt="Unimpressed Owl" />
  );
   
  const owlCat = (
    <img 
      src={pics.owlCat} 
      alt="Ghastly Abomination" />
  );  */

  //-------------------Event Listeners in JSX-----------------------------
/*   function myFunc() {
    alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
  }
   
  <img onClick={myFunc} /> */


  //-------------JSX Conditionals: If Statements-------------
/*   const headline = (
    <h1>
      { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
  ); */

  //---------------------JSX Conditionals: &&----------------------
  /* const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> }
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
  ); */
  /* If the expression on the left of the && evaluates as true, then the JSX 
  on the right of the && will be rendered. If the first expression 
  is false, however, then the JSX to the right of the && will be 
  ignored and not rendered. */

  //--------------.map in JSX---------------------
/* const strings = ['Home', 'Shop', 'About Me'];
 
  const listItems = strings.map(string => <li>{string}</li>);
   
  <ul>{listItems}</ul> */

/*   const liArray = [
    <li>item 1</li>, 
    <li>item 2</li>, 
    <li>item 3</li>
  ];
   
  <ul>{liArray}</ul> */

//-----------------Keys-----------------
{/* <ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul> */}

