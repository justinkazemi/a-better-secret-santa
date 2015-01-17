//Created by Justin Kazemi
// January 17 2:31 AM baby its so hard to find time to code.

/**
 * [Creates function on Array prototype to chunk array into groups]
 * @param  {[type]} chunkSize [chunkSize to cut array down]
 * @return {[array]} [returns array of chunked arrays]
 */
Array.prototype.chunk = function(chunkSize) {
    var R = [];
    for (var i=0; i<this.length; i+=chunkSize)
        R.push(this.slice(i,i+chunkSize));
    return R;
};

/**
 * [Constructor object function for root people]
 * @param  {[type]} array [array of people]
 */
function people (array) 
{
	this.people = array;
}

/**
 * [Constructor object function for inherited sorted people]
 * @param  {[type]} array [description]
 */
function sortedPeople (array) 
{
	people.prototype.constructor(array);
}

/**
 * [Create an unordered and random array of names]
 * @param  {[type]} array [unsorted people array]
 * @return {[type]} array [random ordered array]
 */
people.prototype.generateRandomList = function (array) 
{
	this.randomArray = [];
	this.randomName = "";

	while (array.length !== this.randomArray.length) 
	{
    	this.randomName = array[Math.floor(Math.random()*array.length)];
		if (this.randomArray.indexOf(this.randomName) === -1) 
		{
			this.randomArray.push(this.randomName);
		}
	}
	return this.randomArray;
};

// Create whatever the hell this is. It's too late and I can't remember what its called.
var p = new people([]);

/**
 * [Onclick of adding a person to queue for sorting]
 */
function addPerson ()
{
	var newPerson = document.getElementById("person").value;
	p.people.push(newPerson);
	var elementValue = p.people.toString();
	document.getElementById("people").value = elementValue;
}

/**
 * [Onclick of sort event]
 * Not sure if this is the correct implementation of prototypes. Need to do more research. I'm pretty sure I am wrong.
 * Also, assigning to div is real dirty.
 */
function sortPeople ()
{	
	var sp = new sortedPeople(p.people);
	sp.prototype = Object.create(people.prototype);
	sp.prototype.constructor = sortedPeople;
	sp.prototype.randomList = p.generateRandomList(p.people);
	sp.prototype.sortedList = sp.prototype.randomList.chunk(2);
	console.log(sp);
	sp.prototype.sortedList.forEach(function(person){
		document.getElementById('sortedDiv').innerHTML += "<input type='text' class='form-control' readonly value='"+person.toString()+"' /><br />";
	});	
}
