import { datas } from "./man"
import "./services.css"

export const Services = () => {
  return (
    <div className='services'>
      <h2 className="serviceH">Nos Services</h2>
      {datas.map((data) => (
        <div key={data.id} className={data.id % 2 == 0 ? `serviceCard` : "serviceCard serviceCard2"}>
          <div className="serviceInfo">
            <h2 className="titreService">{data.titre}</h2>
            <p className="sousTitre">{data.sousTitre}</p>
          </div>
          <div className='serviceImageContainer'>
            <img src={data.image} alt="logo" className='serviceImage' />
          </div>
        </div>
      ))}
    </div>


  );
}
