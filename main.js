var isprime;

function Random() {
  /* Defining the variables that will be used in this function. */
  var min = document.querySelector('input[name="min"]').value;
  var max = document.querySelector('input[name="max"]').value;
  min = Number(min);
  max = Number(max);
  var error = 'error';

  /* Output error if the minimum is higher than the maximum. */
  if (min > max) {
    document.getElementById('tb').value = error;
  } else if (Number.isInteger(min) && Number.isInteger(max)) {
    /* Randomly generating the number and transfering it to the textbox if it is an integer. */
    var rng = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('tb').value = rng;
  } else {
    /*Output error if either the minimum or maximum is not an iteger.*/
    document.getElementById('tb').value = error;
  }
}

/* Check if the randomly generated number is even or odd */
function evenodd() {
  /* Defining the variables that will be used in this function. */
  var rn = document.querySelector('input[name="tb"]').value;
  rn = parseInt(rn);
  var rn2 = document.querySelector('input[name="tb"]').value;
  var even = 'Even';
  var odd = 'Odd';
  var na = 'N/A';

  if (rn % 2 == 0) {
    document.getElementById('eo').value = even;
  } else if (rn % 2 == 1) {
    document.getElementById('eo').value = odd;
  } else if (rn % 2 == -1) {
    document.getElementById('eo').value = odd;
  } else {
    document.getElementById('eo').value = na;
  }
}

/* Check if the randomly generated number is prime or composite */
function prime() {
  var rn = document.querySelector('input[name="tb"]').value;
  rn = parseInt(rn);
  var Prime = 'Prime';
  var Composite = 'Composite';

  if (rn === 'error') {
    document.getElementById('pc').value = 'N/A';
  } else if (rn < 0) {
    document.getElementById('pc').value = 'N/A';
  } else if (rn > 2 && rn % 2 == 0) {
    document.getElementById('pc').value = Composite;
  } else if (rn < -2 && rn % 2 == 0) {
    document.getElementById('pc').value = Composite;
  } else if (rn === 0) {
    document.getElementById('pc').value = Composite;
  } else if (Number.isInteger(rn)) {
    var i;
    var flag = true;
    var rn = document.querySelector('input[name="tb"]').value;
    rn = parseInt(rn);
    for (i = 2; i <= Math.floor(rn / 2); i++)
      if (rn % i == 0) {
        flag = false;
        break;
      }

    if (flag == false) {
      document.getElementById('pc').value = Composite;
    } else {
      document.getElementById('pc').value = Prime;
    }
  } else {
    document.getElementById('pc').value = 'N/A';
  }
}

/* Finding the number's factors. */
function factor() {
  var rn = document.querySelector('input[name="tb"]').value;
  rn = parseInt(rn);

  if (rn === 0) {
    document.getElementById('fac').value = 'All Real Numbers';
  } else if (rn < 0) {
    document.getElementById('fac').value =
      'This feature does not support negative numbers.';
  } else if (Number.isInteger(rn)) {
    /*Highest divisor can be less than half of the input number*/
    var rn1 = Math.ceil(rn / 2);
    var str = '1';
    for (i = 2; i <= rn; i++) {
      var factor = rn % i;
      if (rn % i == 0) {
        str += ', ' + i;
      }
    }
    document.getElementById('fac').value = str;
  } else {
    document.getElementById('fac').value = 'N/A';
  }
}

/* Finding the number's prime factorization */
function pfactorize() {
  var rn = document.querySelector('input[name="tb"]').value;
  rn = parseInt(rn);
  var primeArray = [];
  var i;
  var isprime;
  var outStr = 1;

  if (Number.isInteger(rn) && rn > 0) {
    /* Start of loop */
    for (i = 2; i <= rn; i++) {
      if (rn % i == 0) {
        /* checks if "i" is prime */
        isprime = isPrime(i);

        if (isprime == true) {
          rn /= i;
          primeArray.push(i);
          i = i - 1;
        }
      }
    }

    for (var k = 0; k < primeArray.length; k++) {
      outStr += ', ' + primeArray[k];
    }
    document.getElementById('pfac').value = outStr;
  } else {
    document.getElementById('pfac').value = 'N/A';
  }
}

/* Function tells if a factor is prime for the prime factorization */

function multiples() {
  var rn = document.querySelector('input[name="tb"]').value;
  rn = parseInt(rn);
  var multArray = [];
  var outStr = rn;

  if (Number.isInteger(rn) && rn > 0) {
    for (var i = rn * 2; i <= rn * 100; i += rn) {
      multArray.push(i);
    }
    for (var k = 0; k < multArray.length; k++) {
      outStr += ', ' + multArray[k];
    }
    document.getElementById('mul').value = outStr;
  } else {
    document.getElementById('mul').value = 'N/A';
  }
}

function Goldbach() {
  var rn = document.querySelector('input[name="tb"]').value;
  rn = parseInt(rn);
  var sumArray = [];
  var str = '';
  var i;
  var j;

  for (i = 2; i <= rn / 2; i++) {
    var j = rn - i;
    if (isPrime(i) == true && isPrime(j) == true) {
      sumArray.push(i);
      sumArray.push(j);
    }
  }
  if (sumArray.length > 1 && rn % 2 == 0 && rn > 2) {
    for (k = 0; k < sumArray.length; k += 2) {
      str += ' (' + sumArray[k] + ' + ' + sumArray[k + 1] + ') ' + ' || ';
    }
  } else if (rn % 2 == 1) {
    str = 'Number must be even';
  } else if (rn <= 2) {
    str = 'Number must be greater than 2';
  } else {
    str = 'N/A';
  }
  document.getElementById('gc').value = str;
}

/* Says whether a given number is prime or not. Input number output if it is prime or not. */
function isPrime(num) {
  var isprime = true;
  for (var j = 2; j <= Math.floor(Math.sqrt(num)); j++) {
    if (num % j == 0) {
      isprime = false;
      break;
    }
  }
  if (num < 2) {
    var isprime = false;
  }
  return isprime;
}

/* Function: finds all twin primes between a given range. Input range and output all prime twins between the range */
function twinPrimes() {
  var min = document.querySelector('input[name="min2"]').value;
  var max = document.querySelector('input[name="max2"]').value;
  min = parseInt(min);
  max = parseInt(max);
  var numArray = [];
  var str = '';
  var incrementArray = [];
  var counter = 0;
  i = min;

  /* Set search increment. */
  if (min % 10 == 1) {
    incrementArray = [2, 6, 2];
  } else if (min % 10 == 2) {
    i += 5;
    incrementArray = [6, 2, 2];
  } else if (min % 10 == 3) {
    i += 4;
    incrementArray = [6, 2, 2];
  } else if (min % 10 == 4) {
    i += 3;
    incrementArray = [6, 2, 2];
  } else if (min % 10 == 5) {
    i += 2;
    incrementArray = [6, 2, 2];
  } else if (min % 10 == 6) {
    i += 1;
    incrementArray = [6, 2, 2];
  } else if (min % 10 == 7) {
    incrementArray = [6, 2, 2];
  } else if (min % 10 == 8) {
    i += 1;
    incrementArray = [2, 2, 6];
  } else if (min % 10 == 9) {
    incrementArray = [2, 2, 6];
  } else if (min % 10 == 0) {
    i += 1;
    incrementArray = [2, 6, 2];
  }

  /* Finds the twin primes that are less than or equal to 7. */
  if (min <= 7) {
    for (k = min; k <= 7; k++) {
      if (k == 3) {
        numArray.push(k);
        numArray.push(k + 2);
      } else if (k == 5) {
        numArray.push(k);
        numArray.push(k + 2);
      } else if (k == 7) {
        numArray.push(k);
        numArray.push(k + 2);
      }
    }
  }

  /* Finds the twin primes that are greater than 7. */
  while (i <= max) {
    if (isPrime(i) == true) {
      if (isPrime(i + 2) == true) {
        numArray.push(i);
        numArray.push(i + 2);
      }
    }
    counter += 1;
    if (counter == 3) {
      counter = 0;
    }
    i += incrementArray[counter];
  }
  for (k = 0; k < numArray.length - 1; k += 2) {
    str += '(' + numArray[k] + ', ' + numArray[k + 1] + ')' + '  ||  ';
  }
  document.getElementById('t1').value = str;
}

function primeRange() {
  var min = document.querySelector('input[name="min2"]').value;
  var max = document.querySelector('input[name="max2"]').value;
  min = parseInt(min);
  max = parseInt(max);
  var numArray = [];
  var str = '';
  var i = min;

  if (min % 2 == 0) {
    i += 1;
  }

  for (i = min; i <= max; i++) {
    if (isPrime(i) == true) {
      numArray.push(i);
    }
  }
  for (k = 0; k < numArray.length; k++) {
    str += numArray[k] + ', ';
  }
  document.getElementById('pr').value = str;
}
