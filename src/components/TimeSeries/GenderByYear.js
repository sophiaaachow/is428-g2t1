import { useEffect, useState } from 'react'
import * as d3 from "d3"

import spotifyCsv from '../../spotify.csv'

function GenderByYear() {
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
            width = 1000 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

            var svg = d3.select("#genderByYear")
                .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
            
            svg.append("g")
                .selectAll(".line-path")
                .data(Array.from(rollup.values()))
                .enter()
                .append("path")
                    .attr("fill", "none")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1.5)
                    .attr("d", (() => {}), function(d) {d3.line()
                        .x(x((f, i) => Array.from(d.keys())[i]))
                        .y(y((f, i) => Array.from(d.values())[i]))
                    })

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
        } else {
            getData()
        }
    }, [data])

    return (
        <>
            <h5 className='spotifyGreen'>Annual Distribution of Songs by Artist's Gender</h5>
            <p>How distribution of artist gender among the top 100 tracks on Spotify changes over time.</p>
            <div id="genderByYear"></div>
        </>
    );
}

export default GenderByYear;