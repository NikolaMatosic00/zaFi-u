import React, { useEffect, useState } from "react";
import "./Korpa.css";

export function KorpaComponent({ prosledjenaKorpa, prosledjeniProizvodi }) {
  const [korpa, setKorpa] = prosledjenaKorpa;
  const [sviProizvodi, setSviProizvodi] = prosledjeniProizvodi;
  const [proizvodiIzKorpe, setProizvodiIzKorpe] = useState([]);

  useEffect(() => {
    let proizvodiZaDodavanje = sviProizvodi.filter((e) => korpa.includes(e.id));
    setProizvodiIzKorpe(proizvodiZaDodavanje);
  }, [korpa, sviProizvodi]);

  function obrisi(id) {
    let korpaBezObrisanog;
    korpaBezObrisanog = korpa.filter((e) => e !== id);
    setKorpa(korpaBezObrisanog);
  }

  return (
    <div>
      <div className="plava-korpa"></div>
      <div className="narandzasta-korpa"></div>
      <div className="kartica-cele-korpe">
        {proizvodiIzKorpe.map((proizvod) => {
          return (
            <div key={proizvod.id} className="karticaa-korpa">
              <div className="slika-korpa">
                <img src={proizvod.slike[0]} alt="dzungla medved kiba" />
              </div>
              <div className="naziv">
                <h2>{proizvod.naziv}</h2>
              </div>
              <div className="cena">
                <h2>{proizvod.cena},00- rsd</h2>
              </div>
              <button className="btnUkloni" onClick={() => obrisi(proizvod.id)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
