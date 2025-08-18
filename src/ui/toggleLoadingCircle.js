const loadingSection = document.getElementById('loading')

export default function toggleLoadingCircle() {
  loadingSection.classList.toggle('hidden')
  loadingSection.classList.toggle('flex')
}
