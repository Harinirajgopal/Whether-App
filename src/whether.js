import { useState } from "react";
import { fetchweather } from "./App.js";
import moment from "moment";
import "./App.css"


function App() {
    const [query, setQuery] = useState("")
    const [whether, setWhether] = useState("")
    const change = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    const search = async (e) => {
        if (e.code === "Enter") {
            let data = await fetchweather(query)
            setWhether(data)
            console.log(data)
        }
    }
    return (
        <div>
            <input type="text" value={query} onChange={change} onKeyPress={search} placeholder="Enter City/state/country Name...!" />


            {whether.main &&

                <div>
                    <div id="city">Name:{whether.name}<span>{whether.sys.country}</span></div>
                    <div id="temp">Temp:{Math.round(whether.main.temp)} &deg;C</div>
                    <div id="pres">Pressure:{whether.main.pressure}hPa</div>
                    <div id="humidity">humidity:{whether.main.humidity}</div>
                    <div id="wind">Wind Speed:{whether.wind.speed}miles/hour</div>
                    <div>Sunrice:{new Date(whether.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
                    <div>SunSet:{new Date(whether.sys.sunset * 1000).toLocaleTimeString('en-IN')}</div>
                    <img src={`https://openweathermap.org/img/wn/${whether.weather[0].icon}@2x.png`} />
                    <p>{whether.weather[0].description}</p>

                    <div>
                        Day:{moment().format('dddd')},{moment().format("MMM Do YY")}
                    </div>
                </div>



            }
        </div>
    )
}

export default App;



<br />

// .........task .............................//



export function Task() {
    const [query, setQuery] = useState("")
    const [whether, setWhether] = useState("")
    const change = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    const search = async (e) => {
        if (e.code === "Enter") {
            let data = await fetchweather(query)
            setWhether(data)
            console.log(data)
        }
    }
    const refresh = () => {
        window.location.reload()
    }
    return (
        <div>

            <h1 style={{ "textAlign": "center" }}> Weather Forecast Data</h1>
            <div className="card" style={{ "margin-top": "50px", "backgroundColor": "teal" }}>
                <div className="card-head">
                    <div className="row">
                        <div className="col-10 my-2 ms-2">
                            <input type="text" className="form-control" value={query} onChange={change} onKeyPress={search} placeholder="Enter City/state/country Name...!" />
                        </div>
                        <div className="col-1 my-2">
                            <button onClick={refresh} class="btn text-white"><i class="fa-solid fa-rotate"></i></button>
                        </div>
                    </div>


                </div>
                { whether.main &&

                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item text-bg-primary p-1 " ><span><p className="firstpara">Day: {moment().format('dddd')},{moment().format("MMM Do YY")}</p></span>
                            <span><p> weather Desc: {whether.weather[0].description}</p></span>

                        </li>
                        <li className="list-group-item  text-bg-primary ">
                            <span><p className="firstpara" >Temp:{Math.round(whether.main.temp)} &deg;C</p></span>
                            <span className="bg-primary" ><p> Humidity: {whether.main.humidity}%</p></span>

                        </li>
                        <li className="list-group-item text-bg-primary p-1">
                            <span><p className="firstpara" >Sunrise:{new Date(whether.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p></span>
                            <span className="bg-primary"><p>SunSet:{new Date(whether.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p></span>

                        </li>

                        <li className="list-group-item text-bg-primary p-1">
                            <span><p className="firstpara" >WindSpeed :  {whether.wind.speed}miles/hour</p></span>
                            <span className="bg-primary"><p>Wind Direction: {whether.wind.deg}&deg</p></span>
                        </li>

                        <li className="list-group-item text-bg-primary p-1">
                            <span><img src={`https://openweathermap.org/img/wn/${whether.weather[0].icon}@2x.png`} /></span>
                            <span className="bg-primary"> Clouds:{whether.clouds.all}</span>
                        </li>

                    </ul>
                }
            </div>

        </div>
    )
}







