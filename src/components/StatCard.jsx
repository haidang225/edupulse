import styles from './StatCard.module.css';

/**
 * StatCard – Hiển thị một thống kê quan trọng trên dashboard
 */
export default function StatCard({ icon: Icon, label, value, unit = '', color = 'primary', trend }) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          {Icon && <Icon size={22} />}
        </div>
        {trend !== undefined && (
          <span className={`${styles.trend} ${trend >= 0 ? styles.trendUp : styles.trendDown}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.value}>
          {value}
          {unit && <span className={styles.unit}>{unit}</span>}
        </div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
}
