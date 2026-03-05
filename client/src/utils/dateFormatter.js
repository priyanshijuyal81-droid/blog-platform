function formatDate(dateString) {
  if (!dateString) return "No date";

  const date = new Date(dateString);

  if (isNaN(date)) return "Invalid date";

  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default formatDate;