tsParticles.load("tsparticles", {
  particles: {
    number: { value: 50 },
    color: { value: "#FFD700" },
    shape: { type: "circle" },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: { default: "out" }
    }
  }
});

tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#0d0d0d"
    }
  },
  fullScreen: {
    enable: false
  },
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#FFD700" // gold color
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.7
    },
    size: {
      value: { min: 1, max: 4 }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      },
      attract: {
        enable: false
      }
    },
    links: {
      enable: true,
      distance: 100,
      color: "#FFD700",
      opacity: 0.3,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  },
  detectRetina: true
});
