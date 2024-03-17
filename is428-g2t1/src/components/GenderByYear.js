import { useEffect } from 'react'
import * as d3 from "d3"

import spotifyCsv from '../spotify.csv'

function GenderbyYear() {
    useEffect(() => {
        d3.csv(spotifyCsv).then(data => {
            var margin = {top: 10, right: 30, bottom: 30, left: 60},
                width = 1000 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;
        
            var x = d3.scaleTime()
                .range([ 0, width ])
        
            var y = d3.scaleLinear()
                .range([ height, 0 ])

            var svg = d3.select("#genderByYear")
                .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");

            var rollup = d3.rollup(data, D => D.length, d => d.gender)

            x.domain(d3.extent(data, d => new Date(d.year)))
            y.domain([0, 100])

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x)
                    .ticks(d3.timeYear.every(1))
                    .tickFormat(d3.timeFormat("%Y")))

            svg.append("g")
                .call(d3.axisLeft(y))

            var line = d3.line()
                .x(d => x(d.date))
                .y(d => y(d.acousticness))

            var groups = d3.group(data, d => d.gender)
            console.log(groups.keys())

            svg.append("path")
                .data(data)
                .attr("fill", "none")
                .attr("stroke", "white")
                .attr("stroke-width", 2)
                .attr("d", line)
        })
    })

    return (
        <>
            <h5 className='p-2'>Distribution of Artist Gender Over Time</h5>
            <div id="genderByYear"></div>
        </>
    );
}

export default GenderbyYear;