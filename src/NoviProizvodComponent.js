import React, { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./NoviProizvodIKorisnik.css";

export const NoviProizvodComponent = () => {
  const [proizvod, setProizvod] = useState({
    naziv: "",
    kratakOpis: "",
    detaljanOpis: "",
    ocene: [],
    cena: "",
    prosecnaOcena: 0.0,
    slike: [],
    tip: "",
  });

  const proizvodiCollectionRef = collection(db, "proizvodi");
  const saljiUBazu = async (noviProizvod) => {
    await addDoc(proizvodiCollectionRef, noviProizvod);
  };

  const handleFormInputChange = (name) => (event) => {
    const unesenaVrednost = event.target.value;
    setProizvod({ ...proizvod, [name]: unesenaVrednost });
  };
  const handleFormInputChangeZaSlike = (name) => (event) => {
    if (name === "slike") {
      const unesenaVrednost = event.target.value;
      console.log(unesenaVrednost);
      setProizvod((prevProizvod) => ({
        ...prevProizvod,
        slike: [...prevProizvod.slike, unesenaVrednost],
      }));
    }
  };

  const cancel = () => {
    window.location.assign("/");
  };

  const napravi = (e) => {
    e.preventDefault();

    let ok = true;

    if (
      proizvod.naziv === "" ||
      proizvod.kratakOpis === "" ||
      proizvod.detaljanOpis === "" ||
      proizvod.cena === "" ||
      proizvod.tip === ""
    ) {
      ok = false;
      alert("Neka polja nisu popunjena");
    }

    if (ok) {
      let test = {
        naziv: proizvod.naziv,
        kratakOpis: proizvod.kratakOpis,
        detaljanOpis: proizvod.detaljanOpis,
        ocene: proizvod.ocene,
        cena: proizvod.cena,
        prosecnaOcena: proizvod.prosecnaOcena,
        slike: proizvod.slike,
        tip: proizvod.tip,
      };

      saljiUBazu(test);
      alert(
        "Uspesno ste dodali novi proizvod (windows.location push ne radi :/ iz nekog razloga)"
      );
      console.log(proizvod);
    }
  };

  return (
    <div className="sve-novi-proizvod">
      <div className="narandzasta-novi-proizvod"></div>
      <div className="plava-novi-proizvod"></div>
      <div className="kartica-dodavanje">
        <h2 className="naslov">Novi Proizvod</h2>
        <div className="sve-ostalo">
          <div className="jedna-grupa">
            <label>Naziv :</label>
            <input
              placeholder="Naziv"
              name="naziv"
              className="form-control"
              value={proizvod.naziv}
              onChange={handleFormInputChange("naziv")}
            />
          </div>

          <div className="jedna-grupa">
            <label>Kratak opis:</label>
            <input
              placeholder="Kratak opis"
              name="kratakOpis"
              className="form-control"
              value={proizvod.kratakOpis}
              onChange={handleFormInputChange("kratakOpis")}
            />
          </div>

          <div className="jedna-grupa">
            <label>Detaljan opis:</label>
            <input
              placeholder="Detaljan opis"
              name="detaljanOpis"
              className="form-control"
              value={proizvod.detaljanOpis}
              onChange={handleFormInputChange("detaljanOpis")}
            />
          </div>

          <div className="jedna-grupa">
            <label>Tip:</label>
            <input
              placeholder="Tip"
              name="tip"
              className="form-control"
              value={proizvod.kategorija}
              onChange={handleFormInputChange("tip")}
            />
          </div>

          <div className="jedna-grupa">
            <label>URL Slike:</label>
            <input
              placeholder="URL Slike"
              name="slike"
              className="form-control"
              value={proizvod.slikaUrl}
              onBlur={handleFormInputChangeZaSlike("slike")}
            />
          </div>

          <div className="jedna-grupa">
            <label>Cena:</label>
            <input
              placeholder="Cena"
              type="number"
              name="cena"
              className="form-control"
              value={proizvod.cena}
              onChange={handleFormInputChange("cena")}
            />
          </div>

          <br />
          <button className="btn-nazad" onClick={cancel}>
            Nazad
          </button>
          <button className="btn-dodaj" style={{ margin: 5 }} onClick={napravi}>
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};
