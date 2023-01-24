let bool_skipTransition = false;

function updateLabel(val, variable, beforeText, afterText) {
  document.getElementById(variable).textContent = beforeText + val + afterText;
}

async function calculateFemale() {
  let res = 0;

  // Calculations

  let age = Math.round(
    4489 -
      (75 + 2 / 69 - parseFloat(document.getElementById('f_age').value)) * 69,
  );

  let height = Math.round(
    42004 -
      (220 + 2 / 420 - parseFloat(document.getElementById('f_height').value)) *
        420,
  );

  let identify = Math.round(
    parseFloat(document.getElementById('f_identify_as_racoon').value) * 121 + 2,
  );

  let haircolor = 0;

  switch (document.getElementById('f_haircolor').value) {
    case '1': // brown
      haircolor = 4500;
      break;
    case '2': // blonde
      haircolor = 5415;
      break;
    case '3': // grey
      haircolor = 2;
      break;
    case '4': // black
      haircolor = 187;
      break;
    case '5': // red
      haircolor = 3000;
      break;
  }

  let bags = 0;

  if (document.getElementById('f_bags1').checked) {
    bags = 5414;
  } else if (document.getElementById('f_bags2').checked) {
    bags = 2420;
  } else if (document.getElementById('f_bags3').checked) {
    bags = 2;
  }

  res = age + height + identify + haircolor + bags;

  localStorage.setItem('calculation_result', res.toString());
  localStorage.setItem('current_gender_selected', 'female');

  window.location.href = 'result_page.html';
}

async function calculateMale() {
  let res = 0;

  // Calculations

  let age = Math.round(
    (75 + 2 / 69 - parseFloat(document.getElementById('r_age').value)) * 69,
  );

  let height = Math.round(
    (220 + 2 / 420 - parseFloat(document.getElementById('r_height').value)) *
      420,
  );

  let identify = Math.round(
    parseFloat(document.getElementById('r_identify_as_racoon').value) * 121 + 2,
  );

  let haircolor = 0;

  switch (document.getElementById('r_haircolor').value) {
    case '1': // brown
      haircolor = 3000;
      break;
    case '2': // blonde
      haircolor = 187;
      break;
    case '3': // grey
      haircolor = 5415;
      break;
    case '4': // black
      haircolor = 4500;
      break;
    case '5': // red
      haircolor = 2;
      break;
  }

  let bags = 0;

  if (document.getElementById('bags1').checked) {
    bags = 2;
  } else if (document.getElementById('bags2').checked) {
    bags = 2420;
  } else if (document.getElementById('bags3').checked) {
    bags = 5414;
  }

  res = age + height + identify + haircolor + bags;

  localStorage.setItem('calculation_result', res.toString());
  localStorage.setItem('current_gender_selected', 'male');

  window.location.href = 'result_page.html';
}

async function getResult() {
  // set text

  let gender = localStorage.getItem('current_gender_selected');

  if (gender === 'male') {
    // male
    document.getElementById('label_result-text').textContent =
      'Your boy is worth';
  } else {
    // female
    document.getElementById('label_result-text').textContent =
      'Your girl is worth';
  }

  // display result

  let res = parseFloat(localStorage.getItem('calculation_result'));

  for (let i = 0; i < res; i++) {
    if (bool_skipTransition) {
      break;
    }
    document.getElementById('label_result').textContent = (i + 1).toString();
    if (res >= 10000) {
      if (i % 100 === 0) {
        await sleep(Math.round((0.005 / res) * Math.pow(i - res / 2, 2)));
      }
    } else {
      if (i % 10 === 0) {
        await sleep(1);
      }
    }
  }
  document.getElementById('label_result').textContent = res.toString();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function skipTransition() {
  bool_skipTransition = true;
}
