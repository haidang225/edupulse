/**
 * analytics.js
 * Các hàm tiện ích để tính toán thống kê từ dữ liệu phản hồi.
 * Tất cả tính toán đều dựa trên dữ liệu động, không dùng số hardcode.
 */

/**
 * Tổng số phản hồi
 */
export function getTotalResponses(responses) {
  return responses.length;
}

/**
 * Điểm trung bình (làm tròn 2 chữ số thập phân)
 */
export function getAverageScore(responses) {
  if (responses.length === 0) return 0;
  const sum = responses.reduce((acc, r) => acc + r.score, 0);
  return parseFloat((sum / responses.length).toFixed(2));
}

/**
 * Phân phối điểm: { 1: count, 2: count, 3: count, 4: count, 5: count }
 */
export function getScoreDistribution(responses) {
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  responses.forEach((r) => {
    if (distribution[r.score] !== undefined) {
      distribution[r.score]++;
    }
  });
  return distribution;
}

/**
 * Phần trăm của mỗi mức điểm
 * Trả về: { 1: '10.00', 2: '20.00', ... }
 */
export function getScorePercentages(responses) {
  const total = responses.length;
  const distribution = getScoreDistribution(responses);
  const percentages = {};
  for (let score = 1; score <= 5; score++) {
    percentages[score] =
      total > 0 ? parseFloat(((distribution[score] / total) * 100).toFixed(1)) : 0;
  }
  return percentages;
}

/**
 * Tỷ lệ sinh viên chọn mức 4-5 (%)
 */
export function getHighScorePercentage(responses) {
  const total = responses.length;
  if (total === 0) return 0;
  const highScoreCount = responses.filter((r) => r.score >= 4).length;
  return parseFloat(((highScoreCount / total) * 100).toFixed(1));
}

/**
 * Chuyển đổi phân phối điểm thành dạng mảng phù hợp cho Recharts
 */
export function getChartData(responses) {
  const distribution = getScoreDistribution(responses);
  const labels = {
    1: 'Chưa hiểu',
    2: 'Hiểu một chút',
    3: 'Hiểu cơ bản',
    4: 'Hiểu khá rõ',
    5: 'Có thể giải thích',
  };
  return [1, 2, 3, 4, 5].map((score) => ({
    score: `Mức ${score}`,
    label: labels[score],
    count: distribution[score],
  }));
}
