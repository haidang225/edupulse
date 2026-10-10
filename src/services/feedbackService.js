/**
 * feedbackService.js
 * Lớp trừu tượng hóa dữ liệu phản hồi.
 * Trong Phase 2, các hàm này sẽ được thay thế bằng Firebase Firestore.
 *
 * Lưu ý: Đây là DEMO – dữ liệu được lưu trong localStorage của trình duyệt,
 * KHÔNG phải trên server hay database thật.
 */

import { INITIAL_MOCK_RESPONSES, POLL_ID } from '../data/mockResponses';

const STORAGE_KEY = 'edupulse_demo_responses';

/**
 * Lấy tất cả phản hồi từ localStorage (DEMO storage).
 * Nếu chưa có, khởi tạo với dữ liệu gốc.
 */
export function getAllResponses() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Khởi tạo lần đầu với dữ liệu gốc
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MOCK_RESPONSES));
    return INITIAL_MOCK_RESPONSES;
  } catch {
    return [...INITIAL_MOCK_RESPONSES];
  }
}

/**
 * Thêm một phản hồi mới vào DEMO storage.
 * Trả về danh sách phản hồi đã cập nhật.
 */
export function addResponse(score) {
  const responses = getAllResponses();
  const newResponse = {
    id: `response_${String(responses.length + 1).padStart(3, '0')}_${Date.now()}`,
    pollId: POLL_ID,
    score,
    createdAt: new Date().toISOString(),
  };
  const updated = [...responses, newResponse];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Bỏ qua lỗi localStorage
  }
  return updated;
}

/**
 * Thêm một phản hồi mô phỏng ngẫu nhiên (điểm từ 1-5).
 */
export function addSimulatedResponse() {
  const randomScore = Math.floor(Math.random() * 5) + 1;
  return addResponse(randomScore);
}

/**
 * Đặt lại về dữ liệu demo gốc.
 */
export function resetToInitialData() {
  const initial = [...INITIAL_MOCK_RESPONSES];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  } catch {
    // Bỏ qua lỗi localStorage
  }
  return initial;
}

/**
 * Kiểm tra xem sinh viên đã gửi phản hồi chưa (DEMO).
 */
export function hasStudentSubmitted() {
  try {
    return localStorage.getItem('edupulse_student_submitted') === 'true';
  } catch {
    return false;
  }
}

/**
 * Đánh dấu sinh viên đã gửi phản hồi (DEMO).
 */
export function markStudentSubmitted() {
  try {
    localStorage.setItem('edupulse_student_submitted', 'true');
  } catch {
    // Bỏ qua
  }
}

/**
 * Đặt lại trạng thái gửi phản hồi của sinh viên (DEMO).
 */
export function resetStudentSubmission() {
  try {
    localStorage.removeItem('edupulse_student_submitted');
    localStorage.removeItem('edupulse_student_score');
  } catch {
    // Bỏ qua
  }
}

/**
 * Lưu điểm sinh viên đã chọn (DEMO).
 */
export function saveStudentScore(score) {
  try {
    localStorage.setItem('edupulse_student_score', String(score));
  } catch {
    // Bỏ qua
  }
}

/**
 * Lấy điểm sinh viên đã lưu (DEMO).
 */
export function getSavedStudentScore() {
  try {
    const val = localStorage.getItem('edupulse_student_score');
    return val ? parseInt(val, 10) : null;
  } catch {
    return null;
  }
}
