const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const coor1 = frm.inCoord1.value;
  const coor2 = frm.inCoord2.value;
  resp.innerText = `Coordenada 1 ${coor1}`;
  resp.innerText = `Coordenada 2 ${coor2}`;
  e.preventDefault();
});
