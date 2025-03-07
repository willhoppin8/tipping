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
    // If tip is a percentage (15, 20, 25), calculate the actual amount
    const tipAmount = [15, 20, 25].includes(tip) ? parseFloat(calculateTipAmount(tip)) : tip
    setSelectedTip(tipAmount)
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
      fontFamily: 'Arial, sans-serif'
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
        marginTop: '40px',
        marginBottom: '20px'
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
          Enter custom tip amount
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
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#f8f8f8',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <span style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333'
          }}>
            ${customTip || '0.00'}
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '10px'
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => setCustomTip(prev => (prev + num.toString()))}
              style={{
                padding: '15px',
                height: '60px',
                backgroundColor: '#ffffff',
                border: '1px solid #0066FF',
                color: '#0066FF',
                fontSize: '1.3rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {num}
            </button>
          ))}
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '15px'
        }}>
          <button
            onClick={() => setCustomTip(prev => prev.slice(0, -1))}
            style={{
              padding: '15px',
              height: '60px',
              backgroundColor: '#ffffff',
              border: '1px solid #0066FF',
              color: '#0066FF',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            ←
          </button>
          <button
            onClick={() => setCustomTip(prev => prev + '0')}
            style={{
              padding: '15px',
              height: '60px',
              backgroundColor: '#ffffff',
              border: '1px solid #0066FF',
              color: '#0066FF',
              fontSize: '1.3rem',
              cursor: 'pointer'
            }}
          >
            0
          </button>
          <button
            onClick={() => setCustomTip(prev => {
              // Only add negative if it's at the start
              if (!prev) return '-'
              return prev + '.'
            })}
            style={{
              padding: '15px',
              height: '60px',
              backgroundColor: '#ffffff',
              border: '1px solid #0066FF',
              color: '#0066FF',
              fontSize: '1.3rem',
              cursor: 'pointer'
            }}
          >
            {!customTip ? '-' : '.'}
          </button>
        </div>

        <button 
          onClick={() => handleTipSelect(parseFloat(customTip))}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#0066FF',
            color: 'white',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
          disabled={!customTip || isNaN(parseFloat(customTip))}
        >
          Confirm Tip
        </button>

        <button 
          onClick={() => {
            setCustomTip('')
            setCurrentScreen('tip-options')
          }}
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
          Cancel
        </button>
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '20px'
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

  const renderThankYou = () => {
    const isNegativeOrZero = selectedTip <= 0

    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isNegativeOrZero ? '#FF0000' : '#0066FF',
        fontFamily: 'Arial, sans-serif',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {isNegativeOrZero ? (
            <>
              <h1 style={{ 
                color: 'white', 
                marginBottom: '20px',
                fontSize: '8rem'
              }}>
                😠
              </h1>
              <p style={{ 
                fontSize: '2rem', 
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                You are a horrible person
              </p>
            </>
          ) : (
            <>
              <h1 style={{ 
                color: 'white', 
                marginBottom: '20px',
                fontSize: '2.5rem'
              }}>
                Thank You!
              </h1>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Thank you for your ${selectedTip.toFixed(2)} tip!
              </p>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: currentScreen === 'thank-you' ? '#0066FF' : '#f5f5f5',
      overflow: 'hidden',
      maxWidth: currentScreen === 'thank-you' ? 'none' : '500px',
      margin: '0 auto',
      padding: currentScreen === 'thank-you' ? 0 : '20px'
    }}>
      {currentScreen === 'tip-options' && renderTipOptions()}
      {currentScreen === 'custom-tip' && renderCustomTip()}
      {currentScreen === 'thank-you' && renderThankYou()}
    </div>
  )
}

export default App
