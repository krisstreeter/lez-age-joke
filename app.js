
 myAge = () => {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10000) {
      text = "Did you type all their names? I meant enter just the number sorry.";
    } else {
        //change to es6 later
      text = (x * 5) + "? Am I right? Ish?";
    } // add more conditions for if its under 2 or so, about being weirdly young 
        // add something if it's a high number 
    document.getElementById("demo").innerHTML = text;
  }

  /*
get rid of the footer
make it a veritcal rectangle rounded kinda like a calculator
not a jumbotron
  */