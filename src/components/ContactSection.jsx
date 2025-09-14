import { useEffect } from 'react';

const ContactSection = () => {
  // 处理滚动动画
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#contact .fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);
  
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 标题区 */}
        <div className="text-center mb-15 fade-in">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">CONTACT US</h2>
          <div className="section-divider"></div>
        </div>
        
        {/* 联系内容区 */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* 左侧联系信息 */}
          <div className="lg:w-1/2 fade-in">
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-8 text-textDark">Get In Touch</h3>
            
            {/* 联系项 */}
            <div className="space-y-6">
              {/* 邮箱 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-lightBlue text-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-textDark">Email</h4>
                  <p className="text-textLight">ariana@echointlmedica.com</p>
                </div>
              </div>
              
              {/* 电话 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-lightBlue text-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-textDark">Phone</h4>
                  <p className="text-textLight">+1 (628) 225-8386</p>
                </div>
              </div>
              
              {/* 地址 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-lightBlue text-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0112 11.5z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-textDark">Offices</h4>
                  <p className="text-textLight mb-4">Hong Kong Office: RM22 2/F FU TAO BLDG NO.98, ARGYLE ST, MONG KOK, HONG KONG</p>
                  <p className="text-textLight">China Office: UNIT 2806 BLDG C HUANGDU PLAZA, FUTIAN DIST, SHENZHEN, CHINA</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧联系表单 */}
          <div className="lg:w-1/2 fade-in">
            <form 
              action="https://formsubmit.co/ariana@echointlmedica.com" 
              method="POST"
              className="bg-lightBg p-6 rounded-lg"
            >
              {/* 表单隐藏字段 */}
              <input type="hidden" name="_next" value="https://echointlmedica.com/thanks" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              
              {/* 姓名字段 */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-textDark font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 border border-borderMedium rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                />
              </div>
              
              {/* 邮箱字段 */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-textDark font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 border border-borderMedium rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                />
              </div>
              
              {/* 主题字段 */}
              <div className="mb-5">
                <label htmlFor="subject" className="block text-textDark font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  className="w-full px-4 py-3 border border-borderMedium rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                />
              </div>
              
              {/* 消息字段 */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-textDark font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-borderMedium rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-y"
                ></textarea>
              </div>
              
              {/* 提交按钮 */}
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;