      console.log(3 > 5);

      console.log(5 === '5'); // convert them into same data type by using '=='

      console.log(5 > 5 - 2);


      if(false) {
         console.log('hello');
      }
      else{
        console.log('else');
      }
       
      const age = 15;

      if(age >= 16)
      {
         console.log('He can Drive:');
      }
      else if(age >= 14)
      {
        console.log('Almost there');
      }
      else
      {
        console.log('He cant Drive ');
      }

      
      console.log(false && true); 
    

      console.log(0.2 >= 0 && 0.2 < 1/3);

      console.log(true||false);

      console.log(!true);
      
      if(0)
      {
        console.log('hello');
      }

      const cartQuantity = 5;

      if(cartQuantity) // if cartQuantity is not 0 then it will be true
      {
        console.log('You have ' + cartQuantity + ' items in your cart');
      }
      else
      {
        console.log('Your cart is empty');
      }

     console.log(!0); // convert 0 into boolean

     // NaN is also false in boolean 
      console.log('text' / 5); // it will return NaN


      let  veriable;  
      console.log(veriable); // it will return undefined


      true ? console.log('yes') : console.log('no'); // ternary operator

      //guard operator
      false && console.log('hello'); // it will not print hello

      true && console.log('hello'); // it will print hello

      const message = false && 'hello'; // it will not print hello

      console.log(message);

      const message1 = true && 'hello'; // it will print hello

      console.log(message1);


      //default operator
      const message2 = 'hello' || 'hi'; // it will print hello

      console.log(message2);

      const message3 = '' || 'hi'; // it will print hi

      console.log(message3);

      const message4 = '' || 0 || 'hi'; // it will print hi

      console.log(message4);