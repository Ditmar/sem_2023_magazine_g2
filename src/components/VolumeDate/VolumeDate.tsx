import * as React from 'react';


interface VolumeDateProps {
  date: string;
  volume: string;
  number: string;
}

const SingleVolumeDateComponent: React.FC<VolumeDateProps> = ({ date, volume,number }) => {
  return (
    <div style={{ 
        cursor: 'pointer', 
        textAlign: 'center',
        backgroundColor:'transparent',
        width:'100%',
        display: 'flex',
        justifyContent:'space-around'
        }}>
      <h3 style={{  
        padding: '15px', 
        textAlign: 'center',
        fontSize: '12px',
        color: 'rgba(1, 70, 29, 1)',
        background:'rgba(255, 255, 255, 1)',
        width:'50%'
        }}
        >{date}|{volume}|{number}</h3>
    </div>
  );
};

const SingleVolumeDatePage: React.FC = () => {
 
  const fecha = "ABRIL 16.2023";
  const volumen = "Vol.1";
  const number = "Nu.1"

  return (
    <div>
      <SingleVolumeDateComponent date={fecha} volume={volumen} number={number}/>
    </div>
  );
};

export default SingleVolumeDatePage;


