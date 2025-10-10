// ======= Quản lý Ngày Tháng cho Xổ Số ======= //

let currentDate = new Date();

// Khi load trang -> hiển thị ngày hiện tại
document.addEventListener("DOMContentLoaded", () => {
  updateDateDisplay();
});

// ------------------ CẬP NHẬT NGÀY ------------------
function updateDateDisplay() {
  const formattedDate = currentDate.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const ids = ["current-date", "current-date-2", "current-date-3", "current-date-4"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = formattedDate;
  });
}

// ------------------ NÚT "HÔM QUA" ------------------
function changeDate(days) {
  currentDate.setDate(currentDate.getDate() + days);
  updateDateDisplay();
}

// ------------------ NÚT "📅 CHỌN NGÀY" ------------------

function showDatePicker(event) {
  // Xóa input cũ nếu có
  const old = document.getElementById("hidden-date-picker");
  if (old) old.remove();

  // Lấy vị trí của nút được click
  const button = event ? event.currentTarget : document.querySelector('.date-nav-btn:last-child');
  
  // Tạo input date
  const input = document.createElement("input");
  input.type = "date";
  input.id = "hidden-date-picker";

  // Lấy ngày hiện tại để đặt làm giá trị mặc định cho picker
  const yyyy = currentDate.getFullYear();
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const dd = String(currentDate.getDate()).padStart(2, '0');
  input.value = `${yyyy}-${mm}-${dd}`;

  // ⚠️ QUAN TRỌNG: Đặt max là ngày hôm nay
  const today = new Date();
  const maxYyyy = today.getFullYear();
  const maxMm = String(today.getMonth() + 1).padStart(2, '0');
  const maxDd = String(today.getDate()).padStart(2, '0');
  input.max = `${maxYyyy}-${maxMm}-${maxDd}`;

  // Lấy vị trí của nút
  const rect = button.getBoundingClientRect();
  
  // Đặt style cho input - hiện ngay dưới nút
  input.style.position = "absolute";
  input.style.top = (rect.bottom + window.scrollY) + "px";
  input.style.left = rect.left + "px";
  input.style.zIndex = "10000";
  input.style.opacity = "0.01"; // Gần như vô hình nhưng vẫn tương tác được
  input.style.pointerEvents = "auto";
  input.style.cursor = "pointer";

  document.body.appendChild(input);

  // Khi người dùng chọn ngày
  input.addEventListener("change", function() {
    const selectedValue = this.value; // Format: YYYY-MM-DD
    
    if (selectedValue) {
      // Tạo date từ string với múi giờ local
      const parts = selectedValue.split('-');
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-indexed
      const day = parseInt(parts[2]);
      
      const selectedDate = new Date(year, month, day);
      
      // Kiểm tra lại không cho chọn ngày tương lai
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      
      if (selectedDate > today) {
        alert('Không thể xem kết quả ngày trong tương lai!');
        input.remove();
        return;
      }
      
      currentDate = selectedDate;
      updateDateDisplay();
    }
    input.remove();
  });

  // Xử lý khi đóng date picker mà không chọn
  input.addEventListener("blur", function() {
    setTimeout(() => {
      if (document.getElementById("hidden-date-picker")) {
        input.remove();
      }
    }, 200);
  });

  // Kích hoạt date picker
  setTimeout(() => {
    input.focus();
    try {
      input.showPicker();
    } catch (err) {
      // Fallback: nếu showPicker không được hỗ trợ
      input.click();
    }
  }, 50);
}
// ======= Set max date cho input ngày mở thưởng =======

document.addEventListener("DOMContentLoaded", () => {
  // Lấy ngày hiện tại
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayString = `${yyyy}-${mm}-${dd}`;
  
  // Set max date cho input trong form tra cứu vé số
  const checkDateInput = document.getElementById('check-date');
  if (checkDateInput) {
    checkDateInput.setAttribute('max', todayString);
    // Nếu muốn set giá trị mặc định là hôm nay
    if (!checkDateInput.value) {
      checkDateInput.value = todayString;
    }
  }
});