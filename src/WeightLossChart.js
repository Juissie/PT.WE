// src/WeightLossChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'; // Correct import

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const getLastSixMonths = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  const lastSixMonths = [];

  for (let i = 5; i >= 0; i--) {
    const monthIndex = (currentMonth - i + 12) % 12;
    lastSixMonths.push(months[monthIndex]);
  }

  return lastSixMonths;
};

const WeightLossChart = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const weightData = [78, 75.6, 73.1, 71, 69.8, 68];
  const monthLabels = getLastSixMonths();
  const currentMonthIndex = monthLabels.length - 1;

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Weight (kg)',
        data: weightData,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        tension: 0.4,
        pointRadius: 5,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Weight Loss Over the Last 6 Months',
        font: { size: 18 },
      },
    },
    scales: {
      x: {
        ticks: {
          color: (context) => (context.tick.value === monthLabels[currentMonthIndex] ? 'blue' : 'black'),
        },
      },
      y: { beginAtZero: false, min: 65, max: 80 },
    },
  };

  const initialWeight = weightData[0];
  const finalWeight = weightData[weightData.length - 1];
  const averageWeightLoss = (((initialWeight - finalWeight) / initialWeight) * 100).toFixed(1);
  const shareMessage = `I've lost an average of ${averageWeightLoss}% of my weight with Coach Sarah! 🎉 #FitnessJourney #WeightLoss`;

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(shareMessage);

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${message}&url=${url}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      default:
        alert('Instagram requires copying the image manually!');
    }
    setShowOverlay(false); // Close the overlay after sharing
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        Congratulations, you have lost on average {averageWeightLoss}% of your weight with Coach Sarah!
      </h2>
      <Line data={data} options={options} />

      <div style={styles.buttonWrapper}>
        <button style={styles.shareButton} onClick={() => setShowOverlay(!showOverlay)}>
          <FontAwesomeIcon icon={faShareAlt} style={{ marginRight: '10px' }} />
          Share Achievement
        </button>
      </div>

      {showOverlay && (
        <div style={styles.overlay}>
          <div style={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faTwitter}
              style={styles.icon}
              onClick={() => handleShare('twitter')}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              style={styles.icon}
              onClick={() => handleShare('facebook')}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={styles.icon}
              onClick={() =>
                alert('Instagram requires manual image sharing. Please save and upload the chart.')
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  shareButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  iconContainer: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
  },
};

export default WeightLossChart;
