import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BarChart2, Home } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Trang chủ', icon: Home },
    { to: '/student', label: 'Sinh viên', icon: BookOpen },
    { to: '/teacher', label: 'Giảng viên', icon: BarChart2 },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.brand}>
          <div className={styles.brandIcon}>
            <BookOpen size={20} />
          </div>
          <span className={styles.brandName}>EduPulse</span>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.navLink} ${location.pathname === to ? styles.active : ''}`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
