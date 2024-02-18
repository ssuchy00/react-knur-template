import React, { useEffect , useState} from "react";
import axios from "axios";

export const Pogoda = () => {

    const [kordy, setKordy] = useState({lat: 21, long: 37});
    const [data, setData] = useState(null)
    const [style, setStyle] = useState(null)
    const [temp, setTemp] = useState(null)

    const colors = [
        [-30, "#004466"],
        [-10, "#0088cc"],
        [0, "#4dc3ff"],
        [10, "#ffd4b8"],
        [20, "#ffb17d"],
        [30, "#ffa64d"],
        [40, "#ff4d4d"],
    ]
    useEffect(()=>{
        const fetchData = async () => {
            const res = await axios.get("https://api.open-meteo.com/v1/forecast?latitude="+kordy.lat+"&longitude="+kordy.long+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
            console.log(res)
            setData(res.data);
            const temp = res.data.current.temperature_2m
            setTemp(temp)
        }

        if(kordy)fetchData();
    }, [kordy])


    useEffect(()=>{
        let color = null;
            for(const [key, value] of colors)
            {
                if(temp < key)
                {
                    color = value;
                    break;
                }
                color = "red";
            }
             
            setStyle({
                backgroundColor: color
            })

            if(temp <= -10)alert("ale pizga");
    }, [temp])

    const zmienKordy = (e) => {
        if(!kordy)return;
        e.preventDefault();
        setKordy({long: document.formik.dupalong.value, lat: document.formik.dupalat.value})
    }

    return (
        <>
            {kordy && style && ( <>
            <form name="formik">
                <input type="text" placeholder="Latitude" name="dupalong" defaultValue={kordy.lat}/>
                <input type="text" placeholder="Longitude" name="dupalat" defaultValue={kordy.long}/>
                <button onClick={zmienKordy}>Zmień kordy</button>
            </form>
            </>)
            }
            {
            data &&
            <div style={style}>
                <input type="text" onChange={(e)=>setTemp(e.target.value)} defaultValue={data.current.temperature_2m}/> &lt; do testowania temperaturki uwu 
                <p>temperaturka: {data.current.temperature_2m} {data.current_units.temperature_2m}</p>
                <p>Wietrzyk: {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}</p>
                <p>Wietrzyk: {new Date(data.current.time).toTimeString()}</p>
            </div>
            }
            
    </>
    )
}
