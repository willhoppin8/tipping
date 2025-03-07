import { useState } from 'react'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('tip-options')
  const [customTip, setCustomTip] = useState('')
  const [selectedTip, setSelectedTip] = useState(null)
  const baseAmount = 22.34 // Base amount in dollars

  const calculateTipAmount = (percentage) => {
    return (baseAmount * (percentage / 100)).toFixed(2)
  }

  const handleTipSelect = (tip) => {
    setSelectedTip(tip)
    setCurrentScreen('thank-you')
  }

  const handleCustomTip = (e) => {
    e.preventDefault()
    if (customTip && !isNaN(customTip)) {
      handleTipSelect(parseFloat(customTip))
    }
  }

  const renderTipOptions = () => (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        marginBottom: '10px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#000000',
          marginBottom: '5px'
        }}>
          ${baseAmount.toFixed(2)}
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666666',
          marginBottom: '20px'
        }}>
          Add a tip
        </p>
      </div>
      
      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '15px'
        }}>
          <button 
            onClick={() => handleTipSelect(15)}
            style={{
              padding: '15px',
              height: '85px',
              backgroundColor: '#0066FF',
              border: 'none',
              color: 'white',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>15%</span>
            <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '6px', fontWeight: '300' }}>${calculateTipAmount(15)}</span>
          </button>
          <button 
            onClick={() => handleTipSelect(20)}
            style={{
              padding: '15px',
              height: '85px',
              backgroundColor: '#0066FF',
              border: 'none',
              color: 'white',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>20%</span>
            <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '6px', fontWeight: '300' }}>${calculateTipAmount(20)}</span>
          </button>
          <button 
            onClick={() => handleTipSelect(25)}
            style={{
              padding: '15px',
              height: '85px',
              backgroundColor: '#0066FF',
              border: 'none',
              color: 'white',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>25%</span>
            <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '6px', fontWeight: '300' }}>${calculateTipAmount(25)}</span>
          </button>
        </div>
        
        <button 
          onClick={() => setCurrentScreen('custom-tip')}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#ffffff',
            border: '1px solid #0066FF',
            color: '#0066FF',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          Custom Tip Amount
        </button>

        <button 
          onClick={() => handleTipSelect(0)}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#ffffff',
            border: '1px solid #0066FF',
            color: '#0066FF',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          No Tip
        </button>
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: 'auto',
        paddingTop: '20px',
        marginBottom: '80px'
      }}>
        <img 
          src="https://media-cdn.tripadvisor.com/media/photo-s/1c/89/21/c6/logo.jpg" 
          alt="Hog's Breath Cafe Logo" 
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  )

  const renderCustomTip = () => (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        padding: '20px',
        backgroundColor: '#0066FF',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.2rem'
      }}>
        Enter Custom Tip Amount
      </div>
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '10px'
      }}>
        <form onSubmit={handleCustomTip}>
          <input
            type="number"
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
            placeholder="Enter amount"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.1rem',
              border: '1px solid #0066FF',
              marginBottom: '10px'
            }}
          />
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#0066FF',
              color: 'white',
              border: 'none',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Confirm
          </button>
        </form>
        <button 
          onClick={() => setCurrentScreen('tip-options')}
          style={{
            padding: '15px',
            backgroundColor: '#ffffff',
            border: '1px solid #0066FF',
            color: '#0066FF',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          Back
        </button>
      </div>
    </div>
  )

  const renderThankYou = () => (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#0066FF', marginBottom: '20px' }}>Thank You!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          {selectedTip === 0 
            ? "Thank you for your business!"
            : `Thank you for your ${selectedTip}% tip!`}
        </p>
        <button 
          onClick={() => {
            setCurrentScreen('tip-options')
            setSelectedTip(null)
            setCustomTip('')
          }}
          style={{
            padding: '15px 30px',
            backgroundColor: '#0066FF',
            color: 'white',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          Start Over
        </button>
      </div>
    </div>
  )

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      {currentScreen === 'tip-options' && renderTipOptions()}
      {currentScreen === 'custom-tip' && renderCustomTip()}
      {currentScreen === 'thank-you' && renderThankYou()}
    </div>
  )
}

export default App
