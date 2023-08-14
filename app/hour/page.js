
const isEstOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  if (day >= 1 && day <= 4) { 
    return hour >= 9 && hour < 17; 
  } else if (day === 5) {
    return hour >= 10 && hour < 16; 
  }

  return false; 
};

export default isEstOpen;

