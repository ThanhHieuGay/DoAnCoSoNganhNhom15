// Hiển thị miền theo tab
function selectRegion(region) {
  // Ẩn tất cả khu vực
  document.querySelectorAll('.region').forEach(r => r.style.display = 'none');
  
  // Bỏ active tab cũ
  document.querySelectorAll('.region-tab').forEach(btn => btn.classList.remove('active'));
  
  // Hiện miền được chọn
  if (region === 'nam') {
    document.getElementById('mien-nam').style.display = 'block';
    document.querySelector('[data-region="nam"]').classList.add('active');
    currentRegion = 'nam';
  } else if (region === 'trung') {
    document.getElementById('mien-trung').style.display = 'block';
    document.querySelector('[data-region="trung"]').classList.add('active');
    currentRegion = 'trung';
  } else if (region === 'bac') {
    document.getElementById('mien-bac').style.display = 'block';
    document.querySelector('[data-region="bac"]').classList.add('active');
    currentRegion = 'bac';
  }

  resetProvinceIndex();
}

// ===============================
// Điều khiển chuyển giữa các tỉnh
// ===============================
let currentIndex = 0;
let currentRegion = 'nam';

function changeProvince(direction) {
  const regionId = currentRegion === 'nam' ? 'mien-nam' : 
                   currentRegion === 'trung' ? 'mien-trung' : 'mien-bac';
  const provinceCards = document.querySelectorAll(`#${regionId} .province-card`);
  const indicator = document.querySelector(`#${regionId} .province-indicator`);

  // Ẩn tất cả
  provinceCards.forEach(card => card.classList.remove('active'));

  // Cập nhật chỉ số hiện tại
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = provinceCards.length - 1;
  if (currentIndex >= provinceCards.length) currentIndex = 0;

  // Hiển thị tỉnh hiện tại
  provinceCards[currentIndex].classList.add('active');
  if (indicator) indicator.textContent = `${currentIndex + 1} / ${provinceCards.length}`;
}

function resetProvinceIndex() {
  currentIndex = 0;
  const regionId = currentRegion === 'nam' ? 'mien-nam' : 
                   currentRegion === 'trung' ? 'mien-trung' : 'mien-bac';
  const provinceCards = document.querySelectorAll(`#${regionId} .province-card`);
  const indicator = document.querySelector(`#${regionId} .province-indicator`);
  
  provinceCards.forEach((card, i) => {
    card.classList.toggle('active', i === 0);
  });
  if (indicator) indicator.textContent = `1 / ${provinceCards.length}`;
}

// Hiển thị mặc định miền Nam khi load trang
document.addEventListener('DOMContentLoaded', () => {
  selectRegion('nam');
});
