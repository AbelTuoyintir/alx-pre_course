function populateTable(data) {
    const tableBody = assetTable.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    
    data.forEach(asset => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${asset.id}</td>
        <td>${asset.name}</td>
        <td>${asset.category}</td>
        <td>${asset.location}</td>
        <td>${asset.lastUpdated}</td>
      `;
      tableBody.appendChild(row);
    });
  }