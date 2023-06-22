import { useState, useEffect } from "react";
import type api from "../interfaces/schemas";
import search from "../components/fetch";
import year from "../interfaces/years";
import city from "../interfaces/city";

import NavMenu from "../components/NavBar";
import Footer from "../components/Footer";

import Slide from "../components/Slides";

export default function HomePage() {
  let [data, setData] = useState<api>();
  let [year, SetYear] = useState<year>({
    rows: [
      {
        ANO_BO: ``,
        count: `fetching...`,
      },
    ],
  });
  let [places, setPlaces] = useState<api>();
  let [city, setCity] = useState<city>({
    rows: [
      {
        MUNICIPIO_ELABORACAO: `Loading...`,
        count: `Load`,
      },
    ],
  });

  useEffect(function () {
    search(setData);
    search(SetYear, `http://localhost:7777/year?year=2022`);
    search(setPlaces, `http://localhost:7777/place`);
    search(setCity, `http://localhost:7777/city?city=S.Paulo`);
  });

  let compl = JSON.stringify(data);

  return (
    <>
      <NavMenu />

      <Slide
        title={[
          `Combata à violência`,
          `Cuidado com a ${places?.rows[0].DESC_TIPOLOCAL} e ${places?.rows[1].DESC_TIPOLOCAL}`,
          `Cuidado com as festas`,
        ]}
        subtitle={[
          `Em ${year.rows[0].ANO_BO} hoveram ${year.rows[0].count} mortes por feminicídio`,
          ` ${places?.rows[0].DESC_TIPOLOCAL}: ${places?.rows[0].count} mortes e ${places?.rows[1].DESC_TIPOLOCAL}: ${places?.rows[1].count} mortes`,
          `Dezembro é o mês mais perigoso;`,
        ]}
        alts={[`Foto Ilustrativa`, `Foto Ilustrativa`, `Foto Ilustrativa`]}
        images={[
          `https://images.pexels.com/photos/6003572/pexels-photo-6003572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          `https://images.pexels.com/photos/12794845/pexels-photo-12794845.jpeg`,
          `https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ]}
      />

      <div className="my-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center"> Cidades mais perigosas</h2>

        <table className="table w-50 ">
          <thead>
            <tr>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">São Paulo</th>
              <td>239</td>
            </tr>
            <tr>
              <th scope="row">Campinas</th>
              <td>49</td>
            </tr>
            <tr>
              <th scope="row">Guarulhos</th>
<td>28</td>
            </tr>
          </tbody>
        </table>

        <p className="text-center"></p>

        {/* <img className="w-50 border rounded my-2" src="https://images.pexels.com/photos/17203717/pexels-photo-17203717/free-photo-of-himalaia.jpeg" alt="casa" />
         */}
      </div>

      <Footer />
    </>
  );
}
