import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale)

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Steps',
    data: [7400, 8000, 6800, 9300, 10200, 8500, 9000],
    fill: true,
    borderColor: '#7f5af0',
    tension: 0.4,
    pointBackgroundColor: '#7f5af0'
  }]
}

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Hey, Arjun!</h1>
      <p>Let's crush today's fitness goals!</p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #7f5af0, #7950f2)',
        color: 'white',
        borderRadius: '20px',
        padding: '1rem',
        margin: '1.5rem 0'
      }}>
        <div><strong>9,543</strong><br />Steps</div>
        <div><strong>520</strong><br />Calories</div>
        <div><strong>5.2</strong><br />Km</div>
      </div>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>My Home Avatar Ranking</h2>

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Steps</span><span>9543 / 10000</span>
          </div>
          <div style={{
            background: '#eee',
            borderRadius: '8px',
            height: '8px',
            marginTop: '5px'
          }}>
            <div style={{
              background: '#7f5af0',
              height: '8px',
              width: '95%',
              borderRadius: '8px'
            }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Calories</span><span>520 / 600</span>
          </div>
          <div style={{
            background: '#eee',
            borderRadius: '8px',
            height: '8px',
            marginTop: '5px'
          }}>
            <div style={{
              background: '#ff7f50',
              height: '8px',
              width: '87%',
              borderRadius: '8px'
            }} />
          </div>
        </div>
      </div>

      <h2>Weekly Overview</h2>
      <Line data={data} />
    </div>
  )
}
