function monthPrinter(number) {
    if (number > 12) {
        console.log('Error!');
    }
    if (number <= 0) {
        console.log('Error!');
    }
    else {
        if (number == 1) {
            console.log('January');
        }
    }
    {
        if (number == 2) {
            console.log('February');
        }
    }
    {
        if (number == 3) {
            console.log('March');
        }
    }
    {
        if (number == 4) {
            console.log('April');
        }
    }
    {
        if (number == 5) {
            console.log('May');
        }
    }
    {
        if (number == 6) {
            console.log('June');
        }
    }
    {
        if (number == 7) {
            console.log('July');
        }
    }
    {
        if (number == 8) {
            console.log('August');
        }
    }
    {
        if (number == 9) {
            console.log('September');
        }
    }
    {
        if (number == 10) {
            console.log('October');
        }
    }
    {
        if (number == 11) {
            console.log('November');
        }
    }
    {
        if (number == 12) {
            console.log('December');
        }
    }
}


monthPrinter(13);
monthPrinter(0);
monthPrinter(-1);