document.addEventListener("DOMContentLoaded", function () {
    let items = [
     "./img/tshirt/d-r-blous.png",
     "./img/trui-hoodie/whitetrui-d-r.png"
    ];  
    let button = document.getElementById("vkleding");
    const result = document.createElement("img");
    result.style.maxWidth = "200px";
    result.style.maxHeight= "200px"
    result.style.marginTop = "10px";
    result.style.marginLeft = "50px";
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
    //////////////////////////////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function () {
        let items = [
          "./img/riemen/black riem.png",
        ];
        let button = document.getElementById("vkleding");
        const result = document.createElement("img");
        result.style.maxWidth = "100px";
        result.style.marginTop = "10px";
        result.style.marginLeft = "65px";
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
    //////////////////////////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let items = [
      "./img/broeken/D-RBROEK.png",
      "./img/broeken/d-r-recht.png",
    ];
    let button = document.getElementById("vkleding");
    const result = document.createElement("img");
    result.style.maxWidth = "200px";
    result.style.maxHeight= "300px"
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
  ///////////////////////////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    let items = [
    //  "./img/schoenen/NIKE GREEN.png",
     "./img/schoenen/fake campus.png",
     "./img/schoenen/tims.png",
    ];  
    let button = document.getElementById("vkleding");
    const result = document.createElement("img");
    result.style.maxWidth = "150px";
    result.style.marginTop = "10px";
    result.style.marginLeft = "50px";
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