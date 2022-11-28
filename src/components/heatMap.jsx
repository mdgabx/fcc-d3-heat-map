import * as d3 from 'd3';

const HeatMap = ({data}) => {

    console.log(data)

    if(data !== null && data !== undefined) {
        const dataset = data.monthlyVariance;

        console.log(dataset);

        const height = 400;
        const width = 800;
        const padding = 40;

        const svg = d3.select(".render")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "cell")
            .attr("fill", (d) => {
                console.log('d', d)

               if(d.variance <= -1) {
                    return 'SteelBlue'
               } else if(d.variance <= 0) {
                    return 'LightSteelBlue'
               } else if(d.variance <= 1) {
                    return "orange";
               } else {
                    return "red";
               }

            })


        const xScale = d3.scaleLinear()
                        .range([padding, width - padding]);

        const yScale = d3.scaleTime()
                        .range([padding, height - padding])

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

      

        svg.append('g')
            .call(xAxis)
            .attr("transform", "translate(0, " + (height - padding) + ")")
            .attr("id", "x-axis");

        svg.append('g')
            .call(yAxis)
            .attr("transform", "translate(" + (padding) +", 0)")
            .attr("id", "y-axis")

    }




        
   

    return ( 
        <main className="container">
            <div className="chart">
                <h1 id="title">Monthly Global Land-Surface Temperature</h1>
                <p id="description">1753 - 2015: base temperature 8.66℃</p>
                <div className="render">
                    
                </div>
            </div>
        </main>
    );
}
 
export default HeatMap;