function scoring(){

    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
          if(particles.body.position.x < 70){
            score = score + 550;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 90){
          if(particles.body.position.x < 150){
            score = score + 300;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
      
      if(particles.body.position.y > 760){
        if(particles.body.position.x > 170){
          if(particles.body.position.x < 230){
            score = score + 450;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 250){
          if(particles.body.position.x < 310){
            score = score + 350;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 330){
          if(particles.body.position.x < 390){
            score = score + 100;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 410){
          if(particles.body.position.x < 470){
            score = score + 500;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 490){
          if(particles.body.position.x < 550){
            score = score + 250;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 570){
          if(particles.body.position.x < 630){
            score = score + 600;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 650){
          if(particles.body.position.x < 710){
            score = score + 200;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
  
    if(particles!==undefined){
      particles.display();
  
      if(particles.body.position.y > 760){
  
        if(particles.body.position.x > 730){
          if(particles.body.position.x < 790){
            score = score + 400;
            particles = undefined;
            if(turn>=5){
              gameState = "end";
            }
          }
        }
      }
    }
    
  }