let display = document.getElementById('display');

    function appendToDisplay(value) {
      display.innerHTML += value;
    }

    function clearDisplay() {
      display.innerHTML = '';
    }

    function deleteLast() {
      display.innerHTML = display.innerHTML.slice(0, -1);
    }

    function calculateResult() {
      try {
        display.innerHTML = eval(display.innerHTML);
      } catch (error) {
        display.innerHTML = 'Error';
      }
    }