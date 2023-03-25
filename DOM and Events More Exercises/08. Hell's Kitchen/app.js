function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const info = document.querySelector('textarea').value;
      const infoRestaurant = document.getElementById('bestRestaurant').children[2];
      const infoWorkers = document.getElementById('workers').children[2];
      console.log(infoRestaurant)
      let newInfo = JSON.parse(info);

      let restaurants = {}
      for (const each of newInfo) {
         // get the name of the restaurant and the string with workerName/salary
         let [restaurantName, workersString] = each.split(' - ');
         const workers = workersString.split(", ").map(worker => {
            // make objects with name:salary
            const [name, salary] = worker.split(" ");
            return { name: name, salary: parseFloat(salary) };
         });

         if (restaurantName in restaurants) {
            restaurants[restaurantName].workers.push(...workers);
            restaurants[restaurantName].totalSalary += workers.reduce((sum, worker) => sum + worker.salary, 0);
            restaurants[restaurantName].avarageSalary = restaurantName[restaurantName].totalSalary / restaurantName[restaurantName].workers.length;
            restaurants[restaurantName].bestSalary = Math.max(restaurants[restaurantName].bestSalary, ...workers.map(worker => worker.salary));
         } else {

            restaurants[restaurantName] = {
               workers: workers,
               totalSalary: workers.reduce((sum, worker) => sum + worker.salary, 0),
               avarageSalary: workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length,
               bestSalary: Math.max(...workers.map(worker => worker.salary))
            };
         }
      }

      let bestRestaurant = null;
      let bestAverageSalary = 0;

      for (const restaurantName in restaurants) {
         console.log(restaurantName)
         const restaurant = restaurants[restaurantName];

         if (restaurant.avarageSalary > bestAverageSalary) {
            bestRestaurant = {
               name: restaurantName,
               workers: restaurant.workers,
               totalSalary: restaurant.totalSalary,
               avarageSalary: restaurant.avarageSalary,
               bestSalary: restaurant.bestSalary,
            };

            console.log(bestRestaurant)
            bestAverageSalary = restaurant.avarageSalary;
         }
      }
      if (bestRestaurant) {
         const sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
         console.log(sortedWorkers)
         infoRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avarageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
         for (const each of sortedWorkers) {
            infoWorkers.textContent += ` Name: ${each.name} With Salary: ${each.salary}`
         }
      }

   }
}

