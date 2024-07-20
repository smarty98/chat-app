export const getRandomLesson = () => {
    const lessons = [
      {
        name: 'Introduction to Fractions',
        grade: '6th grade',
        subject: 'Math',
        description: generateRandomDescription()
      },
      {
        name: 'The Water Cycle',
        grade: '5th grade',
        subject: 'Science',
        description: generateRandomDescription()
      },
      {
        name: 'Photosynthesis',
        grade: '7th grade',
        subject: 'Biology',
        description: generateRandomDescription()
      },
      {
        name: 'Geography',
        grade: '7th grade',
        subject: 'Social',
        description: generateRandomDescription()
      }
    ];
  
    return lessons[Math.floor(Math.random() * lessons.length)];
  };
  
  const generateRandomDescription = () => {
    const descriptions = [
      "Understanding fractions and their applications in real life.",
      "Exploring the stages of the water cycle and their importance.",
      "The process of photosynthesis and its significance for plants.",
      "Learning about mathematical fractions through examples and problems.",
      "The journey of water from oceans to clouds and back again.",
      "How plants convert sunlight into energy through photosynthesis.",
      "Practical uses of fractions in cooking and construction.",
      "The role of evaporation, condensation, and precipitation in the water cycle.",
      "The chemical equation for photosynthesis and its components."
    ];
  
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };
  