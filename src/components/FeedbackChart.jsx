import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import styles from './FeedbackChart.module.css';

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#0f766e'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { score, label, count } = payload[0].payload;
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltipScore}>{score}</p>
        <p className={styles.tooltipLabel}>{label}</p>
        <p className={styles.tooltipCount}>
          <strong>{count}</strong> phản hồi
        </p>
      </div>
    );
  }
  return null;
};

/**
 * FeedbackChart – Biểu đồ phân phối phản hồi dùng Recharts
 */
export default function FeedbackChart({ data }) {
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="score"
            tick={{ fontSize: 13, fill: '#64748b', fontFamily: 'inherit' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 12, fill: '#94a3b8', fontFamily: 'inherit' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(15,118,110,0.05)' }} />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
