import { useEffect, useState } from 'react'
import * as d3 from "d3"

import spotifyCsv from '../../spotify.csv'

function GenderDistribution() {
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

            var svg = d3.select("#genderDistribution")
                .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var rollup = d3.rollup(data, D => D.length, d => d.gender)
            rollup = new Map([...rollup.entries()].sort((a, b) => b[1] - a[1]));

            var x = d3.scaleBand()
                .domain(d3.range(rollup.size))
                .padding(0.1)
                .range([ 0, width ])

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x)
                    .tickFormat((d, i) => Array.from(rollup.keys())[i]))

            var y = d3.scaleLinear()
                .domain([0, d3.max(Array.from(rollup.values()))]).nice()
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
            
            svg.append("g")
                .attr('fill', '#1DB954')
                .selectAll('rect')
                .data(rollup)
                .join('rect')
                    .attr('x', (d, i) => x(i))
                    .attr('y', (d, i) => y(Array.from(rollup.values())[i]))
                    .attr('height', (d, i) => y(0) - y(Array.from(rollup.values())[i]))
                    .attr('width', x.bandwidth())

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
                .text("Gender");

            svg.selectAll(".label")
                .data(rollup)
                .enter().append("text")
                .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
                .attr("y", (d, i) => y(Array.from(rollup.values())[i]) - 5)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-size", "10px")
                .style('fill', 'white')
                .text((d, i) => Array.from(rollup.values())[i]);
        } else {
            getData()
        }
    }, [data])

    return (
        <>
            <h5 className='spotifyGreen'>Distribution of Artist Gender</h5>
            <p>The gender of the main artist of the track.</p>
            <div id="genderDistribution"></div>
        </>
    );
}

export default GenderDistribution;