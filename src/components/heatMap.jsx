import * as d3 from 'd3';

const HeatMap = ({data}) => {

    console.log(data)

    if(data !== null && data !== undefined) {
        const dataset = data.monthlyVariance;
        const baseTemperature = data.baseTemperature;

        console.log(dataset, baseTemperature);

        const height = 450;
        const width = 900;
        const padding = 60;
        const minYear = d3.min(dataset, (d) => d.year);
        const maxYear = d3.max(dataset, (d) => d.year);

        const svg = d3.select(".render")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

            const xScale = d3.scaleLinear()
                        .domain([minYear, maxYear + 1])
                        .range([padding, width - padding]);

            const yScale = d3.scaleTime()
                        .domain([new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 12, 0, 0, 0, 0, 0)])
                        .range([padding, height - padding])

            const xAxis = d3.axisBottom(xScale)
                            .tickFormat(d3.format('d'))

            const yAxis = d3.axisLeft(yScale)
                            .tickFormat(d3.timeFormat('%B'))



            svg.append('g')
            .call(xAxis)
            .attr("transform", "translate(0, " + (height - padding) + ")")
            .attr("id", "x-axis")

            svg.append('g')
            .call(yAxis)
            .attr("transform", "translate(" + (padding) +", 0)")
            .attr("id", "y-axis")


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
            .attr('data-year', (d) => d.year)
            .attr('data-month', (d) => d.month - 1)
            .attr('data-temp', (d) => baseTemperature + d.variance)
            .attr('height', (height - (2 * padding)) / 12)
            .attr('y', (d) => yScale(new Date(0, (d.month - 1), 0, 0, 0, 0, 0)))     
            .attr('width', (width - (2 * padding)) / (maxYear - minYear))
            .attr('x', (d) => xScale(d.year))
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