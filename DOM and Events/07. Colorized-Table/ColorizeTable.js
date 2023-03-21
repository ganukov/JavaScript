function colorize() {
    const evenTds = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    console.log(evenTds)
    evenTds.forEach((tr) => tr.style = 'background:Teal')
}