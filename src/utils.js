export function groupByColumn (data, column) {
    return data.reduce((grouped, obj) => {
        let { year } = obj;
        let property = obj[column];
        if (!grouped[property]) grouped[property] = {};
        if (!grouped[property][year]) grouped[property][year] = 0;
        
        grouped[property][year] += 1;
        return grouped;
    }, {});
};