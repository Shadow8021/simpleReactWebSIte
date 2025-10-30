import { datas } from "./man"
import "./services.css"
// import image from "../../assets/images/services/img3.png"


export const Services = () => {
  return (
    <div className='services'>
      <h2 className="serviceH">Nos Services</h2>
      {datas.map((data) => (
        <div className={data.id % 2 == 0 ? `serviceCard` : "serviceCard2"}>
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




// <div className='serviceCard'>
//   <div >
//     <h2> Developpement web et mobile</h2>
//     <p>Creation des site vitrines, e-commerces,web apps</p>
//     <p>Applications Android/iOS</p>
//     <p>Maintenance et hébergement</p>
//   </div>
//   <div className='serviceImageContainer'>
//     <img src={image} alt="logo" className='serviceImage' />
//   </div>
// </div>