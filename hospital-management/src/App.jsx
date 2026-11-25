import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  const doctors = [
    {
      name: "Dr. Rahul Sharma",
      specialization: "Cardiologist",
      experience: "10 Years",
      availability: "Available",
      fee: "₹800",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Dr. Priya Reddy",
      specialization: "Dermatologist",
      experience: "8 Years",
      availability: "Available",
      fee: "₹600",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Dr. Anil Kumar",
      specialization: "Neurologist",
      experience: "12 Years",
      availability: "Unavailable",
      fee: "₹1000",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Dr. Sneha Rao",
      specialization: "Pediatrician",
      experience: "6 Years",
      availability: "Available",
      fee: "₹500",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const patients = [
    {
      id: "P101",
      name: "Arjun Kumar",
      age: 25,
      department: "Cardiology",
      doctor: "Dr. Rahul Sharma",
      status: "Admitted"
    },
    {
      id: "P102",
      name: "Priya Sharma",
      age: 30,
      department: "Dermatology",
      doctor: "Dr. Priya Reddy",
      status: "Under Treatment"
    },
    {
      id: "P103",
      name: "Ravi Teja",
      age: 42,
      department: "Neurology",
      doctor: "Dr. Anil Kumar",
      status: "Discharged"
    },
    {
      id: "P104",
      name: "Ananya Rao",
      age: 19,
      department: "Pediatrics",
      doctor: "Dr. Sneha Rao",
      status: "Waiting"
    }
  ];

  const renderDoctors = () => (
    <div className="section">
      <h2>Our Expert Doctors</h2>
      <p className="subtitle">
        Meet our experienced and qualified medical professionals.
      </p>

      <div className="doctor-container">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p><b>Specialization:</b> {doctor.specialization}</p>
            <p><b>Experience:</b> {doctor.experience}</p>
            <p><b>Consultation Fee:</b> {doctor.fee}</p>
            <span className={
              doctor.availability === "Available"
                ? "available"
                : "unavailable"
            }>
              {doctor.availability}
            </span>
            <br />
            <button onClick={() => setPage("Appointments")}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="section">
      <h2>Patient Management</h2>
      <p className="subtitle">
        View patient details and monitor their current status.
      </p>

      <div className="patient-summary">
        <div className="summary-card">
          <h3>{patients.length}</h3>
          <p>Total Patients</p>
        </div>
        <div className="summary-card">
          <h3>{patients.filter(p => p.status === "Admitted").length}</h3>
          <p>Admitted</p>
        </div>
        <div className="summary-card">
          <h3>{patients.filter(p => p.status === "Under Treatment").length}</h3>
          <p>Under Treatment</p>
        </div>
        <div className="summary-card">
          <h3>{patients.filter(p => p.status === "Discharged").length}</h3>
          <p>Discharged</p>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.department}</td>
                <td>{patient.doctor}</td>
                <td>
                  <span className={`status ${patient.status
                    .toLowerCase().replaceAll(" ", "-")}`}>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="app">
      <header>
        <h1>Hospital Management System</h1>
      </header>

      <nav>
        {["Home", "Doctors", "Patients", "Appointments", "Contact"].map(
          (item) => (
            <button
              key={item}
              className="nav-button"
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          )
        )}
      </nav>

      {page === "Home" && (
        <div className="home">
          <h2>Welcome to Our Hospital</h2>
          <p>Your Health, Our Priority</p>
          <button onClick={() => setPage("Appointments")}>
            Book Appointment
          </button>
        </div>
      )}

      {page === "Doctors" && renderDoctors()}

      {page === "Patients" && renderPatients()}

      {page === "Appointments" && (
        <div className="section">
          <h2>Appointments</h2>
          <p>Appointment booking section coming soon.</p>
        </div>
      )}

      {page === "Contact" && (
        <div className="section">
          <h2>Contact Us</h2>
          <p>Email: hospital@example.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      )}

      <footer>
        <p>© 2026 Hospital Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
