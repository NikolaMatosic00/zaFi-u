import React from "react";
import "./Hero.css";

export function Hero({ prijavljeniKorisnikStateT }) {
  const [prijavljeniKorisnik, setPrijavljeniKorisnik] =
    prijavljeniKorisnikStateT;

  return (
    <div>
      <div class="traka">
        {prijavljeniKorisnik.korisnickoIme == null ? (
          <h1>Moj PetShopić</h1>
        ) : (
          <h1>DObrodošli nazad, {prijavljeniKorisnik.korisnickoIme}</h1>
        )}
        <div className="narandzasta"></div>
        <div className="plava"></div>
      </div>
    </div>
  );
}
