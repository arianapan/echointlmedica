import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  // 处理滚动动画
  useEffect(() => {
    const checkVisibility = () => {
      const element = document.querySelector('#thank-you .fade-in');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      }
    };
    
    // 延迟一点以确保动画效果可见
    setTimeout(checkVisibility, 100);
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);
  
  return (
    <section id="thank-you" className="py-20 min-h-[calc(100vh-64px-220px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto bg-lightBg p-8 rounded-lg shadow-sm text-center fade-in">
          {/* 感谢图标 */}
          <div className="w-20 h-20 bg-lightBlue text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-3xl"></i>
          </div>
          
          {/* 感谢内容 */}
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-6 text-textDark">Thank You!</h2>
          <p className="text-textMedium text-lg leading-relaxed mb-6">
            Your message has been successfully received. We appreciate you taking the time to contact Echo International Medica.
          </p>
          <p className="text-textMedium text-lg leading-relaxed mb-8">
            Our team will review your inquiry and get back to you within 24-48 business hours. For urgent matters, please feel free to call us directly.
          </p>
          
          {/* 返回首页按钮 */}
          <Link to="/" className="btn-primary inline-block">Return to Homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default Thanks;