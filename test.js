const CONFIG = [
  { price: 1.5, used: 50 },
  { price: 3, used: 150 },
  { price: 5 }
];

function calculateElectricityCost(used) {
	let price = 0;

	for (const modifier of CONFIG) {
	    if (!modifier.used) {
	    	price += used * modifier.price;
	    	break;
	  	}

	  	const diff = Math.min(used, modifier.used);

	  	price += diff * modifier.price;
	  	used -= diff;

	  	if (used < 0) {
	    	break;
	  	}
	}

	return price;
}

console.log(calculateElectricityCost(220));










