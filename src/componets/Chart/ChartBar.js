import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100)+'%';
  }
  //objasnjenje za liniju 9,posto mi moramo da prikazemo visinu popunjenosti chartBara u zavisnosti od troskova za taj mesec,
  //stavljamo visinu popunjenosti na pocetku 0%,e sad proveravamo maksimalnu velicinu da li je veca od nule(posto moze biti jednaka 0 ako nema troskova za taj mesec)
  //i sad racunmo visinu popunjenosti bara tako sto delimo vr troska sa max velicinom i mnozimo sa sto i to zaokruzujemo na ceo br(math.round) i pretvaramo u string(+'%')
  //i tako dobijamo procenat popunjenosti bara u odnosu na maxVr
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
//u 20 liniji korstimo dinamicki stajl,posto properti stajl ocekuje JS objekat, mi prosledjujemo visinu popunjenosti da je jednaka vrednosti koju smo izracunali(barFillHeight)

export default ChartBar;
