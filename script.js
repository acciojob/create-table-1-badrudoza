function insert_Row() {
    //Write your code here
	let newrow=document.createElement("tr");
	let newcell1=document.createElement("td");
	let newcell2=document.createElement("td");
	newcell1.textContent="New Cell1";
	newrow.appendChild(newcell1);
	
	newcell2.textContent="New Cell2";	
	newrow.appendChild(newcell2);
	const table = document.getElementById("sampleTable");
   table.insertBefore(newrow,table.rows[0]);
}
