// Function to get student details
function getStudentDetail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const error = false; // Change this to true to simulate an error
        if (error) {
          reject('Error in getting student details');
        } else {
          resolve({ name: 'Sadia Latif', Id: 7544 });
        }
      }, 1000);
    });
  }
  
  // Function to get document details
  function getDocument() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const error = false; // Change this to true to simulate an error
        if (error) {
          reject('Error in getting document details');
        } else {
          resolve({ vehicleDocument: 'V1234', LicenceNumber: 'LN12345' });
        }
      }, 1000);
    });
  }
  
  // Function to get insurance details
  function getInsuranceDetail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate an error
        const error = false; // Change this to true to simulate an error
        if (error) {
          reject('Error in getting insurance details');
        } else {
          resolve({ issueDate: '2024-16-01', OwnerName: 'Sadia Latif' });
        }
      }, 1000);
    });
  }
  
  // Main function to execute the flow
  function executeAsyncTasks() {
    getStudentDetail()
      .then((studentDetail) => {
        console.log('Student Detail:', studentDetail);
  
        // Execute getDocument() and getInsuranceDetail() in parallel
        return Promise.all([getDocument(), getInsuranceDetail()]);
      })
      .then((results) => {
        const [documentDetail, insuranceDetail] = results;
        console.log('Document Detail:', documentDetail);
        console.log('Insurance Detail:', insuranceDetail);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Execute the main function
  executeAsyncTasks();
  