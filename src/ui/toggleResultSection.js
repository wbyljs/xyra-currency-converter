const resultSection = document.getElementById('result')

export default function toggleResultSection(force) {
  resultSection.classList.toggle('hidden', force)
}
