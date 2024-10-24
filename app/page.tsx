"use client";

import CalenderComponent from "@/components/CalenderComponent";


// import { cn } from 'your-classname-utility'; // Adjust this import

const MyComponent = () => {
  // Initialize state to store the selected date

  return (
    <div className="flex justify-center items-center py-10" >
      <CalenderComponent/>
    </div>
  );
};

export default MyComponent; // Export your component
