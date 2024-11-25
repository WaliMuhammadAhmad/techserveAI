
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 90,
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            distance: 10,
            duration: 15,
          },
          repulse: {
            distance: 100,
            duration: 15,
          }
        },
      },
      particles: {
        color: {
          value: "#000",
        },
        links: {
          color: "#000",
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "right",
          enable: true,
          random: true,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return (
    <Particles id={props.id} init={particlesLoaded} options={options} />
  ); 
};

export default ParticlesComponent;