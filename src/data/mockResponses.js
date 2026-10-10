/**
 * mockResponses.js
 * Tập dữ liệu mô phỏng phản hồi của sinh viên – DEMO DATA
 * Không phải dữ liệu thật từ backend hay Firebase.
 */

export const POLL_ID = 'firebase-demo';

export const POLL_INFO = {
  id: POLL_ID,
  title: 'Bạn hiểu nội dung Firebase hôm nay ở mức độ nào?',
  description: 'Hãy lựa chọn mức độ phù hợp nhất với bạn.',
  status: 'Bản demo',
  dataSource: 'Dữ liệu mô phỏng',
  course: 'Khoa học Dữ liệu và Ứng dụng trong Giáo dục',
};

export const ANSWER_OPTIONS = [
  { value: 1, label: 'Chưa hiểu' },
  { value: 2, label: 'Hiểu một chút' },
  { value: 3, label: 'Hiểu cơ bản' },
  { value: 4, label: 'Hiểu khá rõ' },
  { value: 5, label: 'Có thể giải thích cho người khác' },
];

/**
 * Tập dữ liệu gốc với 30 phản hồi mô phỏng.
 * Được sử dụng để khôi phục khi "Đặt lại dữ liệu demo".
 */
export const INITIAL_MOCK_RESPONSES = [
  { id: 'response_001', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:00:00' },
  { id: 'response_002', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:01:00' },
  { id: 'response_003', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:02:00' },
  { id: 'response_004', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:03:00' },
  { id: 'response_005', pollId: POLL_ID, score: 2, createdAt: '2026-10-13T09:04:00' },
  { id: 'response_006', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:05:00' },
  { id: 'response_007', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:06:00' },
  { id: 'response_008', pollId: POLL_ID, score: 1, createdAt: '2026-10-13T09:07:00' },
  { id: 'response_009', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:08:00' },
  { id: 'response_010', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:09:00' },
  { id: 'response_011', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:10:00' },
  { id: 'response_012', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:11:00' },
  { id: 'response_013', pollId: POLL_ID, score: 2, createdAt: '2026-10-13T09:12:00' },
  { id: 'response_014', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:13:00' },
  { id: 'response_015', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:14:00' },
  { id: 'response_016', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:15:00' },
  { id: 'response_017', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:16:00' },
  { id: 'response_018', pollId: POLL_ID, score: 1, createdAt: '2026-10-13T09:17:00' },
  { id: 'response_019', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:18:00' },
  { id: 'response_020', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:19:00' },
  { id: 'response_021', pollId: POLL_ID, score: 2, createdAt: '2026-10-13T09:20:00' },
  { id: 'response_022', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:21:00' },
  { id: 'response_023', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:22:00' },
  { id: 'response_024', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:23:00' },
  { id: 'response_025', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:24:00' },
  { id: 'response_026', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:25:00' },
  { id: 'response_027', pollId: POLL_ID, score: 2, createdAt: '2026-10-13T09:26:00' },
  { id: 'response_028', pollId: POLL_ID, score: 3, createdAt: '2026-10-13T09:27:00' },
  { id: 'response_029', pollId: POLL_ID, score: 4, createdAt: '2026-10-13T09:28:00' },
  { id: 'response_030', pollId: POLL_ID, score: 5, createdAt: '2026-10-13T09:29:00' },
];
