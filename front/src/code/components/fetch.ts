import type api from "../interfaces/schemas";

export let url = `http://localhost:7777/`

export default async function search(
  changeState: React.Dispatch<React.SetStateAction<any>>,
  fetchurl?: string
) {

  if(fetchurl !== undefined){
    url = fetchurl
  }

  const res = await fetch(url);

  const data = await res.json();

  /*console.log(data);*/

  changeState(data);
}