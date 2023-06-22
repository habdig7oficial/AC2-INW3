import search from "./fetch";
import { useState } from "react";
import type feminicidio from "../interfaces/schemas";

export default function Table() {
  let [data, setData] = useState<feminicidio>();

  search(setData);

  let fild_type: Array<JSX.Element> = [];
  let rows: Array<JSX.Element> = [];

  if (data != undefined) {

    let keys: Array<string>

    keys = Object.keys(data.rows[0]) 

    for (let i = 0; i < data.fields.length; i++) {
      fild_type[i] = (
        <>
          <th key={i} scope="col">
            {data.fields[i].name}
          </th>
        </>
      );

    }

    /*
    for (let j = 0; j < data.rows.length; j++) {

        let aux: JSX.Element[] = []

      for (let i = 0; i < keys.length; i++) {
        aux[i]=
        <>
            <tr>{data.rows[j][`${keys[i]}`]}</tr>
        </>       
      }
      
      rows[j] = 
      <>
        <th scope="row">
          {aux}
        </th>
      </> 

    }*/

    for (let i = 0; i < data.rows.length; i++) {
      /* Eu sei que da pra fzr por loo[p ] */
        rows[i] = 
        <>
          <tr key={i}>
            <td key={i}>{data.rows[i][`DEPARTAMENTO_CIRCUNSCRICAO`]}</td>
            <td key={i}>{data.rows[i][`SECCIONAL_CIRCUNSCRICAO`]}</td> 
            <td key={i}>{data.rows[i][`MUNICIPIO_CIRCUNSCRICAO`]}</td>
            <td key={i}>{data.rows[i][`DP_CIRCUNSCRICAO`]}</td> 
            <td key={i}>{data.rows[i][`HD`]}</td>  
            <td key={i}>{data.rows[i][`NVITIMAS`]}</td>     
            <td key={i}>{data.rows[i][`ID_DELEGACIA`]}</td> 
            <td key={i}>{data.rows[i][`MES_ESTATISTICA`]}</td> 
            <td key={i}>{data.rows[i][`ANO_ESTATISTICA`]}</td>
            <td key={i}>{data.rows[i][`DATAHORA_REGISTRO_BO`]}</td>
            <td key={i}>{data.rows[i][`NUM_BO`]}</td>  
            <td key={i}>{data.rows[i][`ANO_BO`]}</td>    
            <td key={i}>{data.rows[i][`MUNICIPIO_ELABORACAO`]}</td>
            <td key={i}>{data.rows[i][`DP_ELABORACAO`]}</td>
            <td key={i}>{data.rows[i][`DATA_FATO`]}</td>
            <td key={i}>{data.rows[i][`HORA_FATO`]}</td>
            <td key={i}>{data.rows[i][`DESC_TIPOLOCAL`]}</td>
            <td key={i}>{data.rows[i][`LOGRADOURO`]}</td>
            <td key={i}>{data.rows[i][`NUMERO_LOGRADOURO`]}</td>

          


          </tr> 
        </>
    }

    //console.log(keys)
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>{fild_type}</tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  );
}
