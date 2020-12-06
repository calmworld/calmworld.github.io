import React from 'react'
import Particles from 'react-tsparticles'


function Home() {
  return (
    <dev>
      <Particles 
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
          background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
    </dev>
  )
}

export default Home