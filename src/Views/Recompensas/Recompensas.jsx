import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Recompensas.scss";

const animal = {
	elefantetcc: require('./Imagens/elefantetcc.png'),
	coelhotcc: require('./Imagens/coelhotcc.png'),
	leaotcc: require('./Imagens/leaotcc.png'),
	macacotcc: require('./Imagens/macacotcc.png'),
	tigretcc: require('./Imagens/trigretcc.png'),
	extratcc: require('./Imagens/extratcc.png'),
	sapotcc: require('./Imagens/sapotcc.png'),
}



export default function Recompensas() {
	const [achievementsData, setAchievementsData] = useState()
  useEffect(() => {
    axios.get("http://localhost:5000/achievement").then(res =>{ res.data.error ? setAchievementsData([{}]): setAchievementsData(res.data)});
  }, []);
  

  // Lista de IDs dos achievements que você deseja renderizar
  const idsParaRenderizar = achievementsData ? achievementsData.map(item => item.achievements): "";

  return (
    <>
		<a className='SetaEsquerda' href='/'> <i className="fas fa-arrow-left"></i> </a>
		{ achievementsData &&  achievementsData.length <= 5 ? (
			
			<>
     
      <div className="flx1">
        <div className="flo">
          <div className="v">
            {idsParaRenderizar.includes(1) && (
              <div className="f">
                <img src={animal.elefantetcc} alt="" id='1'/>
              </div>
            )}
            {idsParaRenderizar.includes(2) && (
              <div className="f">
                <img src={animal.coelhotcc} alt="" id='2'/>
              </div>
            )}
            {idsParaRenderizar.includes(3) && (
              <div className="f">
                <img src={animal.leaotcc} alt="" id="3"/>
              </div>
            )}
          </div>
        
          <div className="v">
            {idsParaRenderizar.includes(4) && (
              <div className="f">
                <img src={animal.macacotcc} alt="" id="4"/>
              </div>
            )}
            {idsParaRenderizar.includes(5) && (
              <div className="f">
                <img src={animal.tigretcc} alt="" id="5"/>
              </div>
            )}
						{idsParaRenderizar.includes(6) && (
              <div className="f">
                <img src={animal.sapotcc} alt="" id="5"/>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
		): (
			<>
			<div className="flx">
				<div className="flz">
					<div className="f1">
						<img src={animal.elefantetcc} alt="" />
					</div>
					<div className="f2">
						<img src={animal.coelhotcc} alt="" />
					</div>
					<div className="f3">
						<img src={animal.leaotcc} alt="" />
					</div>
				</div>
				<div className="mid">
					<div className="f4">
						<img src={animal.extratcc} alt="" />
					</div>
				</div>
				<div className="fly">
					<div className="f5">
						<img src={animal.macacotcc} alt="" />
					</div>
					<div className="f6">
						<img src={animal.tigretcc} alt="" />
					</div>
					<div className="f7">
						<img src={animal.sapotcc} alt="" />
					</div>
				</div>
			</div>
		</>
		)}
		</>
  );
	
}