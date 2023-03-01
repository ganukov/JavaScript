// As a gladiator, Peter has to repair his broken equipment when he loses a fight. 
// His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count.  
// Every second lost game, his helmet is broken. 
// Every third lost game, his sword is broken. 
// When both his sword and helmet are broken in the same lost fight, his shield also breaks. 
// Every second time, when his shield brakes, his armor also needs to be repaired.  
// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.  

function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
            if (i % 3 === 0) {
                trashedShield++;
                trashedSword++
                if (trashedShield % 2 === 0) {
                    trashedArmor++
                }
            }
        } else if (i % 3 === 0) {
            trashedSword++;
        }
    }

    let expenses = (trashedHelmet * helmetPrice) + (trashedSword * swordPrice) + (trashedShield * shieldPrice) + (trashedArmor * armorPrice);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(23,

    12.50,

    21.50,

    40,

    200)