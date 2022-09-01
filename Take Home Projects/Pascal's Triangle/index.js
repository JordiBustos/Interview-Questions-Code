let triangle = computeTriangle();

const slider = document.getElementById('slider');
const value = document.getElementById('value');
value.textContent = slider.value
renderTriangle(slider.value, triangle);

slider.oninput = function () {
  deletePast();
  renderTriangle(this.value, triangle);
  value.textContent = this.value
}

function computeTriangle() {
  const triangle = new Array(50);
  for (let i = 0; i < 50; i++) {
    triangle[i] = new Array(i + 1);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = (triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
  }
  return triangle;
}

function renderTriangle(depth, triangleValues) {
  const t = document.getElementById('table');
  const triangle = document.createElement('table');
  t.appendChild(triangle);

  var row = document.createElement('tr');
  triangle.appendChild(row);
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.textContent = '1';
  for (var i = 1; i < depth; i++) {
    var row = document.createElement('tr');
    triangle.appendChild(row);
    for (var j = 0; j <= i; j++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
      cell.textContent = triangleValues[i][j];
    }
  }
}

function deletePast() {
  const t = document.getElementById('table');
  t.removeChild(t.firstChild);
} 