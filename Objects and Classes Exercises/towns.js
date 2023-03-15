function solve(input) {
    let objs = [];
    for (const each of input) {
        let myObj = {};
        let [town, latitude, longitude] = each.split(' | ');
        myObj["town"] = town;
        myObj["latitude"] = Number(latitude).toFixed(2);
        myObj["longitude"] = Number(longitude).toFixed(2);
        objs.push(myObj);
    }
    for (const obj of objs) {
        console.log(obj)
    }
   
}

solve(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])