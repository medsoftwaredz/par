document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const reportTable = document.getElementById('reportTable').getElementsByTagName('tbody')[0];
    const generateReportBtn = document.getElementById('generateReport');
  
    // Function to create a checkbox cell
    const createCheckboxCell = (isChecked) => {
      const cell = document.createElement('td');
      cell.textContent = isChecked ? '✔' : '';
      return cell;
    };
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Retrieve form values
      const ticketNumber = document.getElementById('ticketNumber').value;
      const roomNumber = document.getElementById('roomNumber').value;
      const overnight = document.getElementById('overnight').checked;
      const spa = document.getElementById('spa').checked;
      const dayUse = document.getElementById('dayUse').checked;
      const siam = document.getElementById('siam').checked;
      const freeParking = document.getElementById('freeParking').checked;
      const reportDate = document.getElementById('reportDate').value;
  
      // Append a new row to the table with these values
      const newRow = reportTable.insertRow();
      newRow.appendChild(document.createElement('td')).textContent = reportTable.rows.length + 1;
      newRow.appendChild(document.createElement('td')).textContent = ticketNumber;
      newRow.appendChild(document.createElement('td')).textContent = roomNumber;
      newRow.appendChild(createCheckboxCell(overnight));
      newRow.appendChild(createCheckboxCell(spa));
      newRow.appendChild(createCheckboxCell(dayUse));
      newRow.appendChild(createCheckboxCell(siam));
      newRow.appendChild(createCheckboxCell(freeParking));
      newRow.appendChild(document.createElement('td')).textContent = reportDate; // This cell will display the report date
  
      // Reset the form after submission
      form.reset();
    });
  
    // Generate and download the report as PDF
    generateReportBtn.addEventListener('click', function() {
      const doc = new jsPDF.jsPDF();
      doc.autoTable({ html: '#reportTable' });
      doc.save('parking-report.pdf');
    });
  });
  