const btns = document.querySelectorAll(".myButton");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const btnSend = document.getElementById("btnSend");
const arrStars = document.querySelectorAll(".stars");

const arrCoraline = [5, 5, 4, 5, 4];
const arrJack = [4, 4, 4, 4, 3];
const arrParanorman = [3, 4, 2, 4, 3];
const arrCadaver = [4, 5, 3, 4, 5];
const arrFrankenwinie = [3, 4, 2, 4, 4];
const arrCasa = [2, 3, 1, 3, 2];
const arrLibro = [3, 3, 5, 2, 4];
const arrLocos = [4, 4, 4, 3, 4];

const calificacion = document.getElementById("calificacion");

const MOVIES_ID = {
  caroline: arrCoraline,
  jack: arrJack,
  paranorman: arrParanorman,
  cadaver: arrCadaver,
  frankenwinie: arrFrankenwinie,
  casa: arrCasa,
  libro: arrLibro,
  locos: arrLocos,
};

let opx;

function modalShow(e) {
  modal.style.display = "block";
  opx = MOVIES_ID[e.target.id];
}

function calificar() {
    if (calificacion.value > 0 && calificacion.value <= 5) {
        opx.push(parseInt(calificacion.value));
    } else {
        console.error("Dato no válido");
        return;
    }
    
  destroy();
  update();
  modal.style.display = "none";
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

btns.forEach((btn) => {
  btn.addEventListener("click", modalShow);
});

function calcularPromedio(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const suma = arr.reduce((total, numero) => total + numero, 0);
  const promedio = suma / arr.length;
  return Math.round(promedio);
}

function update() {
  let coraline = calcularPromedio(arrCoraline);
  let ic = arrStars[0].children;
  for (let i = 0; i < coraline; i++) {
    ic[i].classList = "fa-solid fa-star";
  }

  let jack = calcularPromedio(arrJack);
  let ij = arrStars[1].children;
  for (let i = 0; i < jack; i++) {
    ij[i].classList = "fa-solid fa-star";
  }

  let paranorman = calcularPromedio(arrParanorman);
  let ip = arrStars[2].children;
  for (let i = 0; i < paranorman; i++) {
    ip[i].classList = "fa-solid fa-star";
  }

  let cadaver = calcularPromedio(arrCadaver);
  let icn = arrStars[3].children;
  for (let i = 0; i < cadaver; i++) {
    icn[i].classList = "fa-solid fa-star";
  }

  let perro = calcularPromedio(arrFrankenwinie);
  let ipe = arrStars[4].children;
  for (let i = 0; i < perro; i++) {
    ipe[i].classList = "fa-solid fa-star";
  }

  let casa = calcularPromedio(arrCasa);
  let ica = arrStars[5].children;
  for (let i = 0; i < casa; i++) {
    ica[i].classList = "fa-solid fa-star";
  }

  let libro = calcularPromedio(arrLibro);
  let il = arrStars[6].children;
  for (let i = 0; i < libro; i++) {
    il[i].classList = "fa-solid fa-star";
  }

  let locos = calcularPromedio(arrLocos);
  let ilo = arrStars[7].children;
  for (let i = 0; i < locos; i++) {
    ilo[i].classList = "fa-solid fa-star";
  }
}

update();

function destroy() {
  for (const divStar of arrStars) {
    for (const element of divStar.children) {
      element.classList = "fa-regular fa-star";
    }
  }
}

btnSend.addEventListener("click", calificar);