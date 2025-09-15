const FooterSkeleton = () => {
  return (
    <footer 
      className="bg-lightBg text-textLight pt-15 pb-6 border-t border-borderLight"
      style={{ minHeight: '400px' }}
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 页脚内容区骨架 */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* 左侧Logo和描述骨架 */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-borderLight rounded mr-2 animate-pulse"></div>
              <div className="h-6 bg-borderLight rounded w-48 animate-pulse"></div>
            </div>
            <div className="mb-6 space-y-2">
              <div className="h-4 bg-borderLight rounded w-full animate-pulse"></div>
              <div className="h-4 bg-borderLight rounded w-3/4 animate-pulse"></div>
            </div>
            
            {/* 社交媒体链接骨架 */}
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 bg-borderLight rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          
          {/* 中间快速链接骨架 */}
          <div style={{ minHeight: '200px' }}>
            <div className="h-6 bg-borderLight rounded w-24 mb-6 animate-pulse"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-4 bg-borderLight rounded w-20 animate-pulse"></div>
              ))}
            </div>
          </div>
          
          {/* 右侧区域链接骨架 */}
          <div style={{ minHeight: '200px' }}>
            <div className="h-6 bg-borderLight rounded w-16 mb-6 animate-pulse"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-borderLight rounded w-24 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 版权信息骨架 */}
        <div className="text-center pt-6 border-t border-borderLight">
          <div className="h-4 bg-borderLight rounded w-72 mx-auto animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;