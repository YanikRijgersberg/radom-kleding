// let broek1 = Image/"broekv1-cocept.avif"





// document.addEventListener("DOMContentLoaded", function () {
//     let items1 = ["Appel", "Banaan", "Kers", "Druif", "Mango", "Peer"];
//     let items2 = ["Appel", "Banaan", "Kers", "Druif", "Mango", "Peer"];
//     let items3 = ["Appel", "Banaan", "Kers", "Druif", "Mango", "Peer"];
//     let button = document.getElementById("vkleding");
//     let result = document.createElement("p");

  
//     if (button) {
//       button.addEventListener("click", function () {
//         let randomIndex1 = Math.floor(Math.random() * items1.length);
//         result.textContent = items1[randomIndex1];
//         let randomIndex2 = Math.floor(Math.random() * items1.length);
//         result.textContent = items2[randomIndex2];
//         let randomIndex3 = Math.floor(Math.random() * items1.length);
//         result.textContent = items3[randomIndex3];
//       });
//       document.body.appendChild(result);
//     } 
//     });
document.addEventListener("DOMContentLoaded", function () {
    let items = [
      "./img/trui-hoodie/dragontrui.png",
      // "./img/test/tspmo2.avif"
  
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
        result.alt = "Gekozen afbeelding";
      });
      document.body.appendChild(result);
    } 
    });
  document.addEventListener("DOMContentLoaded", function () {
    let items = [
      "./img/broeken/edhardybroek.png",
      // "./img/banaan.png",
    //   "kers.png",
    //   "druif.png",
    //   "mango.png",
    //   "peer.png"
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
        result.alt = "Gekozen afbeelding";
      });
      document.body.appendChild(result);
    } 
  });