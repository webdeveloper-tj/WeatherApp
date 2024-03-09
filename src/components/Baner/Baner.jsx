import "./Baner.css";
function Baner({ data }) {
  if (
    !data ||
    !data.sys ||
    !data.weather ||
    !data.main ||
    !data.clouds ||
    !data.wind
  ) {
    return (
      <div className="loading-box">
        <h1 data-text="Loading...">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="baner">
      <div className="weather bg-piramry p-2">
        <kbd className="country">{data.sys.country}</kbd>
        <h1 className="display-4 text-center text-secondary">{data.name}</h1>
        {data.weather.map((item) => (
          <div key={item.id} className="box_weather">
            <p className="description">{item.description}</p>
            <div className="condition_weather">
              <p>{item.main}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt=""
                className="icon_weather"
              />
            </div>
          </div>
        ))}
      </div>

      <table className="table text-center table-hover border">
        <thead>
          <tr>
            <th>temp</th>
            <th>temp_min</th>
            <th>temp_max</th>
            <th>clouds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col">{Math.round(data.main.temp - 273.15, 5)}</td>
            <td>{Math.round(data.main.temp_min - 273.15, 2)}</td>
            <td>{Math.round(data.main.temp_max - 273.15, 2)}</td>
            <td>{data.clouds.all}%</td>
          </tr>
        </tbody>
      </table>
      <table className="table text-center  table-hover border">
        <thead className="thead-inverse">
          <tr>
            <th>timezone</th>
            <th>deg</th>
            <th>gust</th>
            <th>speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{data.timezone}</td>
            <td>{data.wind.deg}</td>
            <td>{data.wind.gust}</td>
            <td>{data.wind.speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Baner;
