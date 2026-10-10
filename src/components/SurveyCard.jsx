import styles from './SurveyCard.module.css';
import { ANSWER_OPTIONS } from '../data/mockResponses';

/**
 * SurveyCard – Hiển thị bảng khảo sát cho sinh viên
 */
export default function SurveyCard({
  title,
  description,
  selectedScore,
  onSelect,
  onSubmit,
  isSubmitted,
  onReset,
}) {
  if (isSubmitted) {
    return (
      <div className={styles.card}>
        <div className={styles.successState}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Cảm ơn bạn!</h2>
          <p className={styles.successMessage}>
            Phản hồi của bạn đã được ghi nhận.
          </p>
          <p className={styles.demoNotice}>
            ⚠️ Đây là bản DEMO – dữ liệu được lưu tạm thời trong trình duyệt của bạn, không phải trên máy chủ thật.
          </p>
          <button className={styles.resetButton} onClick={onReset}>
            Trả lời lại bản demo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.badge}>Khảo sát lớp học</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.options}>
        {ANSWER_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={`${styles.option} ${selectedScore === option.value ? styles.selected : ''}`}
            onClick={() => onSelect(option.value)}
            aria-pressed={selectedScore === option.value}
          >
            <span className={styles.optionNumber}>{option.value}</span>
            <span className={styles.optionLabel}>{option.label}</span>
            {selectedScore === option.value && (
              <span className={styles.checkmark}>✓</span>
            )}
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.selectionHint}>
          {selectedScore
            ? `Bạn đã chọn: Mức ${selectedScore}`
            : 'Hãy chọn một mức độ để tiếp tục'}
        </p>
        <button
          className={styles.submitButton}
          onClick={onSubmit}
          disabled={!selectedScore}
        >
          Gửi câu trả lời
        </button>
      </div>
    </div>
  );
}
