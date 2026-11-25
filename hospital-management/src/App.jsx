
import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('Home')

  const [name, setName] = useState('')
  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')

  const bookAppointment = (e) => {
    e.preventDefault()
    alert('Appointment booked successfully for ' + name)
    setName('')
    setDoctor('')
    setDate('')
  }

  return (
    <div>
      <h1>Hospital Management System</h1>

      <nav>
        {['Home', 'Doctors', 'Patients', 'Appointments', 'Contact'].map(item => (
          <button key={item} onClick={() => setPage(item)}>
            {item}
          </button>
        ))}
      </nav>

      {page === 'Home' && (
        <section>
          <h2>Welcome to Our Hospital</h2>
          <p>Your Health, Our Priority</p>
          <button onClick={() => setPage('Appointments')}>
            Book Appointment
          </button>
        </section>
      )}

      {page === 'Doctors' && (
        <section>
          <h2>Our Doctors</h2>
          <p>Dr. Ravi - Cardiologist</p>
          <p>Dr. Priya - Dentist</p>
          <p>Dr. Kumar - Neurologist</p>
        </section>
      )}

      {page === 'Patients' && (
        <section>
          <h2>Patient Information</h2>
          <p>Patient management section</p>
        </section>
      )}

      {page === 'Appointments' && (
        <section>
          <h2>Book Your Appointment</h2>
          <form onSubmit={bookAppointment}>
            <input
              placeholder="Patient Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <select value={doctor}
              onChange={e => setDoctor(e.target.value)} required>
              <option value="">Select Doctor</option>
              <option>Dr. Ravi</option>
              <option>Dr. Priya</option>
              <option>Dr. Kumar</option>
            </select>

            <input type="date" value={date}
              onChange={e => setDate(e.target.value)}
              required />

            <button type="submit">Confirm Appointment</button>
          </form>
        </section>
      )}

      {page === 'Contact' && (
        <section>
          <h2>Contact Us</h2>
          <p>Phone: 9876543210</p>
          <p>Email: hospital@gmail.com</p>
        </section>
      )}
    </div>
  )
}

export default App
