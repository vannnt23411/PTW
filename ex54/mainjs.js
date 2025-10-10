function findMax(a, b, c) {
  a = parseFloat(a); b = parseFloat(b); c = parseFloat(c);
  return Math.max(a, b, c);
}

function findMin(a, b, c) {
  a = parseFloat(a); b = parseFloat(b); c = parseFloat(c);
  return Math.min(a, b, c);
}

function calcSin(a) {
  a = parseFloat(a);
  return Math.sin(a * Math.PI / 180).toFixed(4); 
}

function calcCos(a) {
  a = parseFloat(a);
  return Math.cos(a * Math.PI / 180).toFixed(4);
}

function showResult(value, resultBox) {
  resultBox.value = value;
}

function isNumber(value) {
  return typeof value === "string" && value.trim() !== "" && !isNaN(Number(value));
}

function handleOperation(op) {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  const result = document.getElementById("result");           


  if (!isNumber(a) || (!isNumber(b) && op !== "sin" && op !== "cos") || (!isNumber(c) && op !== "sin" && op !== "cos")) {
    alert("Bạn cần nhập 1 số!");
    result.value = "";                                  
    return;
  }

  let r;
  switch (op) {
    case "max": r = findMax(a, b, c); break;
    case "min": r = findMin(a, b, c); break;
    case "sin": r = calcSin(a); break;
    case "cos": r = calcCos(a); break;
    default: r = ""; break;
  }
  showResult(r, result);                                    
}
