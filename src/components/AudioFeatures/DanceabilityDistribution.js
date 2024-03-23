import { useEffect, useState } from 'react'
import * as d3 from "d3"

import spotifyCsv from '../../spotify.csv'

function DanceabilityDistribution() {
    const [data, setData] = useState([])

    const getData = async () => {
        let tempData = []
        await d3.csv(spotifyCsv,
            (() => {}),
            function(d) {
                tempData.push(d)
            }
        )
        setData(tempData)
    }

    useEffect(() => {
        if (data.length > 0) {
            var margin = {top: 30, right: 50, bottom: 50, left: 50},
                width = 600 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;
    
            var svg = d3.select("#danceabilityDistribution")
                .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var x = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return +d.danceability })]).nice()
                .range([0, width]);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            var histogram = d3.histogram()
                .value(function(d) { return d.danceability; })
                .domain(x.domain())
                .thresholds(x.ticks(10))

            var bins = histogram(data)

            var y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, d3.max(bins, function(d) { return d.length; })]).nice()

            svg.append("g")
                .call(d3.axisLeft(y));

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
                .text("Danceability");

            function onMouseOver() {
                d3.select(this).attr('fill', '#EBF4CF')
        
            }

            function onMouseOut() {
                d3.select(this).attr('fill', '#1DB954')
            }

            svg.selectAll("rect")
                .data(bins)
                .enter()
                .append("rect")
                .on("mouseover", onMouseOver)
                .on("mouseout", onMouseOut)
                .attr("x", 1)
                .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1 ; })
                .transition()
                .ease(d3.easeLinear)
                .duration(500)
                .delay((d, i) => i * 50)
                .attr("height", function(d) { return height - y(d.length); })
                .attr("fill", '#1DB954')

            svg.selectAll(".label")
                .data(bins)
                .enter().append("text")
                .attr("x", d => x(d.x0) + (x(d.x1) - x(d.x0)) / 2)
                .attr("y", d => y(d.length) - 5)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-size", "10px")
                .style('fill', 'white')
                .text(d => d.length);
        } else {
            getData()
        }
    }, [data])

    return (
        <>
            <h5 className='spotifyGreen'>Distribution of Danceability of Songs</h5>
            <p>How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. 100 is most danceable.</p>
            <div id="danceabilityDistribution"></div>
        </>
    );
}

export default DanceabilityDistribution;