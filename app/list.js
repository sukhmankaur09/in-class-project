import './list.scss'; // Import SCSS for List page

// Sample data (hardcoded for now)
const items = [
  { id: 1, name: "Item 1", description: "This is the first item." },
  { id: 2, name: "Item 2", description: "This is the second item." },
  { id: 3, name: "Item 3", description: "This is the third item." },
];

// Function to populate the table
function populateTable() {
  const tableBody = document.getElementById("tableBody");

  items.forEach(item => {
    const row = document.createElement("tr");

    // Add ID column
    const idCell = document.createElement("td");
    idCell.textContent = item.id;
    row.appendChild(idCell);

    // Add Name column
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Add Description column
    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    // Add Action column (with a button)
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.addEventListener("click", () => {
      alert(`Delete item with ID: ${item.id}`);
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Call the function to populate the table
populateTable();