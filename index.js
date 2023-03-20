const convert = document.getElementById("convert");
const feetMeter = document.getElementById("feet-meter");
const meterFeet = document.getElementById("meter-feet");
const litreGall = document.getElementById("litre-gall");
const gallLitre = document.getElementById("gall-litre");
const kgPound = document.getElementById("kg-pound");
const poundKg = document.getElementById("pound-kg");
const inputEl = document.getElementById("input-el");

convert.addEventListener("click", function () {
  const number = Number(inputEl.value);
  const meter = (number * 3.281).toFixed(3);
  const foot = (number / 3.281).toFixed(3);
  const litre = (number / 3.785).toFixed(3);
  const gallon = (number * 3.785).toFixed(3);
  const kg = (number * 2.205).toFixed(3);
  const pound = (number / 2.205).toFixed(3);
  feetMeter.textContent = `${number} meter = ${meter} feets`;
  meterFeet.textContent = `${number} foot = ${foot} meters`;
  gallLitre.textContent = `${number} litre = ${litre} gallons`;
  litreGall.textContent = `${number} Gallon = ${gallon} litres`;
  poundKg.textContent = `${number} Kg = ${kg} Pounds`;
  kgPound.textContent = `${number} Pound = ${pound} Kg's`;
});
