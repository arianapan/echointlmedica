// 导入所有图片
import companylogo from './companylogo.jpg';
// logo 的小尺寸 webp 版本
import companylogoWebp128 from './companylogo.jpg?imagetools&format=webp&width=128';

// 产品卡片展示大小约 432x288，生成 288/432/768 宽度，格式 avif/webp/jpg
import Product1Avif from './Product1.jpg?imagetools&format=avif&width=288;432;768&as=srcset';
import Product1Webp from './Product1.jpg?imagetools&format=webp&width=288;432;768&as=srcset';
import Product1JpgSet from './Product1.jpg?imagetools&format=jpg&width=288;432;768&as=srcset';
import Product1_432 from './Product1.jpg?imagetools&width=432';

import Product2Avif from './Product2.jpg?imagetools&format=avif&width=288;432;768&as=srcset';
import Product2Webp from './Product2.jpg?imagetools&format=webp&width=288;432;768&as=srcset';
import Product2JpgSet from './Product2.jpg?imagetools&format=jpg&width=288;432;768&as=srcset';
import Product2_432 from './Product2.jpg?imagetools&width=432';

import Product3Avif from './Product3.jpg?imagetools&format=avif&width=288;432;768&as=srcset';
import Product3Webp from './Product3.jpg?imagetools&format=webp&width=288;432;768&as=srcset';
import Product3JpgSet from './Product3.jpg?imagetools&format=jpg&width=288;432;768&as=srcset';
import Product3_432 from './Product3.jpg?imagetools&width=432';

// 背景图：使用 1920 宽 webp 作为默认（Hero 背景）
import background1_1920 from './background1.jpg?imagetools&format=webp&width=1920';
import background2_1920 from './background2.jpg?imagetools&format=webp&width=1920';
import background3_1920 from './background3.jpg?imagetools&format=webp&width=1920';

// 导出统一的assets对象
const assets = {
  // logo
  companylogo,
  companylogoWebp128,
  // 产品图：提供 fallback 与各格式 srcset
  Product1: Product1_432,
  Product1SrcSet: { avif: Product1Avif, webp: Product1Webp, jpg: Product1JpgSet },
  Product2: Product2_432,
  Product2SrcSet: { avif: Product2Avif, webp: Product2Webp, jpg: Product2JpgSet },
  Product3: Product3_432,
  Product3SrcSet: { avif: Product3Avif, webp: Product3Webp, jpg: Product3JpgSet },
  // 背景图（webp）
  background1: background1_1920,
  background2: background2_1920,
  background3: background3_1920,
};

export default assets;
