function insert_Row() {
  // Get the table by ID
  const table = document.getElementById("sampleTable");

  // Create a new row
  const newRow = document.createElement("tr");

  // Create and add two cells
  const cell1 = document.createElement("td");
  cell1.textContent = "New Cell1";

  const cell2 = document.createElement("td");
  cell2.textContent = "New Cell2";

  // Append cells to the new row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  table.insertBefore(newRow, table.firstChild);
}
