function exportOriginalNotebook() {
  if (location.hostname !== 'rally-debate-studio.ryanseamons.chatgpt.site') {
    alert('Open the original Rally first, then click this bookmark.'); return;
  }
  try {
    const raw = localStorage.getItem('rally-notebook');
    if (!raw || !Array.isArray(JSON.parse(raw)) || JSON.parse(raw).length === 0) {
      alert('No saved notes were found in this browser. Try the browser and profile you used for practice.'); return;
    }
    const url = URL.createObjectURL(new Blob([raw], {type:'application/json'}));
    const link = document.createElement('a');
    link.href = url; link.download = 'rally-original-notebook.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch { alert('This browser could not export your notes. Your notebook has not been changed.'); }
}
const link = document.getElementById('exporter');
link.href = 'javascript:(' + exportOriginalNotebook.toString() + ')();';
link.addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('notice').textContent = 'Drag this link to your bookmarks bar, then use it on the original Rally page.';
});
