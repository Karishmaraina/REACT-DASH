import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import { Pie } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from '@chakra-ui/react';

function Dashboard() {
  <Button>Hello</Button>

  const [theme, setTheme] = useState("light");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const pieData = {
    labels: ["Trainees", "Dropouts", "Ongoing Trainees", "Campus Placed", "Training Students"],
    datasets: [
      {
        data: [30, 5, 20, 10, 35],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} min-h-screen p-6`}>
      <button onClick={toggleTheme} className="p-2 border rounded mb-4">
        Toggle Theme
      </button>
      <h1 className="text-xl font-bold">ERP Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="p-4 border rounded">Total Employees: Male - 50, Female - 30</div>
        <div className="p-4 border rounded">Training Students: Male - 20, Female - 15, Foreigners - 5, Indians - 30</div>
        <div className="p-4 border rounded">
          <Pie data={pieData} />
        </div>
        <div className="p-4 border rounded">Total Batches: 5 | Present: 40 | Absentees: 10</div>
        <div className="p-4 border rounded">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="p-4 border rounded text-center">Current Time: {time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
