function sumTable() {
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const endResult = document.getElementById('sum');
    let result = 0;
    evenTds.forEach((td) => result += Number(td.textContent));
    endResult.textContent = result;  
}