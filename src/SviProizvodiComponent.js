import React, { useEffect } from "react";
import { useState } from "react";
import { Popup } from "./Popup";
import "./Popup.css";
import { Hero } from "./Hero";

export function SviProizvodiComponent({
  prosledjenaKorpa,
  prosledjeniProizvodi,
  prijavljeniKorisnikState,
}) {
  const [korpa, setKorpa] = prosledjenaKorpa;
  const [btnPopup, setBtnPopup] = useState(false);
  const [proizvodi, setProizvodi] = prosledjeniProizvodi;
  const [tacnoTajProizvod, setTacnoTajProizvod] = useState({});

  function dodajUKorpu(idProizvoda) {
    console.log(korpa);
    console.log(proizvodi);
    if (!korpa.includes(idProizvoda)) setKorpa([...korpa, idProizvoda]);
  }

  function nekaFunk(idProizvoda) {
    setBtnPopup(true);
    setTacnoTajProizvod(proizvodi.find((e) => e.id === idProizvoda));
  }

  return (
    <div style={{ position: "relative" }}>
      <Hero prijavljeniKorisnikStateT={prijavljeniKorisnikState} />

      <div className="card-grid">
        <a className="dodajProizvodBtn" href="noviproizvod">
          Dodaj
        </a>
        <a className="korpaBtn" href="korpa">
          Korpa {korpa.length}
        </a>
        {proizvodi.map((proizvod) => {
          return (
            <div className="kartica" key={proizvod.id}>
              <h4 className="cenaProizvodaUgaona">{proizvod.cena},00- RSD</h4>
              <div className="naslov-slika">
                <img src={proizvod.slike[0]} alt="dzungla medved kiba" />
              </div>
              <div className="opis">{proizvod.naziv}</div>
              <div className="dvadugmeta">
                <button className="btn" onClick={() => nekaFunk(proizvod.id)}>
                  Detalji
                </button>
                <button
                  className="btn2"
                  onClick={() => dodajUKorpu(proizvod.id)}
                >
                  U korpu
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Popup
        triggered={btnPopup}
        setTriggered={setBtnPopup}
        proizvod={tacnoTajProizvod}
      ></Popup>
    </div>
  );
}
