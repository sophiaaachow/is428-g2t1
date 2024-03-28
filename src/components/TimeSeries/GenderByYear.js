import { useEffect, useState } from 'react'
import * as d3 from "d3"

import spotifyCsv from '../../spotify.csv'
import { groupByColumn } from '../../utils';

function GenderByYear() {
    const [data, setData] = useState([]);

    const getData = async () => {
        let data = await d3.csv(spotifyCsv)
        if (data.length > 0 ) setData(data);
    }

    useEffect(() => {
        if (data.length > 0) {
            const isMobile = window.innerWidth < 1024;
            const margin = {top: 30, right: 50, bottom: 50, left: 50};
            const width = isMobile ? window.innerWidth - margin.left - margin.right : 1000 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            var div = d3.select("#genderByYear").append("div")
                .attr("class", "tooltip")
                .attr("display", "none")
                .style("opacity", 0);

            var svg = d3.select("#genderByYear")
                .append("svg")
                    .attr("width", isMobile ? width: width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .style("-webkit-tap-highlight-color", "transparent")
                    .style("overflow", "visible")
                .append("g")
                    .attr("transform", isMobile ? "translate(15,15)" : "translate(" + margin.left + "," + margin.top + ")");

            var rollup = d3.rollup(data, D => D.length, d => d.gender, d => d.year)

            var x = d3.scaleTime()
                .domain(d3.extent(data, d => new Date(d.year)))
                .range([ 0, width ])

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x)
                    .ticks(d3.timeYear.every(1))
                    .tickFormat(d3.timeFormat("%Y")))

            var y = d3.scaleLinear()
                .domain([0, d3.max(Array.from(rollup.values()), d => d3.max(d.values()))]).nice()
                .range([ height, 0 ])

            svg.append("g")
                .call(d3.axisLeft(y))

            svg.append('g')
                .attr('class', 'y axis-grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('').ticks(10))
                    .style("stroke", "gray")
                    .style("opacity", 0.5)
                    .style("stroke-width", 0.5)
                    .style("stroke-dasharray", "3 3");

            svg.append("text")
                .attr("x", -margin.left)
                .attr("y", -15)
                .style("text-anchor", "start")
                .style("font-size", "10px")
                .style("fill", "white")
                .style("font-family", "sans-serif")
                .text("Number of Songs");

            svg.append("text")
                .attr("transform", "translate(" + width / 2 + "," + (height + margin.bottom / 2) + ")")
                .style("text-anchor", "middle")
                .style("font-size", "10px")
                .style("fill", "white")
                .style("font-family", "sans-serif")
                .attr("dy", "1em")
                .text("Year");

            // svg.selectAll(".label")
            //     .data(rollup)
            //     .enter().append("text")
            //     .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
            //     .attr("y", (d, i) => y(Array.from(rollup.values())[i]) - 5)
            //     .style("text-anchor", "middle")
            //     .style("font-family", "sans-serif")
            //     .style("font-size", "10px")
            //     .style('fill', 'white')
            //     .text((d, i) => Array.from(rollup.values())[i]);

            //Draw lines
            let yearByGenderData = groupByColumn(data, "gender");
            const colorScheme = ['#1DB954', '#B3B3B3', '#FFF']; //Group, Female, Male
            let index = 0;
            for (let type of Object.keys(yearByGenderData)) {
                let entries = Object.entries(yearByGenderData[type]);
                svg.append("path")
                    .datum(entries)
                    .attr("fill", "none")
                    .attr("stroke", colorScheme[index])
                    .attr("stroke-width", 2.5)
                    .attr("d", d3.line()
                        .x((d) => x(new Date(d[0])))
                        .y((d) => y(d[1]))
                    )    

                const input = entries.map(([year, value]) => ({ year: new Date(year), value }));

                svg.selectAll("dot")
                    .data(input)
                    .enter().append("circle")
                    .attr("r", 5)
                    .attr("cx", function(d) { return x(d.year); })
                    .attr("cy", function(d) { return y(d.value); })
                    .style("fill", "transparent")
                    .on("mouseover", function(event,d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(`Gender: <b> ${type}</b><br/>Year: <b>${d.year.getFullYear()}</b><br/> Songs: <b>${d.value}</b>`)
                        .style("left", (event.pageX) + "px")
                        .style("top", (event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                    div.transition()
                        .duration(500)
                        .style("opacity", 0);
                    })
                index += 1        
            }

            //Alternative tooltip, only shows for 1 line though
            // const tooltip = svg.append("g");
            // const bisect = d3.bisector(d => d.year).center;
            // const input = Object.entries(yearByGenderData['Male']).map(item => {
            //     return { year: new Date(item[0]), value: item[1] };
            // });
            
            // function pointermoved(event) {
            //     const i = bisect(input, x.invert(d3.pointer(event)[0]));
            //     tooltip.style("display", null);
            //     tooltip.attr("transform", `translate(${x(new Date(input[i].year))},${y(input[i].value)})`);
            
            //     const path = tooltip.selectAll("path")
            //         .data([,])
            //         .join("path")
            //         .attr("fill", "white")
            //         .attr("stroke", "black");
            
            //     const text = tooltip.selectAll("text")
            //         .data([,])
            //         .join("text")
            //         .call(text => text
            //         .selectAll("tspan")
            //         .data([input[i].year.getFullYear(), input[i].value])
            //         .join("tspan")
            //             .attr("x", 0)
            //             .attr("y", (_, i) => `${i * 1.1}em`)
            //             .attr("font-weight", (_, i) => i ? null : "bold")
            //             .text(d => d));
            
            //     size(text, path);
            // }
        
            // function pointerleft() {
            //     tooltip.style("display", "none");
            // }
        
            // // Wraps the text with a callout path of the correct size, as measured in the page.
            // function size(text, path) {
            //     const {x, y, width: w, height: h} = text.node().getBBox();
            //     text.attr("transform", `translate(${-w / 2},${15 - y})`);
            //     path.attr("d", `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
            // }

        }
        
    }, [data]);

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h5 className='spotifyGreen'>Annual Distribution of Songs by Artist's Gender</h5>
            <p>How distribution of artist gender among the top 100 tracks on Spotify changes over time.</p>
            <div id="genderByYear"></div>
        </>
    );
}

export default GenderByYear;