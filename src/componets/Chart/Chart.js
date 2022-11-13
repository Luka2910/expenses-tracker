import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    //moramo da oredimo maximalni trosak da bi znali koja ce biti maksimalna vr samog chart bara
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum=Math.max(...dataPointValues)
    //posto max funkcionise math.max(1,2,3) i odatle uzima vrednost,a posto je data points objekat morali smo da prodjemo kroz taj objekat map funkciom i da na taj nacin uzmemo samo properti value koji nam je potreban da se odredi maksimalna velicina troska i na taj nacin da se odredi max vel chart bara i to smo smestili u dataPointValues
    //a ovaj spreat operator(...) omogucava da se uzme svaku clan dataPointValues niza kao samostalni argument

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
  ))}
    </div>
  );
};
//ako se negde nasa chart komponenta koristi u aplikaciji prosledicemo joj podatke(dataPoints),sto se tice objasnjenja u sustini ovde radimo prolazimo kroz neki niz data points koji cemo proslediti chart komponenti,
//radimo map sto znaci da za svaki clan niza radimo chartBar cime omogucavamo da bude chartBarova koliko ima i podataka u nizu,a ove podatke sto prosledjujemo kao props u chartBaru(value,label...) time kontrolisemo kako ce podaci biti renderovani,label je natpis ispod svakog charta,
//svaki chart ima svoj unique label pa ga zato koristimo kao kljuc
export default Chart;
