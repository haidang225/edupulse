import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Student from './pages/Student';
import TeacherDashboard from './pages/TeacherDashboard';
import './index.css';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          {/* Fallback: chuyển về Home nếu route không tồn tại */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>EduPulse – Educational Technology Project &nbsp;|&nbsp; Khoa học Dữ liệu và Ứng dụng trong Giáo dục</p>
      </footer>
    </HashRouter>
  );
}
