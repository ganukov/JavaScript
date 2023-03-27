function generateReport() {
    const names = document.querySelectorAll('tbody tr');
    const headers = document.querySelectorAll('th input');
    let allInfo = [];
    for (const header of headers) {
        let info = {};
        let name = header.name;
        for (const cell of names) {
            info[name] = cell.textContent;
            console.log(info)
        }

    }


    // for (const each of names) {
    //     let [employee, deparment, status, dateHired, benefits, salary, rating] = each.children;
    //     infoPerRow = {
    //         employee: employee.textContent,
    //         deparment: deparment.textContent,
    //         status: status.textContent,
    //         dateHired: dateHired.textContent,
    //         benefits: benefits.textContent,
    //         salary: salary.textContent,
    //         rating: rating.textContent,
    //     }
    //     allInfo.push(infoPerRow)
    // }
}