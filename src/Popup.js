import React from "react";
import { useEffect, useState } from "react";

export function Popup(props) {
  const [oce, setOce] = useState({
    jedan: 0,
    dva: 0,
    tri: 0,
    cetri: 0,
    pet: 0,
    sest: 0,
    sedam: 0,
    osam: 0,
    devet: 0,
    deset: 0,
  });

  const nekaF = () => {
    let listaOcena = props.proizvod.ocene;

    const noveOcene = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
    };

    for (let i = 0; i < listaOcena.length; i++) {
      const ocena = listaOcena[i];
      noveOcene[ocena]++;
    }

    setOce(noveOcene);
  };

  return props.triggered ? (
    <div className="popup">
      <div className="popup--inner">
        <button
          className="close--btn"
          onClick={() => props.setTriggered(false)}
        >
          X
        </button>
        <div className="naziv--opis">
          <h2>{props.proizvod.naziv}</h2>
          <h4>{props.proizvod.kratakOpis}</h4>
        </div>
        <div className="ostali--podaci">
          <h3>Opis: {props.proizvod.detaljanOpis}</h3>
          <h3>Tip: {props.proizvod.tip}</h3>
          <h3>Prosecna ocena: {props.proizvod.prosecnaOcena}</h3>
          <h3>Ukupno Ocena: {props.proizvod.ocene.length}</h3>
          <button className="vidiRapoBtn" onClick={() => nekaF()}>
            Vidi raspored ocena
          </button>

          <div class="ocena-container">
            <div className="ocena">
              <span className="ocena-label">1</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[1] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[1]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">2</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[2] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[2]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">3</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[3] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[3]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">4</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[4] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[4]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">5</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[5] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[5]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">6</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[6] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[6]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">7</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[7] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[7]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">8</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[8] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[8]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">9</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[9] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[9]}
              </div>
            </div>
            <div className="ocena">
              <span className="ocena-label">10</span>
              <div
                className="ocena-traka"
                style={{
                  width: `${(oce[10] / props.proizvod.ocene.length) * 100}%`,
                }}
              >
                {oce[10]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
