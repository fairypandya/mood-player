function goToMood(mood) {
  localStorage.setItem("selectedMood", mood);
  window.location.href = `${mood}.html`;
}
