export function calculateAge(dobString) {
    // Parse the DOB string to a Date object
    const dob = new Date(dobString);
    
    // Get the current date
    const today = new Date();
    
    // Calculate the age difference in years
    let age = today.getFullYear() - dob.getFullYear();
    
    // Adjust if the birthday hasn't occurred yet this year
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    if(age < 0){
        return 0
    }
    
    return age;
  }