import Modell from "../Modell.js";
/*azt kell megnézni hogy jó végpont estén megkapjuk a korrekt adatot */
function getAdatTeszt_joVegpont() {
  let vegpont = "https://fakestoreapi.com/products";
  let vart = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  let modell = new Modell();
  modell.getAdat(vegpont, callbackTeszt, hibaCallbackTeszt);

  function callbackTeszt(adat) {
    console.log("Jó végponttal megérkezik az adat");
    console.assert(
      JSON.stringify(vart) === JSON.stringify(adat[0]),
      "Jó végponttal hibás adatot kaptam"
    );
    console.log("lefutott a a fetch");
  }
  function hibaCallbackTeszt(adat) {
    console.log("ide nem szabad belépnünk helyesw végpont esetén");
  }
}

function getAdatTeszt_NemjoVegpont() {
  let vegpont = "https://fakestoreapi.com/productshhhhh";
  let vart = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  let modell = new Modell();
  modell.getAdat(vegpont, callbackTeszt, hibaCallbackTeszt);

  function callbackTeszt() {
    console.log("Baj ha ide futott be, mert nem jó a végpont");
  }

  function hibaCallbackTeszt(adat) {//(error) a Modell-ből kapja
    console.log("hiba: ", adat); //(error)
  }
}

getAdatTeszt_joVegpont();
getAdatTeszt_NemjoVegpont();
