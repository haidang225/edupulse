import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Star, TrendingUp, PlusCircle, RefreshCw, Info } from 'lucide-react';
import StatCard from '../components/StatCard';
import FeedbackChart from '../components/FeedbackChart';
import {
  getAllResponses,
  addSimulatedResponse,
  resetToInitialData,
} from '../services/feedbackService';
import { POLL_INFO, ANSWER_OPTIONS } from '../data/mockResponses';
import {
  getTotalResponses,
  getAverageScore,
  getHighScorePercentage,
  getScorePercentages,
  getChartData,
} from '../utils/analytics';
import styles from './TeacherDashboard.module.css';

export default function TeacherDashboard() {
  const [responses, setResponses] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const loadResponses = useCallback(() => {
    setResponses(getAllResponses());
  }, []);

  useEffect(() => {
    loadResponses();
  }, [loadResponses]);

  const handleAddSimulated = () => {
    setIsAdding(true);
    setTimeout(() => {
      const updated = addSimulatedResponse();
      setResponses(updated);
      setIsAdding(false);
    }, 300);
  };

  const handleReset = () => {
    const initial = resetToInitialData();
    setResponses(initial);
  };

  // Tính toán thống kê động
  const total = getTotalResponses(responses);
  const average = getAverageScore(responses);
  const highScorePct = getHighScorePercentage(responses);
  const percentages = getScorePercentages(responses);
  const chartData = getChartData(responses);

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
          <div>
            <h1 className={styles.pageTitle}>Tổng quan phản hồi lớp học</h1>
            <p className={styles.pageSubtitle}>
              Phân tích phản hồi của sinh viên từ dữ liệu mô phỏng{' '}
              <span className={styles.demoTag}>(không có kết nối backend)</span>
            </p>
          </div>

          {/* Demo Controls */}
          <div className={styles.demoControls}>
            <button
              id="btn-add-simulated"
              className={`${styles.controlBtn} ${styles.addBtn}`}
              onClick={handleAddSimulated}
              disabled={isAdding}
            >
              <PlusCircle size={16} />
              <span>{isAdding ? 'Đang thêm...' : 'Thêm phản hồi mô phỏng'}</span>
            </button>
            <button
              id="btn-reset-demo"
              className={`${styles.controlBtn} ${styles.resetBtn}`}
              onClick={handleReset}
            >
              <RefreshCw size={16} />
              <span>Đặt lại dữ liệu demo</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className={styles.statsGrid}>
          <StatCard
            icon={Users}
            label="Tổng số phản hồi"
            value={total}
            unit="phản hồi"
            color="teal"
          />
          <StatCard
            icon={Star}
            label="Điểm trung bình"
            value={average}
            unit="/ 5"
            color="blue"
          />
          <StatCard
            icon={TrendingUp}
            label="Tỷ lệ hiểu khá – rất tốt (4–5)"
            value={highScorePct}
            unit="%"
            color="purple"
          />
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Chart Section */}
          <div className={styles.chartSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Phân phối phản hồi</h2>
              <span className={styles.sectionBadge}>{total} phản hồi</span>
            </div>
            <FeedbackChart data={chartData} />
          </div>

          {/* Distribution Breakdown */}
          <div className={styles.breakdownSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Chi tiết theo mức độ</h2>
            </div>
            <div className={styles.breakdownList}>
              {ANSWER_OPTIONS.map((option) => {
                const pct = percentages[option.value] || 0;
                const count = chartData.find((d) => d.score === `Mức ${option.value}`)?.count || 0;
                return (
                  <div key={option.value} className={styles.breakdownItem}>
                    <div className={styles.breakdownMeta}>
                      <span className={styles.breakdownLevel}>Mức {option.value}</span>
                      <span className={styles.breakdownLabel}>{option.label}</span>
                      <span className={styles.breakdownCount}>{count} ({pct}%)</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${pct}%` }}
                        data-score={option.value}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Survey Info */}
        <div className={styles.surveyInfo}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Thông tin khảo sát</h2>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Tiêu đề</span>
              <span className={styles.infoValue}>{POLL_INFO.title}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Khóa học</span>
              <span className={styles.infoValue}>{POLL_INFO.course}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Trạng thái</span>
              <span className={`${styles.infoValue} ${styles.infoBadge}`}>{POLL_INFO.status}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Nguồn dữ liệu</span>
              <span className={styles.infoValue}>{POLL_INFO.dataSource}</span>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className={styles.demoNotice}>
          <Info size={15} />
          <span>
            Dữ liệu trong trang này là dữ liệu mô phỏng, được lưu cục bộ trong localStorage
            của trình duyệt. Không có backend, không có đồng bộ giữa các thiết bị hay trình duyệt khác nhau.
          </span>
        </div>
      </div>
    </div>
  );
}
