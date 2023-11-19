import styles from "./Recompensas.scss";

const animal = {
	coelhotcc : require('./Imagens/coelhotcc.png'),
	elefantetcc : require('./Imagens/elefantetcc.png'),
	leaotcc : require('./Imagens/leaotcc.png'),
	extratcc : require('./Imagens/extratcc.png'),
	macacotcc : require('./Imagens/macacotcc.png'),
	sapotcc : require('./Imagens/sapotcc.png'),
	tigretcc : require('./Imagens/trigretcc.png'),
}
export default function Recompensas() {
  return (
    <>
      <div className="flx">
        <div className="flz">
          <div className="f1">
						<img  src={animal.elefantetcc} alt="" />
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
  );
}
