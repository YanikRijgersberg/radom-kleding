document.addEventListener("DOMContentLoaded", function () {
    let items = [
     "./img/trui-hoodie/dragontrui.png",
     "./img/trui-hoodie/roodetrui.png",
     "./img/trui-hoodie/zwarthoodie.png",
     "./img/trui-hoodie/blauwhoodie.png",
     "./img/trui-hoodie/bladtrui.png",
     "./img/trui-hoodie/blacktrui.png",
     "./img/trui-hoodie/blackhoodie met d.png",
     "./img/trui-hoodie/greentrui.png",
     "./img/trui-hoodie/whitetrui.png",
    ];  
    let button = document.getElementById("vkleding");
    const result = document.createElement("img");
    result.style.maxWidth = "200px";
    result.style.marginTop = "10px";
    result.style.display = "block";
  if (button) {
    button.addEventListener("click", function () {
      let randomIndex = Math.floor(Math.random() * items.length);
      result.src = items[randomIndex];
      result.alt = "afbeelding";
    });
    document.body.appendChild(result);
  } 
  });
  //////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  let items = [
    "./img/riemen/black riem.png",
    "./img/riemen/hellokittyriem.png",
  ];
  let button = document.getElementById("vkleding");
  const result = document.createElement("img");
  result.style.maxWidth = "100px";
  result.style.marginTop = "10px";
  result.style.marginLeft = "50px";
  result.style.display = "block";
  result.style.alignContent = "center";
  if (button) {
    button.addEventListener("click", function () {
      let randomIndex = Math.floor(Math.random() * items.length);
      result.src = items[randomIndex];
      result.alt = "Gekozen afbeelding";
    });
    document.body.appendChild(result);
  } 
});
    ////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let items = [
      "./img/broeken/edhadybroekg.png",
      "./img/broeken/blauwbaggy.png",
      "./img/broeken/grijsebaggy.png",
      "./img/broeken/cammobroek.png",
      "./img/broeken/zwartbaggy.png",
      // "./img/broeken/lichtbruinbroek.png",
    ];
    let button = document.getElementById("vkleding");
    const result = document.createElement("img");
    result.style.maxWidth = "200px";
    result.style.marginTop = "10px";
    result.style.display = "block";
    result.style.justifyContent = "center";
    if (button) {
      button.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * items.length);
        result.src = items[randomIndex];
        result.alt = "Gekozen afbeelding";
      });
      document.body.appendChild(result);
    } 
  });
  //////////////////////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let items = [
     "./img/schoenen/NIKE GREEN.png",
     "./img/schoenen/fake campus.png",
     "./img/schoenen/tims.png",
     "./img/schoenen/rednikesh.png",
     "./img/schoenen/bruineschoenen.png",
    ];  
    let button = document.getElementById("vkleding");
    const result = document.createElement("img");
    result.style.maxWidth = "150px";
    result.style.marginTop = "10px";
    result.style.display = "block";
  
    if (button) {
      button.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * items.length);
        result.src = items[randomIndex];
        result.alt = "afbeelding";
      });
      document.body.appendChild(result);
    } 
    });