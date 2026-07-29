    // Tab Dynamic Accent Theme Colors & GIFs
    const tabThemeData = {
      home: { 
        color: '#ffffff', 
        glow: 'rgba(255, 255, 255, 0.2)',
        gif: 'https://static2.klipy.com/ii/925f17378dd1893b674a723c07535afe/c5/a5/2EIciP3p.gif'
      },
      projects: { 
        color: '#3b82f6', 
        glow: 'rgba(59, 130, 246, 0.25)',
        gif: 'https://static2.klipy.com/ii/8ce8357c78ea940b9c2015daf05ce1a5/8f/7a/SEmYEx6A.gif'
      },
      music: { 
        color: '#22c55e', 
        glow: 'rgba(34, 197, 94, 0.25)',
        gif: 'https://static2.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/34/2a/gwQmc0W7ntVVZpIE.gif'
      },
      games: { 
        color: '#f59e0b', 
        glow: 'rgba(245, 158, 11, 0.25)',
        gif: 'https://static2.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/56/ee/GsAqqMZRIUY1l9ocksZ.gif'
      },
      anime: { 
        color: '#ff4655', 
        glow: 'rgba(255, 70, 85, 0.25)',
        gif: 'https://static2.klipy.com/ii/4493325008d34b7bf8cd6813cd5c1619/3a/ba/pHroy60xSHeuV.gif'
      }
    };

    // Main Navigation Switcher + Theme Color & Top GIF Update
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSections = document.querySelectorAll('.page-section');
    const topGifImg = document.getElementById('top-tab-gif');

    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        // Dynamically update CSS Variables & Top GIF based on tab selection
        if (tabThemeData[targetId]) {
          document.documentElement.style.setProperty('--accent-cyan', tabThemeData[targetId].color);
          document.documentElement.style.setProperty('--accent-glow', tabThemeData[targetId].glow);
          
          if (topGifImg) {
            topGifImg.style.opacity = '0.3';
            setTimeout(() => {
              topGifImg.src = tabThemeData[targetId].gif;
              topGifImg.style.opacity = '1';
            }, 150);
          }
        }

        // Active state toggles
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        pageSections.forEach(section => {
          if (section.id === targetId) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
      });
    });

    // Music Sub-Tabs Switcher
    const musicTabBtns = document.querySelectorAll('.music-tab-btn');
    const musicPanels = document.querySelectorAll('.music-panel');

    musicTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const musicId = btn.getAttribute('data-music');

        musicTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        musicPanels.forEach(panel => {
          if (panel.id === `music-${musicId}`) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });

    // Games Sub-Tabs Switcher
    const gameTabBtns = document.querySelectorAll('.game-tab-btn');
    const gamePanels = document.querySelectorAll('.game-panel');

    gameTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const gameId = btn.getAttribute('data-game');

        gameTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        gamePanels.forEach(panel => {
          if (panel.id === `game-${gameId}`) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });

    // 3D Tilt Effect
    function initTiltCards() {
      const tiltCards = document.querySelectorAll('.tilt-card');

      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -7;
          const rotateY = ((x - centerX) / centerX) * 7;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
        });
      });
    }

    // Tab Dynamic Accent Theme Colors & GIFs
    const tabThemeData = {
      home: { 
        color: '#ffffff', 
        glow: 'rgba(255, 255, 255, 0.2)',
        gif: 'https://static2.klipy.com/ii/925f17378dd1893b674a723c07535afe/c5/a5/2EIciP3p.gif'
      },
      projects: { 
        color: '#3b82f6', 
        glow: 'rgba(59, 130, 246, 0.25)',
        gif: 'https://static2.klipy.com/ii/8ce8357c78ea940b9c2015daf05ce1a5/8f/7a/SEmYEx6A.gif'
      },
      music: { 
        color: '#22c55e', 
        glow: 'rgba(34, 197, 94, 0.25)',
        gif: 'https://static2.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/34/2a/gwQmc0W7ntVVZpIE.gif'
      },
      games: { 
        color: '#f59e0b', 
        glow: 'rgba(245, 158, 11, 0.25)',
        gif: 'https://static2.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/56/ee/GsAqqMZRIUY1l9ocksZ.gif'
      },
      anime: { 
        color: '#ff4655', 
        glow: 'rgba(255, 70, 85, 0.25)',
        gif: 'https://static2.klipy.com/ii/4493325008d34b7bf8cd6813cd5c1619/3a/ba/pHroy60xSHeuV.gif'
      }
    };

    // Main Navigation Switcher + Theme Color & Top GIF Update
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSections = document.querySelectorAll('.page-section');
    const topGifImg = document.getElementById('top-tab-gif');

    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        // Dynamically update CSS Variables & Top GIF based on tab selection
        if (tabThemeData[targetId]) {
          document.documentElement.style.setProperty('--accent-cyan', tabThemeData[targetId].color);
          document.documentElement.style.setProperty('--accent-glow', tabThemeData[targetId].glow);
          
          if (topGifImg) {
            topGifImg.style.opacity = '0.3';
            setTimeout(() => {
              topGifImg.src = tabThemeData[targetId].gif;
              topGifImg.style.opacity = '1';
            }, 150);
          }
        }

        // Active state toggles
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        pageSections.forEach(section => {
          if (section.id === targetId) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
      });
    });

    // Music Sub-Tabs Switcher
    const musicTabBtns = document.querySelectorAll('.music-tab-btn');
    const musicPanels = document.querySelectorAll('.music-panel');

    musicTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const musicId = btn.getAttribute('data-music');

        musicTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        musicPanels.forEach(panel => {
          if (panel.id === `music-${musicId}`) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });

    // Games Sub-Tabs Switcher
    const gameTabBtns = document.querySelectorAll('.game-tab-btn');
    const gamePanels = document.querySelectorAll('.game-panel');

    gameTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const gameId = btn.getAttribute('data-game');

        gameTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        gamePanels.forEach(panel => {
          if (panel.id === `game-${gameId}`) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });

    // 3D Tilt Effect
    function initTiltCards() {
      const tiltCards = document.querySelectorAll('.tilt-card');

      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -7;
          const rotateY = ((x - centerX) / centerX) * 7;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
        });
      });
    }

    initTiltCards();