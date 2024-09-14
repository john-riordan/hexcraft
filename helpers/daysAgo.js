export default function unixToTimeAgo(unixTimestamp) {
  const now = Date.now(); // Get current time in milliseconds
  const timestamp = unixTimestamp; // Convert Unix time to milliseconds
  const diff = now - timestamp; // Difference between now and the timestamp

  const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  if (daysAgo >= 1) {
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else {
    const hoursAgo = Math.floor(diff / (1000 * 60 * 60)); // Convert milliseconds to hours
    if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    } else {
      const minutesAgo = Math.floor(diff / (1000 * 60)); // Convert milliseconds to minutes
      return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    }
  }
}
