import { Link } from 'react-router-dom';
import { BookOpen, BarChart2, CheckCircle, ChevronRight, Zap } from 'lucide-react';
import styles from './Home.module.css';

const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Sinh viên trả lời',
    description: 'Sinh viên chọn mức độ hiểu bài và gửi phản hồi qua thiết bị cá nhân.',
  },
  {
    number: '02',
    icon: CheckCircle,
    title: 'Hệ thống ghi nhận dữ liệu',
    description: 'Dữ liệu được thu thập và xử lý tự động, sẵn sàng cho phân tích.',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Giảng viên xem kết quả',
    description: 'Giảng viên theo dõi thống kê và biểu đồ phân phối phản hồi trực quan.',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Zap size={14} />
            <span>Nền tảng phản hồi lớp học thông minh</span>
          </div>
          <h1 className={styles.heroTitle}>
            Lắng nghe lớp học
            <span className={styles.heroAccent}> qua dữ liệu</span>
          </h1>
          <p className={styles.heroSubtitle}>
            EduPulse giúp giảng viên thu thập phản hồi từ sinh viên và trực quan hóa mức độ
            tiếp thu bài giảng thông qua biểu đồ và thống kê trực quan.
          </p>
        </div>

        {/* Role Cards */}
        <div className={styles.roleCards}>
          <Link to="/student" className={`${styles.roleCard} ${styles.studentCard}`}>
            <div className={styles.roleCardIcon}>
              <BookOpen size={32} />
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleCardTitle}>Tôi là Sinh viên</h2>
              <p className={styles.roleCardDesc}>
                Trả lời khảo sát và chia sẻ mức độ hiểu bài của bạn
              </p>
            </div>
            <ChevronRight size={20} className={styles.roleCardArrow} />
          </Link>

          <Link to="/teacher" className={`${styles.roleCard} ${styles.teacherCard}`}>
            <div className={styles.roleCardIcon}>
              <BarChart2 size={32} />
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleCardTitle}>Tôi là Giảng viên</h2>
              <p className={styles.roleCardDesc}>
                Xem thống kê và biểu đồ phân tích phản hồi lớp học từ dữ liệu mô phỏng
              </p>
            </div>
            <ChevronRight size={20} className={styles.roleCardArrow} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Quy trình hoạt động</h2>
          <p className={styles.sectionSubtitle}>
            EduPulse đơn giản hóa việc thu thập và phân tích phản hồi lớp học thành 3 bước.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {index < steps.length - 1 && (
                  <div className={styles.stepConnector} aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Demo Notice */}
      <section className={styles.demoNotice}>
        <div className={styles.demoNoticeContent}>
          <span className={styles.demoTag}>⚗️ Phiên bản Demo</span>
          <p>
            Đây là bản MVP Frontend – toàn bộ dữ liệu được mô phỏng và lưu cục bộ trong
            trình duyệt. Không có kết nối backend hay đồng bộ giữa các thiết bị ở giai đoạn này.
          </p>
        </div>
      </section>
    </div>
  );
}
