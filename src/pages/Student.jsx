import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import SurveyCard from '../components/SurveyCard';
import {
  addResponse,
  hasStudentSubmitted,
  markStudentSubmitted,
  resetStudentSubmission,
  saveStudentScore,
  getSavedStudentScore,
} from '../services/feedbackService';
import { POLL_INFO } from '../data/mockResponses';
import styles from './Student.module.css';

export default function Student() {
  const [selectedScore, setSelectedScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Khôi phục trạng thái từ DEMO localStorage khi tải trang
  useEffect(() => {
    const submitted = hasStudentSubmitted();
    if (submitted) {
      setIsSubmitted(true);
      const savedScore = getSavedStudentScore();
      if (savedScore) setSelectedScore(savedScore);
    }
  }, []);

  const handleSelect = (score) => {
    setSelectedScore(score);
  };

  const handleSubmit = () => {
    if (!selectedScore) return;
    // Thêm phản hồi vào DEMO storage và đánh dấu đã nộp
    addResponse(selectedScore);
    saveStudentScore(selectedScore);
    markStudentSubmitted();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    resetStudentSubmission();
    setSelectedScore(null);
    setIsSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Navigation */}
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Quay về trang chủ</span>
        </Link>

        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Khảo sát lớp học</h1>
          <p className={styles.pageSubtitle}>
            Phản hồi của bạn giúp giảng viên điều chỉnh bài giảng phù hợp hơn.
          </p>
        </div>

        {/* Survey Card */}
        <SurveyCard
          title={POLL_INFO.title}
          description={POLL_INFO.description}
          selectedScore={selectedScore}
          onSelect={handleSelect}
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          onReset={handleReset}
        />

        {/* Info notice */}
        <div className={styles.infoNotice}>
          <Info size={15} />
          <span>
            Dữ liệu trong bản demo này được lưu cục bộ trong trình duyệt của bạn (localStorage).
            Không có thông tin nào được gửi lên máy chủ thật.
          </span>
        </div>
      </div>
    </div>
  );
}
