import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { SviProizvodiComponent } from "./SviProizvodiComponent";
import { HeaderComponent } from "./HeaderComponent";
import { NoviProizvodComponent } from "./NoviProizvodComponent";
import { KorpaComponent } from "./KorpaComponent";
import { KorisniciComponent } from "./KorisniciComponent";
import { RegistracijaComponent } from "./RegistracijaComponent";
import { LoginComponent } from "./LoginComponent";

function App() {
  const [korpa, setKorpa] = useState([]);
  const firestoreProizvodiCollectionRef = collection(db, "proizvodi");
  const [proizvodi, setProizvodi] = useState([]);
  const [korisnici, setKorinsici] = useState([]);
  const firestoreKorisniciCollectionRef = collection(db, "korisnici");
  const [refreshKorisnike, setRefreshKorisnike] = useState(0);
  const [loginPopup, setLoginPopup] = useState(false);
  const [prijavljeniKorisnik, setPrijavljeniKorisnik] = useState({});

  useEffect(() => {
    const funk = async () => {
      const data = await getDocs(firestoreProizvodiCollectionRef);
      setProizvodi(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    funk();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(firestoreKorisniciCollectionRef);
      setKorinsici(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [refreshKorisnike]);

  useEffect(() => {
    const korpaLocalStorage = JSON.parse(localStorage.getItem("korpa")) ?? [];
    setKorpa(korpaLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("korpa", JSON.stringify(korpa));
  }, [korpa]);

  return (
    <div className="App">
      <HeaderComponent
        loginPopupState={[loginPopup, setLoginPopup]}
        prijavljeniKorisnikState={[prijavljeniKorisnik, setPrijavljeniKorisnik]}
      />
      <LoginComponent
        triggered={loginPopup}
        setTriggered={setLoginPopup}
        prosledjeniKorisnici={[korisnici, setKorinsici]}
        prijavljeniKorisnikState={[prijavljeniKorisnik, setPrijavljeniKorisnik]}
      />

      <Router>
        <Switch>
          <Route path="/" exact>
            <SviProizvodiComponent
              prijavljeniKorisnikState={[
                prijavljeniKorisnik,
                setPrijavljeniKorisnik,
              ]}
              prosledjenaKorpa={[korpa, setKorpa]}
              prosledjeniProizvodi={[proizvodi, setProizvodi]}
            />
          </Route>
          <Route path="/noviproizvod" exact>
            <NoviProizvodComponent />
          </Route>
          <Route path="/korpa" exact>
            <KorpaComponent
              prosledjenaKorpa={[korpa, setKorpa]}
              prosledjeniProizvodi={[proizvodi, setProizvodi]}
            />
          </Route>
          <Route path="/korisnici" exact>
            <KorisniciComponent
              obnoviKorisnike={[refreshKorisnike, setRefreshKorisnike]}
              firestoreKorisniciCollectionRef={firestoreKorisniciCollectionRef}
              prosledjeniKorisnici={[korisnici, setKorinsici]}
            />
          </Route>
          <Route path="/registracija" exact>
            <RegistracijaComponent
              obnoviKorisnike={[refreshKorisnike, setRefreshKorisnike]}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
