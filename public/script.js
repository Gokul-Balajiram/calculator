let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ expression }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('display').value = data.result;
      expression = data.result.toString();
    })
    .catch((error) => {
      document.getElementById('display').value = 'Error';
      console.error(error);
    });
}
