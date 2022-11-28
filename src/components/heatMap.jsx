const HeatMap = ({ dataset }) => {
    console.log(dataset);

    return ( 
        <main className="container">
            <div className="chart">
                <h1 id="title">Monthly Global Land-Surface Temperature</h1>
                <p id="description">1753 - 2015: base temperature 8.66℃</p>
                <div className="render">
                    { /*  renders the data chart here  */ }
                </div>
            </div>
        </main>
    );
}
 
export default HeatMap;