/** Moving Pieces */ 

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_bkf4d2a";
    const templateID = "template_jeru23s";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

/** Flipping pieces */ 

// Responsable de html --> jss
const getFlipperElements = (x) => {
  const btnrotate = document.getElementById('rotate'+x);
  const btnfliphx = document.getElementById('fliph'+x);
  const btnflipvx = document.getElementById('flipv'+x);
  const imgx = document.getElementById('img'+x);
  return {
      btnrotate,
      btnfliphx, 
      btnflipvx,
      imgx
  }
}

// mainly we don't need this part

const getSearcherElements = () => {
  const btnSearch = document.getElementById('search');
  const txtSource = document.getElementById('source');
  return { btnSearch, txtSource };
} 

const getAllImages = () => {
  return document.querySelectorAll('.piece');
}


// Responsables de agregar comportamiento
const addFlippersBehavior = (btnrotate, btnfliphx, btnflipvx, imgx) => {
  btnrotate.addEventListener('click', () => rotate(imgx))
  btnfliphx.addEventListener('click', () => fliph(imgx))
  btnflipvx.addEventListener('click', () => flipv(imgx))
}

const addSearchBehavior = (btnSearch, txtSource, imgs) => {
  btnSearch.addEventListener('click', (e) => searchSource(txtSource.value, imgs))
}


// Funciones auxiliares
// Buscar fuente
const searchSource = (url, imgs) => {
  console.log(url);
  imgs.forEach( img => img.src = url);
}

// Responsables de flippear
const fliph = (img) => {
  //img.classList.toggle('flippedImgH');
  if(img.style.transform == "scaleX(1)")
  img.style.transform = "scaleX(-1)";
  else
  img.style.transform = "scaleX(1)";
}

const flipv = (img) => {
  //img.classList.toggle('flippedImgV');
  if(img.style.transform == "scaleY(1)")
  img.style.transform = "scaleY(-1)";
  else 
  img.style.transform = "scaleY(1)";
}

const rotate = (img) => {
 
  if(img.style.transform == "rotate(90deg)")
  img.style.transform = "rotate(180deg)";
  else if(img.style.transform == "rotate(180deg)")
  img.style.transform = "rotate(270deg)";
  else if(img.style.transform == "rotate(270deg)")
  img.style.transform = "";
  else
  img.style.transform = "rotate(90deg)";
}


// Responsable de casos de uso
const flipperUseCase = (x) => {
  const {btnrotate, btnfliphx, btnflipvx, imgx} = getFlipperElements(x);
  addFlippersBehavior(btnrotate, btnfliphx, btnflipvx, imgx);
}

const searcherUseCase = () => {
  const { btnSearch, txtSource } = getSearcherElements();
  const imgs = getAllImages();
  addSearchBehavior(btnSearch, txtSource, imgs);
}



// Responsables de instannciar casos de uso
flipperUseCase(1);
flipperUseCase(2);
flipperUseCase(3);
flipperUseCase(4);
flipperUseCase(5);
flipperUseCase(6);
flipperUseCase(7);
flipperUseCase(8);



searcherUseCase();



/** Scroll */


